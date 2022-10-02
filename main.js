/*
// Decleration
let form = document.querySelector('.form');

let addInput = document.querySelector('.classes-to-add');

let removeInput = document.querySelector('.classes-to-remove');

let elmentClass = document.querySelector('.element');

let innerDiv = document.querySelector('.classes-list div');

let para = document.createElement('p');

let innerDivText = document.createTextNode('There Is No Elements To Show');

para.append(innerDivText)

innerDiv.append(para)

let span = document.createElement('span');

let spanTwo = document.createElement('span');

let spanThree = document.createElement('span');

// first function
addInput.onblur = function () {

    let value = `${addInput.value}`;

    let firstText;
    let secondText;

    if (addInput.value === '' || addInput.value === ' ') {

        return;

    } else if (addInput.value === span.innerHTML) {

        return;

    } else if (value.includes(' ') === true) {

        firstText = `${value.slice(0, value.indexOf(' '))}`

        secondText = `${value.slice(value.indexOf(' '), value.length).trim()}`
        
        span.append(firstText.toLocaleLowerCase());
        
        spanTwo.append(secondText.toLocaleLowerCase());
        
        innerDiv.append(span);
        
        innerDiv.append(spanTwo);
        
        para.style.display = 'none';

        elmentClass.classList.add(`${firstText.toLowerCase()}`);
        elmentClass.classList.add(`${secondText.toLowerCase()}`);

    } else {
        
        spanText = document.createTextNode(`${addInput.value.toLowerCase()}`);

        span.append(spanText);

        innerDiv.append(span);
    
        para.style.display = 'none';
        
        elmentClass.classList.add(`${addInput.value.toLowerCase()}`)
    }
    console.log(secondText);

    addInput.value = '';
    
}

// second function
removeInput.onblur = function () {

    let value = `${removeInput.value}`;

    let firstText = `${(value.slice(0, value.indexOf(' '))).toLocaleLowerCase()}`;

    let secondText = `${(value.slice(value.indexOf(' '), value.length)).toLocaleLowerCase()}`;

    if (removeInput.value.toLowerCase() === span.innerHTML) {

        elmentClass.classList.remove(`${removeInput.value.toLowerCase()}`)
        span.remove();
        
    }   else if (value.includes(' ') === true) {

        if (firstText === span.innerHTML && secondText === span.innerHTML) {
            elmentClass.classList.remove(`${firstText.toLowerCase()}`)
            elmentClass.classList.remove(`${secondText.toLowerCase()}`)
            span.remove();
        }
    } 

    
    removeInput.value = '';
    if(typeof(span) === 'undefined' && span != null){
        para.style.display = 'none';
    } else{
        para.style.display = 'block';
    }

    console.log(span.value)
}

*/

// let div = document.querySelector("div");
// let divTwo = document.querySelector(".element");
// let divThree = document.querySelector('[name = "js"]');
// let divFour = document.querySelector('[id = "elzero"]');

// let divFive = document.querySelectorAll("div");
// let divSix = document.querySelectorAll(".element");
// let divSeven = document.querySelectorAll('[name = "js"]');
// let divEight = document.querySelectorAll('[id = "elzero"]');

// let divNine = document.getElementById("elzero");
// let divTen = document.getElementsByClassName("element");
// let divEleven = document.getElementsByTagName("div");
// let divThirteen = document.body.children[0];

// let divFourteen = document.body.firstElementChild;
// let divFifteen = document.body.childNodes[0];

// console.log(div);
// console.log(divTwo);
// console.log(divThree);
// console.log(divFour);
// console.log(divFive);
// console.log(divSix);
// console.log(divSeven);
// console.log(divEight);
// console.log(divNine);
// console.log(divTen);
// console.log(divEleven);
// console.log(divThirteen);
// console.log(divFourteen);
// console.log(divFifteen);


// let myLogo = document.images;

// let myLogo = document.querySelectorAll('img')

