
function Gen(){
    GenPassword(Len.value,Numbers.checked,LowerCase.checked,UpperCase.checked,Symbols.checked);
}
function GenPassword(Length, includeNumber, includeLowerCase, includeUpperCase,includeSymbols ){
    const Lower="abcdefghijklmnopqrstuvwxyz";
    const Upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number="0123456789";
    const Sym   ="!@#$%^&*()_+";
    let allowedChars = "";
    let password = "";
    allowedChars+=includeLowerCase?Lower:"";
    allowedChars+=includeUpperCase?Upper:"";
    allowedChars+=includeNumber?number:"";
    allowedChars+=includeSymbols?Sym:"";
    if(allowedChars==""){
        result.textContent=`you must choose one`;
        return;
    }
    if(includeNumber){
        password+=number[Math.floor(Math.random()*10)];
        Length--;
    }
    if(includeUpperCase){
        password+=Upper[Math.floor(Math.random()*26)];
        Length--;
    }
    if(includeLowerCase){
        password+=Lower[Math.floor(Math.random()*26)];
        Length--;
    }
    if(includeSymbols){
        password+=Sym[Math.floor(Math.random()*12)];
        Length--;
    }
    for(let i=0;i<Length;i++){
        password+=allowedChars[Math.floor(Math.random()*allowedChars.length)];
    }
    document.getElementById("lab").textContent =`Your Password is :`;
    result.textContent =`${password}`;
}