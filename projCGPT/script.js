// Переключение авторов
const authors = document.querySelectorAll('.author');
const galleries = document.querySelectorAll('.gallery');
const authorsList = document.getElementById('authorsList');

let currentAuthorIndex = 0;

function activateAuthor(index) {
  authors.forEach(a => a.classList.remove('active'));
  galleries.forEach(g => g.classList.remove('active'));

  authors[index].classList.add('active');
  galleries[index].classList.add('active');
}

authors.forEach((author, index) => {
  author.addEventListener('click', () => {
    currentAuthorIndex = index;
    activateAuthor(index);
  });
});

document.getElementById('prevAuthor').addEventListener('click', () => {
  if (currentAuthorIndex > 0) {
    currentAuthorIndex--;
    authorsList.scrollBy({ left: -authors[0].offsetWidth, behavior: 'smooth' });
    activateAuthor(currentAuthorIndex);
  }
});

document.getElementById('nextAuthor').addEventListener('click', () => {
  if (currentAuthorIndex < authors.length - 1) {
    currentAuthorIndex++;
    authorsList.scrollBy({ left: authors[0].offsetWidth, behavior: 'smooth' });
    activateAuthor(currentAuthorIndex);
  }
});

// Переключение слайдов внутри галереи
const prevSlideBtn = document.getElementById('prevSlide');
const nextSlideBtn = document.getElementById('nextSlide');

prevSlideBtn.addEventListener('click', () => changeSlide(-1));
nextSlideBtn.addEventListener('click', () => changeSlide(1));

function changeSlide(direction) {
  const activeGallery = document.querySelector('.gallery.active');
  const slides = activeGallery.querySelectorAll('.slide');
  let currentIndex = [...slides].findIndex(s => s.classList.contains('active'));
  slides[currentIndex].classList.remove('active');

  currentIndex = (currentIndex + direction + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');
}