let button = document.querySelector('#btn');
let body = document.querySelector('body');

let bg = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let hexVal = document.querySelector('#hex-value');

button.addEventListener('click', changeHex);

function changeHex(){
    let hex = '#';

    for(let i=0; i<6; i++){
        let index = parseInt(Math.random()*bg.length);
        hex += bg[index];
    }
    hexVal.textContent = hex;
    body.style.backgroundColor = hex;
}