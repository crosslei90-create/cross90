const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.site-nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const titleEl = document.querySelector('.modal-copy h4');
const typeEl = document.querySelector('.modal-copy .type');
const descEl = document.querySelector('.modal-copy .desc');

document.querySelectorAll('.work-item').forEach((item) => {
  item.addEventListener('click', () => {
    modalImg.src = item.dataset.img;
    titleEl.textContent = item.dataset.title;
    typeEl.textContent = item.dataset.type;
    descEl.textContent = item.dataset.desc;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

document.querySelector('.close').addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
});
