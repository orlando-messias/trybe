const state = document.getElementById('state');
const arrStates = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]


for (let i = 0; i < arrStates.length; i += 1){
  let option = document.createElement('option');
  let item = document.createTextNode(arrStates[i]);
  option.value = arrStates[i].toLowerCase();
  option.appendChild(item);
  state.appendChild(option);
}
