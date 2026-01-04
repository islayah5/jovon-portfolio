/* ================================================
   PORTFOLIO SCRIPT - NEXT LEVEL EDITION
   Advanced interactions and animations
   ================================================ */

// ============================================
// CUSTOM CURSOR SYSTEM
// ============================================
class CustomCursor {
    constructor() {
        this.cursor = null;
        this.follower = null;
        this.cursorPos = { x: 0, y: 0 };
        this.followerPos = { x: 0, y: 0 };
        this.isHovering = false;

        this.init();
    }

    init() {
        // Create cursor elements
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';

        this.follower = document.createElement('div');
        this.follower.className = 'custom-cursor-follower';

        document.body.appendChild(this.cursor);
        document.body.appendChild(this.follower);

        // Event listeners
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        document.addEventListener('mousedown', () => this.onMouseDown());
        document.addEventListener('mouseup', () => this.onMouseUp());

        // Hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .gallery-item, .filter-btn');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.onHoverStart());
            el.addEventListener('mouseleave', () => this.onHoverEnd());
        });

        // Start animation loop
        this.animate();

        // Show cursor after a brief delay
        setTimeout(() => {
            this.cursor.classList.add('active');
            this.follower.classList.add('active');
        }, 100);
    }

    onMouseMove(e) {
        this.cursorPos.x = e.clientX;
        this.cursorPos.y = e.clientY;
    }

    onMouseDown() {
        this.cursor.classList.add('click');
    }

    onMouseUp() {
        this.cursor.classList.remove('click');
    }

    onHoverStart() {
        this.cursor.classList.add('hover');
        this.isHovering = true;
    }

    onHoverEnd() {
        this.cursor.classList.remove('hover');
        this.isHovering = false;
    }

    animate() {
        // Smooth cursor following with lag effect
        this.followerPos.x += (this.cursorPos.x - this.followerPos.x) * 0.15;
        this.followerPos.y += (this.cursorPos.y - this.followerPos.y) * 0.15;

        // Update positions
        this.cursor.style.transform = `translate(${this.cursorPos.x - 10}px, ${this.cursorPos.y - 10}px)`;
        this.follower.style.transform = `translate(${this.followerPos.x - 4}px, ${this.followerPos.y - 4}px)`;

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================
class ScrollProgress {
    constructor() {
        this.progressBar = document.createElement('div');
        this.progressBar.className = 'scroll-progress';
        document.body.appendChild(this.progressBar);

        window.addEventListener('scroll', () => this.update());
    }

    update() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        this.progressBar.style.width = `${scrolled}%`;
    }
}

// ============================================
// GALLERY CONTROLLER WITH FILTERING
// ============================================
class GalleryController {
    constructor() {
        this.currentFilter = 'all';
        this.projects = [];
        this.init();
    }

    async init() {
        try {
            const response = await fetch('_data/gallery.json');
            if (response.ok) {
                this.projects = await response.json();
            } else {
                console.warn('Could not load gallery.json, falling back to empty');
            }
        } catch (error) {
            console.error('Error loading gallery projects:', error);
        }

        this.renderFilters();
        this.renderGallery();
        this.setupFilterListeners();

        // Dispatch event for LightboxManager to know data is ready
        window.dispatchEvent(new CustomEvent('galleryReady', { detail: { projects: this.projects } }));
    }

    renderFilters() {
        const filtersContainer = document.getElementById('gallery-filters');
        if (!filtersContainer) return;

        const categories = window.categories || [
            { id: 'all', label: 'All Work', icon: 'fa-grid' },
            { id: 'commercial', label: 'Commercial', icon: 'fa-briefcase' },
            { id: 'narrative', label: 'Narrative', icon: 'fa-film' },
            { id: 'events', label: 'Events', icon: 'fa-champagne-glasses' },
            { id: 'music', label: 'Music Videos', icon: 'fa-music' },
            { id: 'bts', label: 'Behind The Scenes', icon: 'fa-camera' }
        ];

        // Make categories available globally just in case
        window.categories = categories;

        filtersContainer.innerHTML = categories.map(cat => {
            const count = cat.id === 'all'
                ? this.projects.length
                : this.projects.filter(p => p.category === cat.id).length;

            return `
                <button class="filter-btn ${cat.id === 'all' ? 'active' : ''}" data-filter="${cat.id}">
                    <i class="fas ${cat.icon}"></i>
                    ${cat.label}
                    <span class="count">${count}</span>
                </button>
            `;
        }).join('');
    }

