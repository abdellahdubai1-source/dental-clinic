/* ===================================================================
   BRIGHT SMILE DENTAL CLINIC — SCRIPT
=================================================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- LOADER ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 400);
  });
  // fallback in case load event already fired
  setTimeout(() => loader.classList.add('hidden'), 2500);

  /* ---------- SCROLL PROGRESS BAR ---------- */
  const scrollProgress = document.getElementById('scrollProgress');
  function updateScrollProgress(){
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = pct + '%';
  }

  /* ---------- NAVBAR ---------- */
  const navbar = document.getElementById('navbar');
  function updateNavbar(){
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }

  /* ---------- BACK TO TOP ---------- */
  const backToTop = document.getElementById('backToTop');
  function updateBackToTop(){
    if (window.scrollY > 600) backToTop.classList.add('show');
    else backToTop.classList.remove('show');
  }
  backToTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

  /* Combined scroll listener for performance */
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    updateNavbar();
    updateBackToTop();
  });
  updateScrollProgress(); updateNavbar(); updateBackToTop();

  /* ---------- MOBILE MENU ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
  document.querySelectorAll('.mobile-link, .mobile-menu .btn').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });

  /* ---------- CURSOR GLOW ---------- */
  const cursorGlow = document.getElementById('cursorGlow');
  if (window.matchMedia('(min-width: 1024px)').matches) {
    window.addEventListener('mousemove', e => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });
  }

  /* ---------- RIPPLE BUTTON EFFECT ---------- */
  document.querySelectorAll('.ripple').forEach(btn => {
    btn.addEventListener('click', e => {
      const rect = btn.getBoundingClientRect();
      btn.style.setProperty('--rx', (e.clientX - rect.left) + 'px');
      btn.style.setProperty('--ry', (e.clientY - rect.top) + 'px');
    });
  });

  /* ---------- SCROLL REVEAL (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.fade-up, .reveal-left, .reveal-right, .reveal-up');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ===================================================================
     DATA
  =================================================================== */
  const services = [
    { icon:'fa-tooth', title:'General Dentistry', desc:'Routine checkups, cleanings, and preventive care for lifelong oral health.' },
    { icon:'fa-wand-magic-sparkles', title:'Cosmetic Dentistry', desc:'Aesthetic treatments to enhance the beauty of your natural smile.' },
    { icon:'fa-sun', title:'Teeth Whitening', desc:'Clinically approved whitening systems for a brighter smile in one visit.' },
    { icon:'fa-screwdriver-wrench', title:'Dental Implants', desc:'Permanent, natural-looking replacements for missing teeth.' },
    { icon:'fa-gem', title:'Dental Veneers', desc:'Thin, custom shells that transform the shape and shade of your smile.' },
    { icon:'fa-teeth', title:'Orthodontics', desc:'Braces and aligners to straighten teeth at any age.' },
    { icon:'fa-align-center', title:'Invisalign', desc:'Discreet, removable aligners for adults and teenagers.' },
    { icon:'fa-tooth', title:'Root Canal Treatment', desc:'Pain-free treatment to save infected or damaged teeth.' },
    { icon:'fa-shapes', title:'Crowns & Bridges', desc:'Durable restorations that repair or replace damaged and missing teeth.' },
    { icon:'fa-child', title:'Pediatric Dentistry', desc:'Gentle dental care designed especially for children.' },
    { icon:'fa-shield-heart', title:'Gum Treatment', desc:'Diagnosis and treatment of gum disease to protect your oral health.' },
    { icon:'fa-hand-holding-medical', title:'Tooth Extraction', desc:'Safe, comfortable removal of damaged or problematic teeth.' },
    { icon:'fa-star', title:'Smile Makeover', desc:'A fully personalized plan combining multiple treatments for your ideal smile.' },
    { icon:'fa-broom', title:'Dental Cleaning', desc:'Professional cleaning to remove plaque and keep your smile fresh.' },
    { icon:'fa-truck-medical', title:'Emergency Dental Care', desc:'Rapid relief and treatment when you need it most, available 24 hours.' },
  ];

  const dentists = [
    { name:'Dr. Layla Haddad', role:'Cosmetic Dentistry', exp:'15 years experience', img:'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80' },
    { name:'Dr. Omar Al Fassi', role:'Dental Implants', exp:'18 years experience', img:'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80' },
    { name:'Dr. Sarah Nakamura', role:'Orthodontics', exp:'12 years experience', img:'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80' },
    { name:'Dr. Karim Idris', role:'Pediatric Dentistry', exp:'10 years experience', img:'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80' },
  ];

  const galleryItems = [
    { img:'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80', label:'Smile Makeover' },
    { img:'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80', label:'Teeth Whitening' },
    { img:'https://images.unsplash.com/photo-1588776813677-77aaf5595b83?auto=format&fit=crop&w=1200&q=80', label:'Veneers' },
    { img:'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80', label:'Implants' },
    { img:'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80', label:'Orthodontics' },
    { img:'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80', label:'Full Transformation' },
  ];

  const testimonials = [
    { name:'Sarah Williams', treatment:'Verified Patient', img:'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80', quote:'I had an amazing experience. The doctors were professional, caring, and made me feel completely comfortable throughout my treatment.' },
    { name:'Ahmed Hassan', treatment:'Verified Patient', img:'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80', quote:'Excellent service with modern equipment. The clinic is spotless and the staff are incredibly friendly.' },
    { name:'Emily Johnson', treatment:'Verified Patient', img:'https://images.unsplash.com/photo-1588776813677-77aaf5595b83?auto=format&fit=crop&w=1200&q=80', quote:'The best dental clinic I\u2019ve visited in Dubai. Highly recommended for anyone looking for quality dental care.' },
  ];

  const faqs = [
    { q:'Do you accept walk-in patients?', a:'Yes, walk-in patients are welcome depending on availability.' },
    { q:'Do you provide emergency dental care?', a:'Yes, emergency dental services are available 24/7.' },
    { q:'Is teeth whitening safe?', a:'Yes. We use clinically approved whitening systems that are safe and effective.' },
    { q:'Do you offer Invisalign treatment?', a:'Yes, we provide Invisalign treatment for adults and teenagers.' },
    { q:'Do you treat children?', a:'Yes, our pediatric dentists provide gentle dental care for children.' },
  ];

  const facilities = [
    { icon:'fa-x-ray', title:'Digital X-Ray' },
    { icon:'fa-door-closed', title:'Private Rooms' },
    { icon:'fa-couch', title:'Comfort Lounge' },
    { icon:'fa-child-reaching', title:'Kids Area' },
    { icon:'fa-wifi', title:'Free WiFi' },
    { icon:'fa-square-parking', title:'Parking' },
    { icon:'fa-truck-medical', title:'Emergency Care' },
    { icon:'fa-flask-vial', title:'Sterilization Room' },
    { icon:'fa-microscope', title:'Advanced Equipment' },
  ];

  /* ===================================================================
     RENDER SECTIONS
  =================================================================== */
  const servicesGrid = document.getElementById('servicesGrid');
  services.forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'service-card reveal-up';
    el.innerHTML = `
      <div class="service-icon"><i class="fa-solid ${s.icon}"></i></div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <a href="#appointment" class="service-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
    `;
    servicesGrid.appendChild(el);
    revealObserver.observe(el);
  });

  const dentistsGrid = document.getElementById('dentistsGrid');
  dentists.forEach(d => {
    const el = document.createElement('div');
    el.className = 'dentist-card reveal-up';
    el.innerHTML = `
      <div class="dentist-photo">
        <img src="${d.img}" alt="${d.name}, ${d.role}" width="500" height="600" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80';">
        <div class="dentist-social">
          <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
      <div class="dentist-info">
        <h3>${d.name}</h3>
        <span class="role">${d.role}</span>
        <p>${d.exp}</p>
        <a href="#appointment" class="btn btn-primary">Book Consultation</a>
      </div>
    `;
    dentistsGrid.appendChild(el);
    revealObserver.observe(el);
  });

  const galleryGrid = document.getElementById('galleryGrid');
  galleryItems.forEach(g => {
    const el = document.createElement('div');
    el.className = 'gallery-item reveal-up';
    el.innerHTML = `
      <img src="${g.img}" alt="${g.label} result" width="700" height="525" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80';">
      <div class="gallery-overlay"><span>${g.label}</span></div>
    `;
    const imgEl = el.querySelector('img');
    el.addEventListener('click', () => openLightbox(imgEl.currentSrc || imgEl.src, g.label));
    galleryGrid.appendChild(el);
    revealObserver.observe(el);
  });

  const facilitiesGrid = document.getElementById('facilitiesGrid');
  facilities.forEach(f => {
    const el = document.createElement('div');
    el.className = 'facility-card reveal-up';
    el.innerHTML = `<i class="fa-solid ${f.icon}"></i><h4>${f.title}</h4>`;
    facilitiesGrid.appendChild(el);
    revealObserver.observe(el);
  });

  /* ---------- TESTIMONIAL SLIDER ---------- */
  const track = document.getElementById('testimonialTrack');
  const dotsWrap = document.getElementById('testimonialDots');
  testimonials.forEach((t, i) => {
    const slide = document.createElement('div');
    slide.className = 'testimonial-card';
    slide.innerHTML = `
      <div class="testimonial-inner">
        <span class="stars">★★★★★</span>
        <p class="quote">"${t.quote}"</p>
        <div class="testimonial-person">
          <img src="${t.img}" alt="${t.name}" width="200" height="200" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80';">
          <div>
            <strong>${t.name}</strong>
            <span>${t.treatment}</span>
          </div>
        </div>
      </div>
    `;
    track.appendChild(slide);
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });
  let currentSlide = 0;
  function goToSlide(i){
    currentSlide = i;
    track.style.transform = `translateX(-${i * 100}%)`;
    [...dotsWrap.children].forEach((d, idx) => d.classList.toggle('active', idx === i));
  }
  setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonials.length;
    goToSlide(currentSlide);
  }, 6000);

  /* ---------- ACCORDION ---------- */
  const accordion = document.getElementById('accordion');
  faqs.forEach(f => {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.innerHTML = `
      <div class="accordion-head">
        <span>${f.q}</span>
        <i class="fa-solid fa-plus"></i>
      </div>
      <div class="accordion-body"><p>${f.a}</p></div>
    `;
    const head = item.querySelector('.accordion-head');
    const body = item.querySelector('.accordion-body');
    head.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      accordion.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.accordion-body').style.maxHeight = null;
      });
      if (!isActive) {
        item.classList.add('active');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
    accordion.appendChild(item);
  });

  /* ---------- LIGHTBOX ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  function openLightbox(src, alt){
    lightboxImg.onerror = function(){
      lightboxImg.onerror = null;
      lightboxImg.src = 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80';
    };
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.classList.add('active');
  }
  lightboxClose.addEventListener('click', () => lightbox.classList.remove('active'));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('active'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('active'); });

  /* ---------- COUNTER ANIMATION ---------- */
  const statNums = document.querySelectorAll('.stat-num');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => counterObserver.observe(el));

  function animateCounter(el){
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();
    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(tick);
  }

  /* ---------- APPOINTMENT FORM VALIDATION ---------- */
  const form = document.getElementById('appointmentForm');
  const formSuccess = document.getElementById('formSuccess');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    const fields = [
      { id:'fullName', test: v => v.trim().length >= 2, msg:'Please enter your full name.' },
      { id:'phone', test: v => /^[0-9+\s()-]{7,}$/.test(v), msg:'Please enter a valid phone number.' },
      { id:'email', test: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg:'Please enter a valid email address.' },
      { id:'treatment', test: v => v !== '', msg:'Please select a treatment.' },
      { id:'date', test: v => v !== '', msg:'Please select a preferred date.' },
      { id:'time', test: v => v !== '', msg:'Please select a preferred time.' },
    ];
    fields.forEach(f => {
      const input = document.getElementById(f.id);
      const group = input.closest('.form-group');
      const errorEl = group.querySelector('.error-msg');
      if (!f.test(input.value)) {
        group.classList.add('error');
        errorEl.textContent = f.msg;
        valid = false;
      } else {
        group.classList.remove('error');
        errorEl.textContent = '';
      }
    });
    if (valid) {
      formSuccess.classList.add('show');
      form.reset();
      setTimeout(() => formSuccess.classList.remove('show'), 6000);
    }
  });

  /* ---------- NEWSLETTER FORM ---------- */
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = newsletterForm.querySelector('input');
    input.value = '';
    input.placeholder = 'Subscribed! Thank you.';
  });

  /* ---------- SMOOTH SCROLL FOR ANCHOR LINKS ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const offset = 90;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior:'smooth' });
        }
      }
    });
  });

  /* ---------- SET MIN DATE FOR APPOINTMENT ---------- */
  const dateInput = document.getElementById('date');
  if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

});
