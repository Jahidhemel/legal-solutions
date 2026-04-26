/* =========================================================
   Legal Solutions — Frontend Interactions
   Author: Md. Jahidul Islam Hemel
   ========================================================= */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    /* -----------------------------------------------------
       1. Auto-update copyright year
    ----------------------------------------------------- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();


    /* -----------------------------------------------------
       2. Sticky header shadow on scroll
    ----------------------------------------------------- */
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('is-scrolled', window.scrollY > 8);
        });
    }


    /* -----------------------------------------------------
       3. Mobile menu toggle
    ----------------------------------------------------- */
    const menuBtn = document.getElementById('menuBtn');
    const menu    = document.getElementById('mobileMenu');
    if (menuBtn && menu) {
        menuBtn.addEventListener('click', () => {
            menu.classList.toggle('is-open');
            menuBtn.innerHTML = menu.classList.contains('is-open')
                ? '<i class="fa fa-times"></i>'
                : '<i class="fa fa-bars"></i>';
        });
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('is-open');
                menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
            });
        });
    }


    /* -----------------------------------------------------
       4. Toast helper
    ----------------------------------------------------- */
    function showToast(message) {
        let t = document.querySelector('.ls-toast');
        if (!t) {
            t = document.createElement('div');
            t.className = 'ls-toast';
            document.body.appendChild(t);
        }
        t.textContent = message;
        requestAnimationFrame(() => t.classList.add('is-show'));
        clearTimeout(t._timer);
        t._timer = setTimeout(() => t.classList.remove('is-show'), 3500);
    }


    /* -----------------------------------------------------
       5. Modal helper (lazy)
    ----------------------------------------------------- */
    function showModal(title, body) {
        let backdrop = document.querySelector('.ls-modal-backdrop');
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.className = 'ls-modal-backdrop';
            backdrop.innerHTML = `
                <div class="ls-modal" role="dialog" aria-modal="true">
                    <button class="close" aria-label="Close">&times;</button>
                    <h3 class="t"></h3>
                    <p class="b"></p>
                    <a class="btn btn--primary" href="mailto:jahidhemel@gmail.com">
                        <i class="fa fa-envelope"></i> Email Hemel
                    </a>
                </div>
            `;
            document.body.appendChild(backdrop);

            const close = () => backdrop.classList.remove('is-show');
            backdrop.addEventListener('click', e => {
                if (e.target === backdrop || e.target.classList.contains('close')) close();
            });
            document.addEventListener('keydown', e => {
                if (e.key === 'Escape') close();
            });
        }
        backdrop.querySelector('.t').textContent = title;
        backdrop.querySelector('.b').textContent = body;
        backdrop.classList.add('is-show');
    }


    /* -----------------------------------------------------
       6. Hero search
    ----------------------------------------------------- */
    const heroForm  = document.getElementById('heroSearch');
    const heroInput = document.getElementById('heroSearchInput');
    if (heroForm && heroInput) {
        heroForm.addEventListener('submit', e => {
            e.preventDefault();
            const q = heroInput.value.trim();
            if (!q) {
                showToast('Type a service to search.');
                return;
            }
            showToast(`🔍 Searching for "${q}"…`);
            heroInput.value = '';
        });
    }


    /* -----------------------------------------------------
       7. Practice card → demo modal
    ----------------------------------------------------- */
    document.querySelectorAll('.demo-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3')?.textContent || 'Practice area';
            showModal(
                title,
                "This is a portfolio demo, so the practice-area pages aren't built. Drop me an email if you'd like to chat about the project."
            );
        });
    });


    /* -----------------------------------------------------
       8. Testimonial slider
    ----------------------------------------------------- */
    const track = document.getElementById('testimonialTrack');
    const dotsHolder = document.getElementById('testimonialDots');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    if (track) {
        const slides = track.children;
        let current = 0;
        let autoplay;

        // Build dots
        if (dotsHolder) {
            for (let i = 0; i < slides.length; i++) {
                const dot = document.createElement('button');
                dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
                dot.addEventListener('click', () => goTo(i));
                dotsHolder.appendChild(dot);
            }
        }

        function update() {
            track.style.transform = `translateX(-${current * 100}%)`;
            if (dotsHolder) {
                Array.from(dotsHolder.children).forEach((dot, i) => {
                    dot.classList.toggle('is-active', i === current);
                });
            }
        }

        function goTo(idx) {
            current = (idx + slides.length) % slides.length;
            update();
            restartAutoplay();
        }

        function next() { goTo(current + 1); }
        function prev() { goTo(current - 1); }

        function restartAutoplay() {
            clearInterval(autoplay);
            autoplay = setInterval(next, 6000);
        }

        if (nextBtn) nextBtn.addEventListener('click', next);
        if (prevBtn) prevBtn.addEventListener('click', prev);

        update();
        restartAutoplay();
    }


    /* -----------------------------------------------------
       9. FAQ accordion
    ----------------------------------------------------- */
    document.querySelectorAll('.faq__item').forEach(item => {
        const btn = item.querySelector('button');
        if (!btn) return;
        btn.addEventListener('click', () => {
            // Close other open items for accordion behavior
            document.querySelectorAll('.faq__item.is-open').forEach(other => {
                if (other !== item) other.classList.remove('is-open');
            });
            item.classList.toggle('is-open');
            const icon = btn.querySelector('.icon');
            if (icon) icon.textContent = item.classList.contains('is-open') ? '+' : '+';
        });
    });


    /* -----------------------------------------------------
       10. Contact form
    ----------------------------------------------------- */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const name    = document.getElementById('cName')?.value.trim() || '';
            const email   = document.getElementById('cEmail')?.value.trim() || '';
            const message = document.getElementById('cMessage')?.value.trim() || '';
            if (!name || !email || !message) {
                showToast('Please fill in name, email, and message.');
                return;
            }
            if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
                showToast('That email looks off — double-check it.');
                return;
            }
            showToast(`Thanks ${name}! We'll be in touch within 24h.`);
            contactForm.reset();
        });
    }


    /* -----------------------------------------------------
       11. Newsletter form
    ----------------------------------------------------- */
    const newsForm = document.getElementById('newsletterForm');
    const newsEmail = document.getElementById('newsEmail');
    if (newsForm && newsEmail) {
        newsForm.addEventListener('submit', e => {
            e.preventDefault();
            const email = newsEmail.value.trim();
            if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
                showToast('That email looks off — double-check it.');
                return;
            }
            showToast('Thanks! Check your inbox for confirmation.');
            newsForm.reset();
        });
    }

});
