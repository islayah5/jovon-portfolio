/**
 * Browser-based CMS Data Loader
 * 
 * Loads CMS data and integrates with portfolio:
 * - Contact info, hero, about sections from _data/*.json
 * - Skills from _data/skills.json
 * 
 * Note: Gallery projects are loaded from gallery-data.js which is 
 * auto-synced by GitHub Actions from the _projects/ directory.
 */

class CMSDataLoader {
    constructor() {
        this.dataCache = {};
    }

    /**
     * Load JSON file from _data directory
     */
    async loadJSON(filename) {
        if (this.dataCache[filename]) {
            return this.dataCache[filename];
        }

        try {
            const response = await fetch(`_data/${filename}`);
            if (!response.ok) {
                console.warn(`Could not load _data/${filename}, using defaults`);
                return null;
            }
            const data = await response.json();
            this.dataCache[filename] = data;
            return data;
        } catch (error) {
            console.warn(`Error loading _data/${filename}:`, error);
            return null;
        }
    }

    /**
     * Load all CMS data files
     */
    async loadAllData() {
        const [contact, hero, about, skills] = await Promise.all([
            this.loadJSON('contact.json'),
            this.loadJSON('hero.json'),
            this.loadJSON('about.json'),
            this.loadJSON('skills.json')
        ]);

        return { contact, hero, about, skills };
    }

    /**
     * Update page content with CMS data
     */
    updatePageContent(data) {
        const { contact, hero, about, skills } = data;

        // Update contact email (appears 4 times)
        if (contact?.email) {
            document.querySelectorAll('a[href*="mailto"]').forEach(link => {
                link.href = `mailto:${contact.email}`;
            });

            // Update text content where email is displayed
            const emailElements = document.querySelectorAll('body');
            emailElements.forEach(el => {
                if (el.textContent.includes('jovon@example.com')) {
                    el.innerHTML = el.innerHTML.replace(/jovon@example\.com/g, contact.email);
                }
            });
        }

        // Update social links
        if (contact) {
            if (contact.linkedin) {
                const linkedinLink = document.querySelector('a[href*="linkedin"]');
                if (linkedinLink) linkedinLink.href = contact.linkedin;
            }
            if (contact.instagram) {
                const instagramLink = document.querySelector('a[href*="instagram"]');
                if (instagramLink) instagramLink.href = contact.instagram;
            }
            if (contact.vimeo) {
                const vimeoLink = document.querySelector('a[href*="vimeo"]');
                if (vimeoLink) vimeoLink.href = contact.vimeo;
            }
            if (contact.resume) {
                const resumeLink = document.querySelector('a[href="#"][target="_blank"]');
                if (resumeLink && resumeLink.textContent.includes('Resume')) {
                    resumeLink.href = contact.resume;
                }
            }
        }

        // Update hero section
        if (hero) {
            if (hero.headshot) {
                const headshotImg = document.querySelector('img[alt*="Jovon"]');
                if (headshotImg) headshotImg.src = hero.headshot;
            }

            if (hero.tagline) {
                const taglineElement = document.querySelector('header p.text-base');
                if (taglineElement) taglineElement.textContent = hero.tagline;
            }
        }

        // Update about section
        if (about) {
            const aboutParagraphs = document.querySelectorAll('#about .space-y-6 p');
            if (about.background && aboutParagraphs[0]) {
                aboutParagraphs[0].textContent = about.background;
            }
            if (about.philosophy && aboutParagraphs[1]) {
                aboutParagraphs[1].textContent = about.philosophy;
            }
        }

        // Update skills section (if skills data exists)
        if (skills && skills.skills && Array.isArray(skills.skills)) {
            this.updateSkills(skills.skills);
        }

        console.log('✅ CMS data loaded and applied to page');
    }

    /**
     * Update skills section with CMS data
     */
    updateSkills(skillsData) {
        const cardsContainer = document.getElementById('cards-container');
        if (!cardsContainer || skillsData.length === 0) return;

        // Clear existing cards
        cardsContainer.innerHTML = '';

        // Create cards from CMS data
        skillsData.forEach((skill, index) => {
            const delay = (index % 3) * 100; // Stagger animation
            const card = document.createElement('div');
            card.className = `spotlight-card rounded-xl p-8 group reveal delay-${delay}`;
            card.innerHTML = `
                <div class="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    <i class="fas ${skill.icon} text-2xl text-blue"></i>
                </div>
                <h4 class="text-lg font-bold text-white mb-3">${skill.title}</h4>
                <p class="text-muted text-sm leading-relaxed">${skill.description}</p>
            `;
            cardsContainer.appendChild(card);
        });

        console.log(`✅ Updated ${skillsData.length} skills`);
    }

    /**
     * Initialize CMS data loading
     */
    async init() {
        try {
            const data = await this.loadAllData();
            this.updatePageContent(data);

            // Make data available globally
            window.cmsData = data;
        } catch (error) {
            console.error('Error loading CMS data:', error);
        }
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const loader = new CMSDataLoader();
        loader.init();
    });
} else {
    const loader = new CMSDataLoader();
    loader.init();
}
