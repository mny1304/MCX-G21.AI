document.addEventListener('DOMContentLoaded', () => {
  const neonTitles = document.querySelectorAll('.neon-title');
  setInterval(() => {
    if (Math.random() > 0.92) {
      neonTitles.forEach(title => {
        title.style.opacity = Math.random() > 0.5 ? '0.6' : '1';
        setTimeout(() => title.style.opacity = '1', 50);
      });
    }
  }, 150);

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('.btn-neon');
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'در حال ارتباط...';
      
      setTimeout(() => {
        submitBtn.innerText = 'داده‌ها مخابره شد';
        submitBtn.style.background = 'transparent';
        submitBtn.style.borderColor = '#0f0';
        submitBtn.style.color = '#0f0';
        submitBtn.style.boxShadow = '0 0 15px #0f0, inset 0 0 10px #0f0';
        contactForm.reset();
        
        setTimeout(() => {
          submitBtn.innerText = originalText;
          submitBtn.style = '';
        }, 3000);
      }, 1500);
    });
  }
});
