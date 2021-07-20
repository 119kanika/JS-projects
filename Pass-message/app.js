// document.getElementsByClassName('query').style.display = 'none';

let form = document.querySelector('#form-message');

form.addEventListener('submit', (e)=>{

    e.preventDefault();

    let message = document.querySelector('#message');
    let query = document.querySelector('.query');
    let messageContent = document.getElementsByClassName('.message-content');

    if(message.value === ''){
        query.classList.add('show');
        setTimeout(()=>{
            query.classList.remove('show')
        }, 2000)
    }
    else{
        messageContent.textContent = message.value;
        message.value = '';
    }
})