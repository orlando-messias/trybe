const state = document.getElementById('state');
const arrStates = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
const btnSubmit = document.getElementById('btn-submit');
const startDate = document.getElementById('start-date');
let email = document.getElementById('email');

function dateValidation(){
  if(startDate.value.indexOf('/') === 2 && startDate.value.indexOf('/', 3) === 5) {
    let day = startDate.value.substr(0,2);
    let month = startDate.value.substr(3,2);
    let year = startDate.value.substr(6,4);
    if ((day > 0 && day <= 31) && (month >0 && month <= 12) && (year.length === 4 && year >= 0)) {
      return true;
    }
  }

  return false;
}

function emailValidation() {
  let pattern = /[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return pattern.test(email.value);
}

function onSubmit() {
  event.preventDefault();
  if (!dateValidation()) {
    startDate.classList.add('hasError')
    document.getElementById('note').innerHTML = 'Data Inválida'  
  }
  else {
    startDate.classList.remove('hasError');
    document.getElementById('note').innerHTML = ''  
  }

  if (!emailValidation()) {
    email.classList.add('hasError');
    document.getElementById('email-note').style.visibility = 'visible';
  }
  else {
    email.classList.remove('hasError');
    document.getElementById('email-note').style.visibility = 'hidden';
  }
}

for (let i = 0; i < arrStates.length; i += 1){
  let option = document.createElement('option');
  let item = document.createTextNode(arrStates[i]);
  option.value = arrStates[i].toLowerCase();
  option.appendChild(item);
  state.appendChild(option);
}

