/* ========================================
   HESUN PRIVATE TOUR - MAIN SCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
  initMenuToggle();
  initSmoothScroll();
  initFormSubmit();
  updateYear();
});

/* ==================== MENU TOGGLE ==================== */
function initMenuToggle() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when link is clicked
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.nav-container')) {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });
}

/* ==================== SMOOTH SCROLL ==================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ==================== FORM SUBMIT ==================== */
function initFormSubmit() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = {
    name: form.querySelector('[name="name"]').value,
    phone: form.querySelector('[name="phone"]').value,
    date: form.querySelector('[name="date"]').value,
    service: form.querySelector('[name="service"]').value,
    message: form.querySelector('[name="message"]').value
  };

  // Validate required fields
  if (!formData.name || !formData.phone) {
    alert('請填寫姓名和聯絡電話');
    return false;
  }

  // Format message for LINE
  const lineMessage = `
📅 新預約詢問
---
👤 姓名：${formData.name}
📱 聯絡電話/LINE：${formData.phone}
${formData.date ? `📆 用車日期：${formData.date}` : ''}
🚗 服務類型：${formData.service}
${formData.message ? `💬 需求說明：${formData.message}` : ''}
---
感謝您的預約，我們將盡快為您服務！
`;

  // Copy to clipboard and show success message
  navigator.clipboard.writeText(lineMessage).then(() => {
    alert('預約資訊已複製，請貼到 LINE 傳送給我們！\n\nWe will respond within 1 hour.');
    form.reset();
  }).catch(() => {
    // Fallback if clipboard API fails
    alert('預約已提交，我們將盡快聯絡您！');
    form.reset();
  });

  return false;
}

/* ==================== UPDATE YEAR ==================== */
function updateYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* ==================== SCROLL ANIMATION ==================== */
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .fleet-card, .route-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

/* ==================== HEADER SCROLL EFFECT ==================== */
let lastScrollTop = 0;
const header = document.getElementById('siteHeader');

window.addEventListener('scroll', function() {
  if (!header) return;

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    header.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.1)';
  } else {
    header.style.boxShadow = 'none';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
