const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isOpen));
    navLinks.classList.toggle('is-open');
  });
}

const modalTriggers = document.querySelectorAll('[data-modal]');
modalTriggers.forEach((trigger) => {
  const modalId = trigger.getAttribute('data-modal');
  const modal = document.getElementById(modalId);
  const modalImage = modal ? modal.querySelector('.modal-image') : null;

  if (!modal || !modalImage) return;

  trigger.addEventListener('click', () => {
    const imageClass = trigger.getAttribute('data-image');
    modalImage.className = 'modal-image';
    if (imageClass) {
      modalImage.classList.add(imageClass);
    }
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

document.querySelectorAll('[data-close]').forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    const modal = closeButton.closest('.modal');
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  });
});
