(function(){

const numbersEl = document.querySelectorAll(".btn");


let equalEl = document.getElementById("btn-equal");

let clearEl = document.getElementById("btn-clear");


let displayEl = document.querySelector(".screen");

console.log(equalEl.innerText);


numbersEl.forEach((button)=>{
button.addEventListener('click',(event)=>{
    let enteredVal = event.target.dataset.num;
     displayEl.value += enteredVal;
})
})

equalEl.addEventListener('click',()=>{
    if(displayEl.value === ''){
        displayEl.value="";
    }
    else{
        let answer =eval(displayEl.value);
        displayEl.value=answer;
    }
})

clearEl.addEventListener('click',(event)=>{
    event.preventDefault();
    displayEl.value="";
})

})();