    renderGallery() {
        const galleryContainer = document.getElementById('gallery-grid');
        if (!galleryContainer) return;

        galleryContainer.innerHTML = this.projects.map((project, index) => {
            const isHidden = this.currentFilter !== 'all' && project.category !== this.currentFilter;
            const containClass = project.containImage ? 'contain-image' : '';

            let mediaHTML;
            if (project.type === 'video') {
                mediaHTML = `
                    <video autoplay loop muted playsinline class="w-full h-full object-cover">
                        <source src="${project.src}" type="video/mp4">
                    </video>
                `;
            } else {
                mediaHTML = `<img src="${project.src}" alt="${project.title}" loading="lazy">`;
            }

            return `
                <div class="gallery-item group cursor-pointer reveal ${containClass} ${isHidden ? 'hidden' : ''}" 
                     data-id="${project.id}" 
                     data-category="${project.category}"
                     style="transition-delay: ${index * 50}ms">
                    ${mediaHTML}
                    <div class="gallery-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 pointer-events-none">
                        <p class="text-blue text-xs font-bold uppercase tracking-wider mb-1">${project.category}</p>
                        <h4 class="text-white text-xl font-bold">${project.title}</h4>
                        <p class="text-white/70 text-xs mt-1">
                            <i class="fas fa-expand mr-1"></i> Click to View
                        </p>
                    </div>
                </div>
            `;
        }).join('');

        // Re-observe gallery items for reveal animation
        document.querySelectorAll('.gallery-item').forEach(el => {
            if (window.revealObserver) {
                window.revealObserver.observe(el);
            }
        });
    }

    setupFilterListeners() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                this.filterGallery(filter);

                // Update active state
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    filterGallery(filter) {
        this.currentFilter = filter;
        const items = document.querySelectorAll('.gallery-item');

        items.forEach((item, index) => {
            const category = item.dataset.category;
            const shouldShow = filter === 'all' || category === filter;

            if (shouldShow) {
                setTimeout(() => {
                    item.classList.remove('hidden');
                    item.style.transitionDelay = `${index * 50}ms`;
                }, index * 30);
            } else {
                item.classList.add('hidden');
            }
        });
    }
}

// ============================================
// ADVANCED LIGHTBOX SYSTEM
// ============================================
class LightboxManager {
    constructor() {
        this.currentIndex = 0;
        this.projects = [];
        this.filteredProjects = [];
        this.lightbox = document.getElementById('lightbox');

        if (this.lightbox) {
            this.init();
        }
    }

    init() {
        // Listen for data from GalleryController
        window.addEventListener('galleryReady', (e) => {
            this.projects = e.detail.projects;
            this.filteredProjects = [...this.projects];
        });

        this.setupGalleryListeners();
        this.setupNavigationListeners();
        this.setupKeyboardListeners();
    }

