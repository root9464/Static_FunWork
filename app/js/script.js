
const fmn = document.getElementById('fmn');
const fwm = document.getElementById('fwm');
const label = document.createElement('label');
const cityInput = document.querySelector('#city');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const companyInput = document.querySelector('#company');
const regionInput = document.querySelector('#region');
const userInput = document.querySelector('#user');


document.getElementById('manbtn').addEventListener('click', function () {
    document.querySelector('.form-mn').style.display = 'grid';
    const formMan = document.querySelectorAll('.form-role');
    formMan.forEach(function(element) {
        element.style.display = 'none';
    })
});

document.getElementById('wombtn').addEventListener('click', function() {
    document.querySelector('.form-wm').style.display = 'grid';
    const formWoomen = document.querySelectorAll('.form-role');
    formWoomen.forEach(function(element) {
        element.style.display = 'none';
    });
});


document.getElementById('wm').addEventListener('click', function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const city = cityInput.value.trim();

  if (name!== '' && (isPhoneNumber(name) || isEmail(name))) {
    nameInput.style.border = '';
  } else {
    setError(nameInput, 'Введите корректный номер телефона или email');
  }

  if (city!== '') {
    cityInput.style.border = '';
  } else {
    setError(cityInput, 'Поле не может быть пустым');
  }

  if ((name!== '' && city!== '') && (isPhoneNumber(name) || isEmail(name))) {
    nameInput.style.border = '';
    cityInput.style.border = '';
    label.textContent = ''; // clear the label's text content
    console.log('Форма успешно валидирована');
  }
});

document.getElementById('mn').addEventListener('click', function(event) {
  event.preventDefault();

  const name = userInput.value.trim();
  const surname = surnameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const company = companyInput.value.trim();
  const region = regionInput.value.trim();

  if (name!== '') userInput.style.border = ''; else setError(userInput, 'Поле не может быть пустым');

  if (surname!== '') surnameInput.style.border = ''; else setError(surnameInput, 'Поле не может быть пустым');

  if (phone!== '' && isPhoneNumber(phone) && phone.length === 10) phoneInput.style.border = ''; else setError(phoneInput, 'Телефон корректный или поле не может быть пустым');

  if (email!== '' && isEmail(email)) emailInput.style.border = ''; else setError(emailInput, 'Введите корректный email или поле не может быть пустым');

  if (company!== '') companyInput.style.border = ''; else setError(companyInput, 'Поле не может быть пустым');

  if (region!== '') regionInput.style.border = ''; else setError(regionInput, 'Поле не может быть пустым');

  if ((name!== '' && surname!== '' && phone!== '' && email!== '' && company!== '' && region!== '') && (isPhoneNumber(phone) || isEmail(email))) {

    userInput.style.border = '';
    surnameInput.style.border = '';
    phoneInput.style.border = '';
    emailInput.style.border = '';
    companyInput.style.border = '';
    regionInput.style.border = '';

    label.textContent = ''; // clear the label's text content
    console.log('Форма успешно валидирована');
  }
})


function setError(input, message) {
    input.style.border = '2px solid red';
    label.textContent = message;
    label.style.color = 'red';
    input.parentNode.appendChild(label);
}


function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

}


function isPhoneNumber(phoneNumber) {
    const pattern = /^(\+?7|8)\d{10}$/;
    return pattern.test(phoneNumber);
}