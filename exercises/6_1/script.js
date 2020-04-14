const state = document.getElementById('state');
const arrStates = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
const btnSubmit = document.getElementById('btn-submit');
const startDate = document.getElementById('start-date');
let email = document.getElementById('email');
let dateNote = document.getElementById('date-note');
let emailNote = document.getElementById('email-note');

function dateValidation(){
  if(startDate.value.indexOf('/') === 2 && startDate.value.indexOf('/', 3) === 5) {
    let day = startDate.value.substr(0,2);
    let month = startDate.value.substr(3,2);
    let year = startDate.value.substr(6,4);
    if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year.length === 4 && year >= 0)) {
      return true;
    }
  }

  return false;
}

function emailValidation() {
  let pattern = /[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return pattern.test(email.value);
}

function showHideNotification(element, note, show) {
  if (show) {
    element.classList.add('hasError');
    note.style.visibility = 'visible';
  }
  else {
    element.classList.remove('hasError');
    note.style.visibility = 'hidden';
  }
}

function onSubmit() {
  event.preventDefault();

  if (!dateValidation())
    showHideNotification(startDate, dateNote, true);
  else
    showHideNotification(startDate, dateNote, false);

  if (!emailValidation())
    showHideNotification(email, emailNote, true);
  else
    showHideNotification(email, emailNote, false);
}

for (let i = 0; i < arrStates.length; i += 1){
  let option = document.createElement('option');
  let item = document.createTextNode(arrStates[i]);
  option.value = arrStates[i].toLowerCase();
  option.appendChild(item);
  state.appendChild(option);
}