    setupGalleryListeners() {
        document.addEventListener('click', (e) => {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem && !galleryItem.classList.contains('hidden')) {
                const projectId = parseInt(galleryItem.dataset.id);
                this.openLightbox(projectId);
            }
        });
    }

    openLightbox(projectId) {
        const project = this.projects.find(p => p.id === projectId);
        if (!project) return;

        // Update filtered projects based on current gallery view
        const visibleItems = document.querySelectorAll('.gallery-item:not(.hidden)');
        this.filteredProjects = Array.from(visibleItems).map(item => {
            return this.projects.find(p => p.id === parseInt(item.dataset.id));
        }).filter(Boolean);

        this.currentIndex = this.filteredProjects.findIndex(p => p.id === projectId);
        this.renderLightboxContent(project);
        this.lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    renderLightboxContent(project) {
        const lightboxContent = document.getElementById('lightbox-content');

        let mediaHTML;
        if (project.type === 'video') {
            mediaHTML = `
                <video controls autoplay class="w-full h-auto max-h-[75vh] rounded-lg">
                    <source src="${project.src}" type="video/mp4">
                </video>
            `;
        } else {
            mediaHTML = `<img src="${project.src}" alt="${project.title}" class="w-auto h-auto max-h-[75vh] rounded-lg object-contain">`;
        }

        const canNavigate = this.filteredProjects.length > 1;
        const prevDisabled = this.currentIndex === 0;
        const nextDisabled = this.currentIndex === this.filteredProjects.length - 1;

        lightboxContent.innerHTML = `
            <div class="lightbox-content-wrapper">
                <div class="lightbox-counter">
                    ${this.currentIndex + 1} / ${this.filteredProjects.length}
                </div>
                
                <button class="lightbox-back" id="lightbox-back">
                    <i class="fas fa-arrow-left"></i> Back to Gallery
                </button>
                
                <div class="lightbox-category">
                    ${project.category}
                </div>
                
                ${canNavigate && !prevDisabled ? `
                    <button class="lightbox-nav prev" id="lightbox-prev">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                ` : ''}
                
                ${canNavigate && !nextDisabled ? `
                    <button class="lightbox-nav next" id="lightbox-next">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                ` : ''}
                
                ${mediaHTML}
                
                <div class="lightbox-info">
                    <p class="text-blue text-xs font-bold uppercase tracking-wider mb-2">${project.category} • ${project.year}</p>
                    <h3 class="text-2xl font-bold mb-2">${project.title}</h3>
                    <p class="text-white/80 mb-3">${project.description}</p>
                    <div class="flex gap-2 flex-wrap">
                        ${project.tech.map(tech => `
                            <span class="text-xs px-3 py-1 bg-blue/20 border border-blue/30 rounded-full text-bluelight">
                                ${tech}
                            </span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        // Setup navigation button listeners
        const prevBtn = document.getElementById('lightbox-prev');
        const nextBtn = document.getElementById('lightbox-next');
        const backBtn = document.getElementById('lightbox-back');

        if (prevBtn) prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.navigate(-1);
        });

        if (nextBtn) nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.navigate(1);
        });

        if (backBtn) backBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeLightbox();
        });
    }

    navigate(direction) {
        const newIndex = this.currentIndex + direction;

        if (newIndex >= 0 && newIndex < this.filteredProjects.length) {
            this.currentIndex = newIndex;
            this.renderLightboxContent(this.filteredProjects[this.currentIndex]);
        }
    }

    setupNavigationListeners() {
        const closeBtn = document.getElementById('lightbox-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeLightbox());
        }

        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.closeLightbox();
            }
        });
    }

    setupKeyboardListeners() {
        document.addEventListener('keydown', (e) => {
            if (!this.lightbox.classList.contains('active')) return;

            switch (e.key) {
                case 'Escape':
                    this.closeLightbox();
                    break;
                case 'ArrowLeft':
                    this.navigate(-1);
                    break;
                case 'ArrowRight':
                    this.navigate(1);
                    break;
            }
        });
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = '';

        setTimeout(() => {
            document.getElementById('lightbox-content').innerHTML = '';
        }, 300);
    }
}

// ============================================
// MAGNETIC BUTTON EFFECT
// ============================================
class MagneticButtons {
    constructor() {
        this.init();
    }

    init() {
        const magneticButtons = document.querySelectorAll('.btn-gold, .btn-magnetic');

        magneticButtons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => this.onMouseMove(e, btn));
            btn.addEventListener('mouseleave', (e) => this.onMouseLeave(e, btn));
        });
    }

    onMouseMove(e, btn) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const moveX = x * 0.3;
        const moveY = y * 0.3;

        btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }

    onMouseLeave(e, btn) {
        btn.style.transform = '';
    }
}

// ============================================
// PARALLAX SCROLL EFFECTS
// ============================================
class ParallaxController {
    constructor() {
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.update());
    }

    update() {
        const scrolled = window.scrollY;

        // Parallax for ambient background blobs
        const blobs = document.querySelectorAll('.animate-blob');
        blobs.forEach((blob, index) => {
            const speed = 0.1 + (index * 0.05);
            blob.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
}

// ============================================
// REVEAL ANIMATION CONTROLLER
// ============================================
class RevealController {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        window.revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        // Observe all reveal elements
        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
            window.revealObserver.observe(el);
        });
    }
}

// ============================================
// SPOTLIGHT CARD EFFECT
// ============================================
function handleMouseMove(e) {
    const cards = document.getElementsByClassName("spotlight-card");
    for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
}

// ============================================
// 3D TILT CARD EFFECT
// ============================================
class TiltEffect {
    constructor() {
        this.init();
    }

    init() {
        const tiltCards = document.querySelectorAll('.spotlight-card');

        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => this.handleTilt(e, card));
            card.addEventListener('mouseleave', () => this.resetTilt(card));
        });
    }

    handleTilt(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.setProperty('--tilt-x', `${rotateX}deg`);
        card.style.setProperty('--tilt-y', `${rotateY}deg`);
    }

    resetTilt(card) {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
    }
}

