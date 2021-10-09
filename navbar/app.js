//classlist - shows/gets al classes
// contains - checks classlist for specific class
// add - add class
// remove - remove class
// toggle = toggles the class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links')

navToggle.addEventListener('click', function(){
     if(links.classList.contains('show-links')){
         links.classList.remove('show-links');
     }
     else{
         links.classList.add('show-links');
     }
})