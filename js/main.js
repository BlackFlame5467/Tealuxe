const burgerBtn = document.querySelector('.header__burger');
const burger = document.querySelector(".burger");
const burgerClose = document.querySelector(".burger__btn");
const shadow = document.querySelector("#shadow");
const basketBtn = document.querySelector(".basket__btn-actvie");
const basket = document.querySelector(".basket");
const basketClose = document.querySelector(".basket__btn");
const basketMinus = document.querySelectorAll(".basket__check-minus");
const basketPlus = document.querySelectorAll(".basket__check-plus");
const basketInput = document.querySelectorAll(".basket__input");
const basketForm = document.querySelectorAll(".basket__check");
const basketPrice = document.querySelectorAll(".basket__price-price");
const basketSumPrice = document.querySelector(".basket__price-sumprice");
const loginActive = document.querySelector(".login__btn-active");
const login = document.querySelector(".login");
const loginBtn = document.querySelectorAll('.login__btn');
const loginScreen = document.querySelectorAll('.login__screen');
const loginScreens = document.querySelector('.login__screens');
const loginClose = document.querySelector('.login__close');
const searchLine = document.querySelector('.header__search');
const searchBtn = document.querySelector('.search__btn');
const searchInput = document.querySelector('.search__input');
const searchClose = document.querySelector('.search__close');
const headerNav = document.querySelector('.header__nav');
const headerInner = document.querySelector('.header__inner');
const headerLogin = document.querySelector('.header__login');





let sum = Number(basketPrice[0].innerHTML) + Number(basketPrice[1].innerHTML) + Number(basketPrice[2].innerHTML) + Number(basketPrice[3].innerHTML) + Number(basketPrice[4].innerHTML);
basketSumPrice.innerHTML = `${sum}`;

basketMinus.forEach(function(element) {
    element.addEventListener('click', basketScoreMinus);
});
basketPlus.forEach(function(element) {
    element.addEventListener('click', basketScorePlus);
});
basketForm.forEach(function(element) {
    element.addEventListener('click', basketCheck);
});
basketInput.forEach(function(element) {
    element.addEventListener('keypress', basketInputValue);
});
loginBtn.forEach(function(element) {
    element.addEventListener('click', loginChangeScreen);
});

burgerBtn.addEventListener("click", burgerActive);
burgerClose.addEventListener("click", burgerNoActive);
basketBtn.addEventListener("click", basketActive);
basketClose.addEventListener("click", basketNoActive);
loginActive.addEventListener("click", loginActiveScreen);
loginClose.addEventListener("click", loginNoActive);
searchBtn.addEventListener("click", searchActive);
searchClose.addEventListener("click", searchNoActive);


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
function basketActive() {
    basket.classList.add('basket__active');
    basket.classList.remove('basket__close');
    document.body.classList.add('overflow');
    shadow.classList.add('shadow');
}
function basketNoActive() {
    basket.classList.remove('basket__active');
    basket.classList.add('basket__close');
    document.body.classList.remove('overflow');
    shadow.classList.remove('shadow');
}
function loginActiveScreen() {
    login.classList.add('login__active');
    login.classList.remove('login__close');
    document.body.classList.add('overflow');
    shadow.classList.add('shadow');
}
function loginNoActive() {
    login.classList.remove('login__active');
    login.classList.add('login__close');
    document.body.classList.remove('overflow');
    shadow.classList.remove('shadow');
}

function searchActive(event) {
    event.preventDefault();
    searchLine.classList.remove('search__no-active');
    searchLine.classList.add('search__active');
    headerNav.style.display = 'none';
    loginActive.style.display = "none";
    basketBtn.style.display = 'none';
    headerInner.style.justifyContent = "normal";
    headerInner.style.width = '100%';
    headerInner.style.width = '100%';
    searchLine.style.display = 'flex';
    searchLine.style.gap = '0 10px';
    searchLine.style.width = '100%';
    headerLogin.style.width = '80%';

}
 function searchNoActive(event) {
    event.preventDefault();
    searchLine.classList.add('search__no-active');
    searchLine.classList.remove('search__active');
    headerNav.removeAttribute('style');
    loginActive.removeAttribute('style');
    basketBtn.removeAttribute('style');
    headerInner.removeAttribute('style');
    searchLine.removeAttribute('style');
    headerLogin.removeAttribute('style');
    searchInput.value = "";
 }



function basketScoreMinus(event) {
    basketForm[event.target.parentNode.id][1].value--;
    basketPrice[event.target.parentNode.id].innerHTML = `${basketForm[event.target.parentNode.id][1].value}` * `400`;
}
function basketScorePlus(event) {
    basketForm[event.target.parentNode.id][1].value++;
    basketPrice[event.target.parentNode.id].innerHTML = `${basketForm[event.target.parentNode.id][1].value}` * `400`;
}
function basketInputValue(event) {
    if(event.key == 'Enter'){
        basketPrice[event.target.id].innerHTML = `${basketForm[event.target.id][1].value}` * `400`;
    }
    for(let i = 0; i < basketForm.length; i++) {
        if(basketForm[i][1].value > 1) {
            basketForm[i][0].disabled = false;
            basketForm[i][0].innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            
            <g id="SVGRepo_iconCarrier"> <path d="M6 12L18 12" stroke="#B8B58B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
            
            </svg>`;
        }
        if(basketForm[i][1].value == 1) {
            basketForm[i][0].disabled = true;
            basketForm[i][0].innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            
            <g id="SVGRepo_iconCarrier"> <path d="M6 12L18 12" stroke="#a7a6a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
            
            </svg>`;
        }
    }
}

function basketCheck(event) {
    for(let i = 0; i < basketForm.length; i++) {
        if(basketForm[i][1].value > 1) {
            basketForm[i][0].disabled = false;
            basketForm[i][0].innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            
            <g id="SVGRepo_iconCarrier"> <path d="M6 12L18 12" stroke="#B8B58B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
            
            </svg>`;
        }
        if(basketForm[i][1].value == 1) {
            basketForm[i][0].disabled = true;
            basketForm[i][0].innerHTML = `<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            
            <g id="SVGRepo_iconCarrier"> <path d="M6 12L18 12" stroke="#a7a6a6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>
            
            </svg>`;
        }
    }
    sum = Number(basketPrice[0].innerHTML) + Number(basketPrice[1].innerHTML) + Number(basketPrice[2].innerHTML) + Number(basketPrice[3].innerHTML) + Number(basketPrice[4].innerHTML);
    basketSumPrice.innerHTML = `${sum}`;
    
}

function loginChangeScreen(event) {
    console.log(event.target.id);

    loginBtn.forEach(function(element) {
        element.classList.remove('btn__active');
    });

    event.target.classList.add("btn__active");

    loginScreen.forEach(function(element) {
        element.classList.remove("login__screen-active");
    });

    loginScreens.children[event.target.id].classList.add("login__screen-active");
}
