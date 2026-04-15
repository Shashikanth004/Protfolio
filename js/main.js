/* ==========================================
   SHASHIKANTH B. — Portfolio JS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ========================
  // STICKY NAVBAR
  // ========================
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ========================
  // HAMBURGER MENU
  // ========================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
  // Close nav on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // ========================
  // TYPED TEXT EFFECT
  // ========================
  const phrases = [
    'Full-Stack Developer',
    'Data Science Enthusiast',
    'Problem Solver',
    'Open Source Contributor',
    'Competitive Coder'
  ];
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typedEl = document.getElementById('typed-text');

  function type() {
    const currentPhrase = phrases[phraseIdx];
    if (isDeleting) {
      typedEl.textContent = currentPhrase.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(type, 500);
        return;
      }
      setTimeout(type, 40);
    } else {
      typedEl.textContent = currentPhrase.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 2000);
        return;
      }
      setTimeout(type, 80);
    }
  }
  setTimeout(type, 800);

  // ========================
  // SMOOTH ACTIVE NAV LINKS
  // ========================
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  const observerOpts = { threshold: 0.3 };
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(item => {
          item.classList.remove('active-nav');
          if (item.getAttribute('href') === '#' + entry.target.id) {
            item.classList.add('active-nav');
          }
        });
      }
    });
  }, observerOpts);

  sections.forEach(s => sectionObserver.observe(s));

  // ========================
  // SCROLL REVEAL
  // ========================
  const revealEls = document.querySelectorAll(
    '.skill-card, .project-card, .edu-card, .testimonial-card, .about-stats, .about-text h2, .about-text p'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80 * (entry.target.dataset.delay || 0));
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // Stagger siblings
  document.querySelectorAll('.skills-grid, .projects-grid, .edu-grid').forEach(grid => {
    [...grid.children].forEach((child, i) => {
      child.dataset.delay = i;
    });
  });

  revealEls.forEach(el => revealObserver.observe(el));

  // ========================
  // TIMELINE REVEAL
  // ========================
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 150 * i);
      }
    });
  }, { threshold: 0.15 });

  timelineItems.forEach(item => timelineObserver.observe(item));

  // ========================
  // TESTIMONIAL CAROUSEL
  // ========================
  const track = document.getElementById('testimonialsTrack');
  const dots = document.querySelectorAll('.dot-btn');
  let currentSlide = 0;
  const totalSlides = 3;

  function goToSlide(idx) {
    currentSlide = idx;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    goToSlide((currentSlide + 1) % totalSlides);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => goToSlide(+dot.dataset.idx));
  });

  // Auto-advance carousel
  let autoplay = setInterval(() => {
    goToSlide((currentSlide + 1) % totalSlides);
  }, 5000);

  track.closest('.testimonials-carousel').addEventListener('mouseenter', () => clearInterval(autoplay));
  track.closest('.testimonials-carousel').addEventListener('mouseleave', () => {
    autoplay = setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 5000);
  });

  // ========================
  // CODE CARD HOVER EFFECT
  // ========================
  const codeCard = document.querySelector('.code-card');
  if (codeCard) {
    document.addEventListener('mousemove', (e) => {
      const rect = codeCard.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) - 0.5;
      const y = ((e.clientY - rect.top) / rect.height) - 0.5;
      const dist = Math.sqrt(x * x + y * y);
      if (dist < 1.5) {
        codeCard.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
      }
    });

    document.addEventListener('mouseleave', () => {
      codeCard.style.transform = '';
    });
  }

  // ========================
  // ACTIVE NAV STYLE (CSS)
  // ========================
  const style = document.createElement('style');
  style.textContent = `.nav-links a.active-nav { color: var(--accent); }`;
  document.head.appendChild(style);

});
