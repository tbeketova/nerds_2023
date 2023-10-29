const contactButton = document.querySelector('.contacts-button');
const modalSubmit = document.querySelector('.modal-submit');
const submitClose = modalSubmit.querySelector('.submit-close');

const loginLogin = modalSubmit.querySelector('[name=name]');
const form = modalSubmit.querySelector('.submit-form');
const loginEmail = modalSubmit.querySelector('[name=email]');

contactButton.addEventListener('click', function(evt){
  evt.preventDefault();
  modalSubmit.classList.add('modal-show');
  loginLogin.focus();
});

submitClose.addEventListener('click', function(evt){
  evt.preventDefault();
  modalSubmit.classList.remove('modal-show');
});

form.addEventListener('submit', function(evt){
  evt.preventDefault();
  console.log('Otpravlyaem formu');
});