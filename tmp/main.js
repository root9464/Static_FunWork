function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

function validatePhoneNumber(phoneNumber) {
    const pattern = /^(\+?7|8)\d{10}$/;
    return pattern.test(phoneNumber);
}


console.log(validatePhoneNumber("89501831100")); // true
console.log(validatePhoneNumber("+79501831100")); // true
console.log(validatePhoneNumber("89170123456")); // true
console.log(validatePhoneNumber("1234567890")); // false
