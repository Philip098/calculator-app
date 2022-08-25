let result = document.querySelector('.result')
let firstInput = document.querySelector('#inputform')
let secondInput = document.querySelector('#form')
let button = document.querySelector('.button')
let operators = document.querySelector('[name="operators"]')
let operator = document.querySelector('[name="operator"]')
let operands = document.querySelector('[name="operands"]')
let textArea = document.querySelector('.textarea')
let span = document.querySelector('span')

// button.addEventListener('click',() =>{
//   let total = parseInt(firstInput.value) + parseInt(secondInput.value)
//   result.innerHTML+=`${total}`
  
//   });
  let myCalc = () =>{
    let totals = parseInt(firstInput.value )+ parseInt(secondInput.value)
    result.innerHTML += totals
  }

  operators.addEventListener('click',() =>{
      let subtract = parseInt(firstInput.value) - parseInt(secondInput.value)
      result.innerHTML+=subtract
  });
 operator.addEventListener('click',()=>{
  let multiply= parseInt(firstInput.value) * parseInt(secondInput.value)
  result.innerHTML += multiply
 });
 operands.addEventListener('click',()=>{
  let divide = parseInt(firstInput.value) / parseInt(secondInput.value)
  result.innerHTML += divide
 });

textArea.addEventListener('onchange',() => {
 
} )

let getlengthFunction = () =>{
  let textLength = textArea.value.length
  span.innerHTML=+textLength
   
  if (textLength > 200) {
    textArea.value=textArea.value.substring(0,200);
    
  }else{
    textArea.classList.add('textarea')
  }  
 }
 
 const genderFunction = () =>{
  let name = document.getElementById('gender').value;
  console.log(name)
  // console.log(name.value)

  let genderclass = document.querySelector('.showGender')
    genderclass.innerHTML= name
    console.log(genderclass);
 } 
 
 
  
 