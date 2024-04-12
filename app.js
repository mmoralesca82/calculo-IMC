console.log("Hola JS")

const inputWeight = document.querySelector(".inputWeight")
const inputSize = document.querySelector(".inputSize")

const outIMC = document.querySelector(".outIMC")
const outResult = document.querySelector(".outResult")

const buttons = document.querySelectorAll("button")

buttons[0].addEventListener('click', function(event){

     console.log('Hice click')
     console.log(inputSize)

     outIMC.value = Number(inputWeight.value/(inputSize.value/100)**2).toFixed(2)

     outResult.innerHTML='Condiciones del IMC: '

     if(outIMC.value<18.5){
        outResult.innerHTML+='BAJA.'
     }else if(outIMC.value<24.9)  {  
         outResult.innerHTML+='NORMAL.'
     }else if(outIMC.value<29.9)  {  
        outResult.innerHTML+='SOBREPESO.'
    }else{
        outResult.innerHTML+='OBESO.'
    }
    
})