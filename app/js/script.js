
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

function isPhoneNumberOrEmail(value) {
  return isPhoneNumber(value) || isEmail(value);
}


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


document.getElementById('wm').addEventListener('click', validateFormWomen);

function validateFormWomen(event) {
    event.preventDefault();

    const inputs = [
    { input: nameInput, value: 'номер телефона или email', validate: isPhoneNumberOrEmail },
    { input: cityInput, value: 'город', required: true }
    ];

    inputs.forEach(function(input) {
    const value = input.input.value.trim();
    if (input.required && value === '') {
        setError(input.input, `Поле не может быть пустым`);
    } else if (input.validate && !input.validate(value)) {
        setError(input.input, `Введите корректный ${input.value}`);
    } else {
        input.input.style.border = '';
    }
    });

    const allValid = inputs.every(input => input.input.style.border === '');
    if (allValid) {
    inputs.forEach(input => input.input.style.border = '');
    label.textContent = '';
    console.log('Форма успешно валидирована');
    }
}




document.getElementById('mn').addEventListener('click', validateFormMan);


function validateFormMan(event) {
  event.preventDefault();

  const inputs = [
    { input: userInput, value: 'name', required: true },
    { input: surnameInput, value: 'surname', required: true },
    { input: phoneInput, value: 'phone', required: true, validate: isPhoneNumber },
    { input: emailInput, value: 'email', required: true, validate: isEmail },
    { input: companyInput, value: 'company', required: true },
    { input: regionInput, value: 'region', required: true }
  ];

  inputs.forEach((input) => {
    const value = input.input.value.trim();
    if (input.required &&!value) {
      setError(input.input, 'Поле не может быть пустым');
    } else if (input.validate &&!input.validate(value)) {
      setError(input.input, `Введите корректный ${input.value}`);
    } else {
      input.input.style.border = '';
    }
  });

  const allValid = inputs.every((input) => input.input.style.border === '');
  if (allValid) {
    label.textContent = '';
    console.log('Форма успешно валидирована');
  }
}
