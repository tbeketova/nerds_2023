const contactButton = document.querySelector('.contacts-button');
const modalSubmit = document.querySelector('.modal-submit');
const submitClose = modalSubmit.querySelector('.submit-close');

const form = modalSubmit.querySelector('.submit-form');
const login = modalSubmit.querySelector('[name=name]');
const email = modalSubmit.querySelector('[name=email]');

contactButton.addEventListener('click', function(evt){
  evt.preventDefault();
  modalSubmit.classList.add('modal-show');
  login.focus();
});

submitClose.addEventListener('click', function(evt){
  evt.preventDefault();
  modalSubmit.classList.remove('modal-show');
});

form.addEventListener('submit', function(evt){
  if(!login.value || !email.value) {
    
  evt.preventDefault();
  //console.log(login.value);
  console.log('Введите имя и email');
} else {
  localStorage.setItem('login', login.value); 
}
});