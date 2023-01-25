const GENERATE_PASSWORD = document.getElementById('gen-password');
const PASSWORD_LENGTH = document.getElementById('password-length');
const LENGTH_IN_NUMBERS = document.querySelector('.length-in-numbers')
const GEN_BTN = document.getElementById('gen-password');

GEN_BTN.addEventListener('click', function(){
    console.log(generatePasswordString(PASSWORD_LENGTH.value, true, true, true));
})




function passwordLength(){
    PASSWORD_LENGTH.addEventListener('input', function(){
        LENGTH_IN_NUMBERS.textContent = this.value;
    })
}

function generatePasswordString(length, includeNumbers, includeSpecial, includeLowercase) {
    var result = '';
    var characters = '';
    if (includeNumbers) {
      characters += '0123456789';
    }
    if (includeSpecial) {
      characters += '!@#$%^&*';
    }
    if (includeLowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  
  