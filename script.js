// ==========================================================
// Mobile nav toggle
// ==========================================================
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('menu-open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('menu-open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// ==========================================================
// Scroll reveal
// ==========================================================
const revealEls = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function showAllReveals() {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  showAllReveals();
} else {
  try {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => io.observe(el));
  } catch (err) {
    showAllReveals();
  }
}

// Draw the "Driven by Movement" line once it scrolls into view
const focusPath = document.getElementById('focusPath');
if (focusPath) {
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    focusPath.classList.add('animate');
  } else {
    try {
      const lineIO = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            focusPath.classList.add('animate');
            lineIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });
      lineIO.observe(focusPath);
    } catch (err) {
      focusPath.classList.add('animate');
    }
  }
}

// ==========================================================
// Gallery lightbox
// ==========================================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
let lastFocused = null;

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const full = item.getAttribute('data-full');
    const label = item.getAttribute('data-label') || '';
    lightboxImg.src = full;
    lightboxImg.alt = label;
    lightboxCaption.textContent = label;
    lastFocused = document.activeElement;
    lightbox.hidden = false;
    lightboxClose.focus();
    document.body.style.overflow = 'hidden';
  });
});

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
});

// ==========================================================
// Nav background on scroll (subtle depth once scrolled)
// ==========================================================
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 8 ? '0 8px 24px -12px rgba(0,0,0,0.4)' : 'none';
}, { passive: true });
