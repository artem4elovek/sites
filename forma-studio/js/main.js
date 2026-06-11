// Получаем элементы
const carouselList = document.querySelector('.project__list');
const prevBtn = document.querySelector('.project__list-prev');
const nextBtn = document.querySelector('.project__list-next');

// Функция для прокрутки влево
function scrollLeft() {
    const cardWidth = document.querySelector('.project__item').offsetWidth;
    const scrollAmount = cardWidth + 20; // 20px - это gap между карточками
    carouselList.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
}

// Функция для прокрутки вправо
function scrollRight() {
    const cardWidth = document.querySelector('.project__item').offsetWidth;
    const scrollAmount = cardWidth + 20; // 20px - это gap между карточками
    carouselList.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Добавляем обработчики событий
if (prevBtn && carouselList) {
    prevBtn.addEventListener('click', scrollLeft);
}

if (nextBtn && carouselList) {
    nextBtn.addEventListener('click', scrollRight);
}