const counterValue = document.querySelector(".screenPara");
const plusButton = document.querySelector(".plusCricle");
const minusButton = document.querySelector(".minusCricle");



console.log("counterValue",counterValue);


function increment(){

// fetch value and conver in number
let value =parseInt(counterValue.innerText);

// plus kiya
value = value+1;

// ui ko update kiya
counterValue.innerText = value;
}

plusButton.addEventListener("click",increment);




function decrement(){
    // fetch karo value
 let value =parseInt(counterValue.innerText);

 // minus kiya
 value = value-1;

//  ui lo update karna 
counterValue.innerText = value;
}


minusButton.addEventListener("click",decrement);

function reset(){
    counterValue.innerText = 0;
}