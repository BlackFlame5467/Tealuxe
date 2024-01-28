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


let sum = Number(basketPrice[0].innerHTML) + Number(basketPrice[1].innerHTML) + Number(basketPrice[2].innerHTML) + Number(basketPrice[3].innerHTML) + Number(basketPrice[4].innerHTML);
console.log(sum);
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


burgerBtn.addEventListener("click", burgerActive);
burgerClose.addEventListener("click", burgerNoActive);
basketBtn.addEventListener("click", basketActive);
basketClose.addEventListener("click", basketNoActive);

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
    console.log(sum);
    basketSumPrice.innerHTML = `${sum}`;
    
}