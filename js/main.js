var elForm =document.querySelector(".js-form");
var elInput =document.querySelector(".js-input");
var elSelect =document.querySelector(".js-select");
var elButton =document.querySelector(".js-btn");
var elSubtitle =document.querySelector(".js-subtitle");

elForm.addEventListener("submit",function(evt){
    evt.preventDefault()
    var elInputValue=+elInput.value;
    var toDollr=elInputValue/11250;
    var toEuro=elInputValue/11686;
    var toRubl=elInputValue/185;
    if(elSelect.value==`1`){
        elSubtitle.textContent=`${elInputValue} so'm =${toDollr.toFixed(3)} USD`
    }
    else if(elSelect.value==`2`){
        elSubtitle.textContent=`${elInputValue} so'm = ${toEuro.toFixed(3)}= EURO`
    }
    else if(elSelect.value==3){
        elSubtitle.textContent=`${elInputValue} so'm = ${toRubl.toFixed(3)}= RUBL`
    }
    else if(isNaN(elInputValue)== true){
        elSubtitle.textContent=`${elInputValue} so'm = Son kiritishingiz kerak`
    }
    else{
        elSubtitle.textContent=`valyutani tanlamadingiz`
    }
})
