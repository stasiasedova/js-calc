send.addEventListener("click", fnc);
function fnc(){
    if(isNaN(parseInt(P.value)) || isNaN(parseInt(C.value))){
      alert('Введите верные данные');
      return;
    }
    R.value = parseInt(P.value) / parseInt(C.value) * 100 + ' %';
}