// for (let i = 0; i < myLogo.length; i++) {
//     myLogo[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     myLogo[i].alt = "Elzero Logo";
//     myLogo[i].style.cssText = "background-color: #000; margin-bottom: 20px; padding: 30px; "
// }

// let form = document.querySelector('form');
// let input = document.querySelector('input');
// let div = document.querySelector('div');

// input.oninput = function(){
//     div.innerHTML = `${input.value || 0} USD Dollar = ${(input.value * 15.6 || 0).toFixed(2)} Egyptian Pound`
// }


// let myAlt = document.images;

// for (let i = 0; i < myAlt.length; i++) {
//     if (myAlt[i].alt === '') {
//         myAlt[i].alt = 'Elzero NeW'
//     } else {
//         myAlt[i].alt = 'Old'
//     }
// }

// // console.log(myAlt.src)

// let div = document.querySelectorAll('div');

// if (div[0].className === 'one') {
//     div[0].innerHTML = 'One';
//     div[0].title = 'one';
// }

// if (div[1].className === 'two') {
//     div[1].innerHTML = `Two ${div.length}`;
//     div[1].title = 'two';
// }

let form = document.forms[0];
let inputNumber = document.querySelector('[type="number"]');
let inputText = document.querySelector('[type="text"]');
let submit = document.querySelector('[type="submit"]');
let select = document.querySelector('select');
let removeButton = document.querySelector('.remove');
let option = document.querySelector('option');
let result = document.querySelector('.results');

form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.justifyContent = 'center';
form.style.alignItems = 'center';
form.style.width = '900px';
form.style.flexWrap = 'wrap';
form.style.padding = '100px';

inputNumber.style.cssText = 'width: 50%';
inputText.style.cssText = 'width: 50%; display: block; margin-bottom: 20px; padding: 20px 40px; font-size: 20px; border-radius: 10px;; border: 1px solid #ddd; caret-color: #f00; outline: none;';
select.style.cssText = 'display: flex; justify-content: space-between; color: #666; margin-bottom: 20px; padding: 20px 40px; font-size: 20px; border-radius: 10px;; border: 1px solid #ddd; width: 59%; outline: none;';
submit.style.cssText = 'cursor: pointer; width: 59%; padding: 20px 40px; font-size: 25px; border-radius: 10px;; border: 1px solid #ddd; outline: none; color: #fff; background-color: #009c7f;';
result.style.marginTop = '50px'

form.onsubmit = function (el) {
    el.preventDefault();
    document.querySelectorAll('.box').forEach((el) => el.remove());


    for (let i = 1; i <= inputNumber.value; i++) {
        let divCreate = document.createElement(select.value);
        let text = document.createTextNode(inputText.value);
        
        if (inputText.value === '') {
            inputText.placeholder = 'You Must Enter Text';
            break;
        } else {
            divCreate.className = 'box';
            divCreate.title = 'Element';
            divCreate.id = `id-${i}`;
            
            divCreate.style.display = 'inline-block'
            divCreate.style.backgroundColor = '#fc4f01';
            divCreate.style.padding = '20px 50px';
            divCreate.style.color = '#fff';
            divCreate.style.textAlign = 'center';
            divCreate.style.margin = '20px';
            divCreate.style.fontSize = '20px';
            divCreate.style.borderRadius = '5px';
            divCreate.style.width = '25%';
    
            divCreate.appendChild(text);
            result.appendChild(divCreate);
        }


    }
}

removeButton.style.cssText = 'cursor: pointer; display: block; margin-top: 25px; text-align: center; justify-content: space-between; color: #666; margin-bottom: 25px; padding: 20px 40px;background-color: #009c7f; color: #fff; font-size: 25px; border-radius: 10px; border: 1px solid #ddd; width: 59%; outline: none;';

removeButton.onclick = function () {
    result.style.transition = '0.5s linear';
    inputNumber.value = '';
    if (inputText.placeholder == 'You Must Enter a Text') {
        inputText.value = '';
    } else {
        inputText.value = '';
    }
    result.remove();
}