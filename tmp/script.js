const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const phoneInput = document.querySelector('#phone');
const emailInput = document.querySelector('#email');
const companyInput = document.querySelector('#company');
const regionInput = document.querySelector('#region');
const form = document.querySelector('.form');
const label = document.createElement('label');

const fields = [nameInput, surnameInput, phoneInput, emailInput, companyInput, regionInput];
const phoneRegex = /^((\+7|7|8)+([0-9]){10})$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateFields() {
  return fields.every(field => field.value !== "");
}

function validatePhone(phone) {
  return phone.value.match(phoneRegex);
}

function validateEmail(email) {
  return email.value.match(emailRegex);
}

document.querySelector('#btn').addEventListener('click', function() {
  let hasInvalidFields = false;

  fields.forEach(field => {
    if (field.value === "" || (field === phoneInput && !validatePhone(field)) || (field === emailInput && !validateEmail(field))) {
      field.style.border = '2px solid red';
      hasInvalidFields = true;
    } else {
      field.style.border = '2px solid #E5E5E5';
    }
  });

  if (hasInvalidFields) {
    label.textContent = 'Заполните все обязательные поля';
    form.appendChild(label);
    return;
  }

  fields.forEach(field => {
    const { value } = field;
    console.log(value);
  });
});