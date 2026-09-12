// ==========1st Screen===========
let firstScreen = document.getElementById("firstScreen")
let firstNameInput = document.getElementById("firstNameInput")
let firstBtn = document.getElementById("firstBtn")
let firstError = document.getElementById("firstError")
let firstPlayerName =document.getElementById("firstPlayerName")

let multiplicationBox = document.getElementById("multiplicationBox")
let multiplicationTitle = document.getElementById("multiplicationTitle")
let MultiplicationResult = document.getElementById("MultiplicationResult")

firstBtn.addEventListener("click",()=>{

    if(firstNameInput.value==""){

        firstError.removeAttribute("hidden")

    }else{

    multiplicationBox.removeAttribute("hidden")

    multiplicationTitle.innerText = "Table of " + firstNameInput.value

    for(let i = 1; i<=10; i++ ){

        MultiplicationResult.innerText +=`${firstNameInput.value} X ${i} = ${firstNameInput.value * i}\n`
        
        }

    }
});


