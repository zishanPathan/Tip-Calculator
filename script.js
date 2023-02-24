//counting number of people
let numberOfPeopleDiv = document.getElementById("numberOfPeople")
let numberOfPeople = 1
const increasePeople = () =>{
  calculateBill()
   ++numberOfPeople 
    numberOfPeopleDiv.textContent =  numberOfPeople
  
}
const decreasePeople = () =>{
  if(numberOfPeople == 1){

     numberOfPeople = 1
    numberOfPeopleDiv.textContent = numberOfPeople
    
  }else{
calculateBill()
   --numberOfPeople
    numberOfPeopleDiv.textContent =  numberOfPeople
  } 
}
let count =()=>{
  num = Number(numberOfPeopleDiv.innerText)
  console.log(num)
}

//taking input and calculate
let billTotal = document.getElementById("billTotalInput")
let tip = document.getElementById("tipInput")

let amount = Number(billTotal.value) + Number(tip.value) 
console.log(amount)

//total 
let total = document.getElementById("perPersonTotal")
const calculateBill = () =>{
  
 total.textContent = ` $ ${Number(billTotal.value)+Number(tip.value) /numberOfPeople } `
}