// ============================================
// NAVIGATION SCROLL EFFECT
// ============================================
class NavigationController {
    constructor() {
        this.nav = document.querySelector('.nav-pill');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.update());
    }

    update() {
        if (window.scrollY > 100) {
            this.nav?.classList.add('scrolled');
        } else {
            this.nav?.classList.remove('scrolled');
        }
    }
}

// ============================================
// PRELOADER
// ============================================
class Preloader {
    constructor() {
        this.preloader = document.getElementById('preloader');
        if (this.preloader) {
            this.init();
        }
    }

    init() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.preloader.classList.add('hidden');
                setTimeout(() => {
                    this.preloader.remove();
                }, 500);
            }, 800);
        });
    }
}

// ============================================
// FAVICON ANIMATION
// ============================================
class FaviconAnimator {
    constructor() {
        this.canvas = document.getElementById('faviconCanvas');
        this.ctx = this.canvas?.getContext('2d');
        this.faviconLink = document.getElementById('favicon');
        this.size = 32;
        this.rotationAngle = 0;
        this.lastTime = 0;
        this.fps = 30;
        this.interval = 1000 / this.fps;

        if (this.canvas && this.ctx && this.faviconLink) {
            this.animate(0);
        }
    }

    drawGlyph(time) {
        const centerX = this.size / 2;
        const centerY = this.size / 2;
        const outerRadius = this.size * 0.45;
        const innerRadius = this.size * 0.15;

        const pulse = (Math.sin(time * 12) + 1) / 2;
        const rotationSpeed = (2 * Math.PI) / (this.fps * 1.5);

        this.rotationAngle += rotationSpeed;
        this.ctx.clearRect(0, 0, this.size, this.size);

        // Outer glow
        const blueGlow = `rgba(59, 130, 246, ${0.4 + pulse * 0.6})`;
        this.ctx.shadowBlur = this.size * (1.0 + pulse * 0.8);
        this.ctx.shadowColor = blueGlow;

        // Dark base
        this.ctx.fillStyle = '#0b1221';
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.shadowBlur = 0;

        // Rotating glyph segments
        const numSegments = 4;
        const chevronWidth = this.size * 0.12;

        this.ctx.save();
        this.ctx.translate(centerX, centerY);
        this.ctx.rotate(this.rotationAngle);

        for (let i = 0; i < numSegments; i++) {
            const angle = (i / numSegments) * Math.PI * 2;

            this.ctx.save();
            this.ctx.rotate(angle);

            this.ctx.beginPath();
            this.ctx.moveTo(innerRadius * 1.0, 0);
            this.ctx.lineTo(outerRadius * 0.95, -chevronWidth / 2);
            this.ctx.lineTo(outerRadius * 0.95, chevronWidth / 2);
            this.ctx.closePath();

            this.ctx.fillStyle = `rgba(96, 165, 250, ${0.8 + pulse * 0.2})`;
            this.ctx.shadowBlur = this.size * 0.3;
            this.ctx.shadowColor = `rgba(59, 130, 246, 0.8)`;
            this.ctx.fill();
            this.ctx.restore();
        }

        this.ctx.restore();

        // Central core
        const coreRadius = innerRadius * 0.8;
        this.ctx.shadowBlur = this.size * 0.2 * (1 + pulse);
        this.ctx.shadowColor = `rgba(59, 130, 246, ${0.5 + pulse * 0.5})`;
        this.ctx.fillStyle = '#3b82f6';
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.shadowBlur = 0;
        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = this.size * 0.01;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
        this.ctx.stroke();
    }

    animate(timestamp) {
        requestAnimationFrame((t) => this.animate(t));

        const elapsed = timestamp - this.lastTime;
        if (elapsed > this.interval) {
            this.lastTime = timestamp - (elapsed % this.interval);
            const time = timestamp / 1000;

            this.drawGlyph(time);
            this.faviconLink.href = this.canvas.toDataURL('image/png');
        }
    }
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Check if on mobile/tablet
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Initialize cursor only on desktop
    if (!isMobile) {
        new CustomCursor();
    }

    // Initialize all controllers
    new ScrollProgress();
    new GalleryController();
    new LightboxManager();
    new MagneticButtons();
    new ParallaxController();
    new RevealController();
    new TiltEffect();
    new NavigationController();
    new Preloader();
    new FaviconAnimator();

    console.log('🚀 Portfolio initialized with next-level features!');
});
