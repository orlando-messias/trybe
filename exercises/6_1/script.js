const state = document.getElementById('state');
const arrStates = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
const btnSubmit = document.getElementById('btn-submit');
const startDate = document.getElementById('start-date');

function onSubmit(){
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

function validate() {
  event.preventDefault();
  if (!onSubmit()) {
    startDate.style.border = '2px solid red';
    document.getElementById('note').innerHTML = 'Data Inválida'  
  }
  else {
    startDate.style.border = '1px solid rgb(167,167,167)';
    document.getElementById('note').innerHTML = ''  
  }
}

for (let i = 0; i < arrStates.length; i += 1){
  let option = document.createElement('option');
  let item = document.createTextNode(arrStates[i]);
  option.value = arrStates[i].toLowerCase();
  option.appendChild(item);
  state.appendChild(option);
}

