// Получаем элементы
const scrollContent = document.querySelector('.scroll-content');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

// Функция для прокрутки влево
function scrollLeft() {
  const scrollAmount = scrollContent.offsetWidth * 0.2; // Прокручиваем на 20% ширины контейнера
  scrollContent.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

// Функция для прокрутки вправо
function scrollRight() {
  const scrollAmount = scrollContent.offsetWidth * 0.2; // Прокручиваем на 20% ширины контейнера
  scrollContent.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

// Обработчики событий для кнопок
scrollLeftButton.addEventListener('click', scrollLeft);
scrollRightButton.addEventListener('click', scrollRight);

// Добавляем автоматическое отключение кнопок, если прокрутка невозможна
scrollContent.addEventListener('scroll', () => {
  if (scrollContent.scrollLeft === 0) {
    scrollLeftButton.disabled = true;
  } else {
    scrollLeftButton.disabled = false;
  }

  if (scrollContent.scrollLeft >= scrollContent.scrollWidth - scrollContent.offsetWidth) {
    scrollRightButton.disabled = true;
  } else {
    scrollRightButton.disabled = false;
  }
});