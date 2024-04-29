const nameInput = document.querySelector('#name');
const cityInput = document.querySelector('#city');
const form = document.querySelector('.form');
const label = document.createElement('label');

function validateName(name) {
  const phoneRegex = /^((\+7|7|8)+([0-9]){10})$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return phoneRegex.test(name) || emailRegex.test(name);
}

document.querySelector('#btn').addEventListener('click', function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const city = cityInput.value.trim();

    switch (true) {
        case name === '' && city === '':
            setError(nameInput, 'Поле не может быть пустым');
            setError(cityInput, 'Поле не может быть пустым');
            break;
        case !validateName(name):
            setError(nameInput, 'Введите корректный номер телефона или email');
            break;
        case city === '':
            setError(cityInput, 'Поле не может быть пустым');
            break;
        case name === '':
            setError(nameInput, 'Поле не может быть пустым');
            break;
        default:
            nameInput.style.border = '';
            cityInput.style.border = '';
            label.textContent = '';
            form.removeChild(label);
            console.log('Форма успешно валидирована');
            break;
    }
});

function setError(input, message) {
    input.style.border = '2px solid red';
    label.textContent = message;
    form.appendChild(label);
}