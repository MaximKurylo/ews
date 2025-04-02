document.addEventListener('DOMContentLoaded', () => {
    // Код для слайдера портфоліо
    const items = document.querySelectorAll('.portfolio-item');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
        showItem(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
        showItem(currentIndex);
    });

    showItem(currentIndex);

    // Код для меню-гамбургера
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        adjustHeroPadding(); // Оновлюємо відступ герой-секції при зміні стану меню
    });

    // Функція для динамічного підлаштування відступу герой-секції
    function adjustHeroPadding() {
        const header = document.querySelector('header');
        const hero = document.querySelector('.hero');
        const headerHeight = header.offsetHeight; // Отримуємо поточну висоту хедера
        hero.style.paddingTop = `${headerHeight + 20}px`; // Додаємо додатковий відступ 20px
    }

    // Викликаємо функцію при завантаженні сторінки
    adjustHeroPadding();

    // Оновлюємо відступ при зміні розміру вікна
    window.addEventListener('resize', adjustHeroPadding);
});