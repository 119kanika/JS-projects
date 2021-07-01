let button = document.querySelector('button');
let body = document.querySelector('body');
let bg = ['pink', 'yellow', 'green', 'black', 'red', 'orange', 'blue', 'purple'];

body.style.backgroundColor = 'purple';
button.addEventListener('click', changeBackground);

function changeBackground(){
    const index = parseInt(Math.random()*bg.length);
    body.style.backgroundColor = bg[index];
}