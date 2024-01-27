const burgerBtn = document.querySelector('.header__burger');
const burger = document.querySelector(".burger");
const burgerClose = document.querySelector(".burger__btn");
const shadow = document.querySelector("#shadow");


burgerBtn.addEventListener("click", burgerActive);
burgerClose.addEventListener("click", burgerNoActive);

function burgerActive() {
    burger.classList.add('active');
    burger.classList.remove('close');
    document.body.classList.add('overflow');
    shadow.classList.add('shadow');
}
function burgerNoActive() {
    burger.classList.remove('active');
    burger.classList.add('close');
    document.body.classList.remove('overflow');
    shadow.classList.remove('shadow');
}