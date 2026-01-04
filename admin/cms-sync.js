/**
 * CMS Data Synchronization Script
 * 
 * This script syncs data from Decap CMS JSON files to gallery-data.js
 * Run this after editing content in the admin panel to update the gallery
 * 
 * Usage: node admin/cms-sync.js
 */

const fs = require('fs');
const path = require('path');

// File paths
const PROJECTS_DIR = path.join(__dirname, '../_projects');
const GALLERY_DATA_FILE = path.join(__dirname, '../gallery-data.js');

/**
 * Read all project Markdown files from _projects folder
 */
function readAllProjects() {
    const files = fs.readdirSync(PROJECTS_DIR).filter(f => f.endsWith('.md'));

    const projects = files.map((file, index) => {
        const content = fs.readFileSync(path.join(PROJECTS_DIR, file), 'utf8');
        const project = parseFrontmatter(content);

        // Ensure project has an ID (use index + 1)
        return {
            id: index + 1,
            ...project
        };
    });

    // Sort by year (newest first)
    return projects.sort((a, b) => parseInt(b.year) - parseInt(a.year));
}

/**
 * Simple YAML frontmatter parser
 */
function parseFrontmatter(content) {
    const match = content.match(/^---\n([\s\S]*?)\n---/);
    if (!match) return {};

    const yaml = match[1];
    const data = {};

    yaml.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();

            // Remove quotes
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }

            // Handle arrays (tech stack)
            if (key === 'tech' || value.startsWith('-')) {
                if (!data.tech) data.tech = [];
            } else if (data.tech && line.trim().startsWith('-')) {
                data.tech.push(line.trim().substring(1).trim());
            } else {
                data[key] = value;
            }
        }
    });

    return data;
}

/**
 * Read categories configuration
 */
function getCategoriesConfig() {
    return [
        { id: 'all', label: 'All Work', icon: 'fa-grid' },
        { id: 'commercial', label: 'Commercial', icon: 'fa-briefcase' },
        { id: 'narrative', label: 'Narrative', icon: 'fa-film' },
        { id: 'events', label: 'Events', icon: 'fa-champagne-glasses' },
        { id: 'music', label: 'Music Videos', icon: 'fa-music' },
        { id: 'bts', label: 'Behind The Scenes', icon: 'fa-camera' }
    ];
}

/**
 * Generate gallery-data.js file content
 */
function generateGalleryDataFile(projects, categories) {
    const projectsJSON = JSON.stringify(projects, null, 4);
    const categoriesJSON = JSON.stringify(categories, null, 4);

    return `// Gallery Project Data - Auto-generated from CMS
// DO NOT EDIT MANUALLY - Use the admin panel at /admin to edit projects
// Last updated: ${new Date().toISOString()}

window.galleryProjects = ${projectsJSON};

// Category configuration
window.categories = ${categoriesJSON};
`;
}

/**
 * Main sync function
 */
function syncCMSData() {
    try {
        console.log('🔄 Syncing CMS data to gallery-data.js...');

        // Check if projects directory exists
        if (!fs.existsSync(PROJECTS_DIR)) {
            console.log('📁 Creating _projects directory...');
            fs.mkdirSync(PROJECTS_DIR, { recursive: true });
        }

        // Read all projects
        const projects = readAllProjects();
        console.log(`✅ Found ${projects.length} projects`);

        // Get categories config
        const categories = getCategoriesConfig();

        // Generate gallery-data.js
        const fileContent = generateGalleryDataFile(projects, categories);

        // Write to file
        fs.writeFileSync(GALLERY_DATA_FILE, fileContent, 'utf8');

        console.log('✅ Successfully synced data to gallery-data.js');
        console.log(`📊 Projects: ${projects.length}`);
        console.log(`📂 Categories: ${categories.length}`);

    } catch (error) {
        console.error('❌ Error syncing CMS data:', error);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    syncCMSData();
}

module.exports = { syncCMSData, readAllProjects, getCategoriesConfig };
