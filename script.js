/* ===================================================================
   AUREA DENTAL — SCRIPT
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
    { icon:'fa-screwdriver-wrench', title:'Dental Implants', desc:'Permanent, natural-looking replacements for missing teeth.' },
    { icon:'fa-sun', title:'Teeth Whitening', desc:'Professional-grade whitening for a brighter smile in one visit.' },
    { icon:'fa-teeth', title:'Orthodontics', desc:'Braces and aligners to straighten teeth at any age.' },
    { icon:'fa-tooth', title:'Root Canal Treatment', desc:'Pain-free treatment to save infected or damaged teeth.' },
    { icon:'fa-gem', title:'Dental Veneers', desc:'Thin, custom shells that transform the shape and shade of your smile.' },
    { icon:'fa-star', title:'Smile Makeover', desc:'A fully personalized plan combining multiple treatments for your ideal smile.' },
    { icon:'fa-child', title:'Pediatric Dentistry', desc:'Gentle, friendly dental care designed especially for children.' },
    { icon:'fa-truck-medical', title:'Emergency Dental Care', desc:'Rapid relief and treatment when you need it most, day or night.' },
    { icon:'fa-align-center', title:'Invisible Aligners', desc:'Discreet, removable aligners for a straighter smile without metal braces.' },
    { icon:'fa-shield-heart', title:'Preventive Care', desc:'Regular screening and hygiene plans to catch issues early.' },
    { icon:'fa-wand-magic-sparkles', title:'Cosmetic Dentistry', desc:'Aesthetic treatments to enhance the beauty of your natural smile.' },
  ];

  const dentists = [
    { name:'Dr. Layla Haddad', role:'Cosmetic Dentistry', exp:'15 years experience', img:'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=500&auto=format&fit=crop' },
    { name:'Dr. Omar Al Fassi', role:'Dental Implants', exp:'18 years experience', img:'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=500&auto=format&fit=crop' },
    { name:'Dr. Sarah Nakamura', role:'Orthodontics', exp:'12 years experience', img:'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=500&auto=format&fit=crop' },
    { name:'Dr. Karim Idris', role:'Pediatric Dentistry', exp:'10 years experience', img:'https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=500&auto=format&fit=crop' },
  ];

  const galleryItems = [
    { img:'https://images.unsplash.com/photo-1581585095852-a4c9a5c5b8b8?q=80&w=700&auto=format&fit=crop', label:'Smile Makeover' },
    { img:'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=700&auto=format&fit=crop', label:'Teeth Whitening' },
    { img:'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=700&auto=format&fit=crop', label:'Veneers' },
    { img:'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=700&auto=format&fit=crop', label:'Implants' },
    { img:'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=700&auto=format&fit=crop', label:'Orthodontics' },
    { img:'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=700&auto=format&fit=crop', label:'Full Transformation' },
  ];

  const testimonials = [
    { name:'Amina R.', treatment:'Smile Makeover', img:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop', quote:'Aurea Dental gave me the confidence to smile freely again. The whole team made me feel completely at ease.' },
    { name:'James T.', treatment:'Dental Implants', img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop', quote:'My implant procedure was seamless — practically painless, and the results look completely natural.' },
    { name:'Fatima S.', treatment:'Invisible Aligners', img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop', quote:'Straightened my teeth without anyone even noticing I was wearing aligners. Highly recommend this clinic.' },
    { name:'Michael B.', treatment:'Emergency Care', img:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop', quote:'Had a dental emergency on a weekend and they saw me within the hour. Truly grateful for their care.' },
  ];

  const faqs = [
    { q:'How often should I visit a dentist?', a:'We recommend a checkup and cleaning every six months to catch potential issues early and maintain optimal oral health.' },
    { q:'Is teeth whitening safe?', a:'Yes — when performed by a licensed professional using approved products, whitening is safe and does not damage enamel.' },
    { q:'Do implants last forever?', a:'With proper care and regular checkups, dental implants can last 20+ years or even a lifetime for most patients.' },
    { q:'What should I do during a dental emergency?', a:'Call our 24/7 emergency line immediately. For a knocked-out tooth, keep it moist and see us within 30 minutes if possible.' },
    { q:'Do you accept insurance?', a:'We work with most major insurance providers and offer flexible payment plans for treatments not fully covered.' },
    { q:'Do you offer children\u2019s dental care?', a:'Yes, our pediatric specialists create a friendly, low-stress environment designed specifically for young patients.' },
    { q:'Is a root canal painful?', a:'Modern root canal treatment is performed under local anesthesia and is generally no more uncomfortable than a filling.' },
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
        <img src="${d.img}" alt="${d.name}, ${d.role}" loading="lazy">
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
      <img src="${g.img}" alt="${g.label} result" loading="lazy">
      <div class="gallery-overlay"><span>${g.label}</span></div>
    `;
    el.addEventListener('click', () => openLightbox(g.img, g.label));
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
          <img src="${t.img}" alt="${t.name}" loading="lazy">
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
