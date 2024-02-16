//REFERENCES
const mailInput = document.querySelector('.newsletter__input');
const form = document.querySelector('#form');
const labelInvalid = document.querySelector('.invalid');



//FUNCTIONS

const mailValidation = () => {
    let valid = false;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (mailInput.value.match(regex)) {
        labelInvalid.style.display= 'none'
        mailInput.classList.remove('invalid-input')
        mailInput.classList.add('valid-input')
        valid = true;
    }else{
        labelInvalid.style.display= 'block';
        mailInput.classList.add('invalid-input')
        mailInput.classList.remove('valid-input')
    }
    return valid;
    
}



//EVENTS

mailInput.addEventListener('keyup', () => {
    mailValidation();
})

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const email = mailInput.value;
    window.location.href = '/thanks.html?dato=' + encodeURIComponent(email);
    console.log('enviado');

})

