window.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.header__list'),
         listItem = document.querySelectorAll('.header__list-item'),
         burger = document.querySelector('.burger');
         
         burger.addEventListener('click', () => {
            burger.classList.toggle('burger--active');
            list.classList.toggle('header__list--active');
         });

         listItem.forEach(item => {
            item.addEventListener('click', () => {
                burger.classList.toggle('burger--active');
                list.classList.toggle('header__list--active');
            })
         });
})