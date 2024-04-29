
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

    if (name!== '' && validateName(name)) nameInput.style.border = ''; else setError(nameInput, 'Введите корректный номер телефона или email');

    if (city!== '') cityInput.style.border = ''; else setError(cityInput, 'Поле не может быть пустым');

    if (name !== '' && city !== '') {
        nameInput.style.border = '';
        cityInput.style.border = '';
        label.textContent = '';
        fwm.removeChild(label);
        console.log('Форма успешно валидирована');
    };
    
});

document.getElementById('mn').addEventListener('click', function(event) {
    event.preventDefault();

    const name = userInput.value.trim();
    const surname = surnameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const company = companyInput.value.trim();
    const region = regionInput.value.trim();

    if (name !== '') userInput.style.border = ''; else setError(userInput, 'Поле не может быть пустым');

    if (surname !== '') surnameInput.style.border = ''; else setError(surnameInput, 'Поле не может быть пустым');

    if (phone !== '') phoneInput.style.border = ''; else setError(phoneInput, 'Поле не может быть пустым');

    if (email !== '') emailInput.style.border = ''; else setError(emailInput, 'Поле не может быть пустым');

    if (company !== '') companyInput.style.border = ''; else setError(companyInput, 'Поле не может быть пустым');

    if (region !== '') regionInput.style.border = ''; else setError(regionInput, 'Поле не может быть пустым');

    if (name !== '' && surname !== '' && phone !== '' && email !== '' && company !== '' && region !== '') {

        userInput.style.border = '';
        surnameInput.style.border = '';
        phoneInput.style.border = '';
        emailInput.style.border = '';
        companyInput.style.border = '';
        regionInput.style.border = '';

        label.textContent = '';
        fmn.removeChild(label);
        console.log('Форма успешно валидирована');
    }
})


function validateName(name) {
  const phoneRegex = /^((\+7|7|8)+([0-9]){10})$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return phoneRegex.test(name) || emailRegex.test(name);
}


function setError(input, message) {
    input.style.border = '2px solid red';
    label.textContent = message;
    label.style.color = 'red';
    input.parentNode.appendChild(label);
}


