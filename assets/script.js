// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Juliana Cortes" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let totalCookies = 0
let gbTotal = 0
let ccTotal = 0
let ssTotal = 0
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

let gbQuantity = document.getElementById("qty-gb")

document.getElementById("qty-gb").textContent = (gbTotal)
// Buttons Gb

var gbMinus = document.querySelector("#minus-gb")
var gbPlus = document.getElementById("add-gb")

gbMinus.addEventListener("click", function(){
    if (gbTotal>0) {
        gbTotal--;
        totalCookies--;
        document.getElementById("qty-gb").textContent = (gbTotal) 
        document.getElementById("qty-total").textContent = (totalCookies)
    }
})

gbPlus.addEventListener("click", function() {
    if (gbPlus) {
        gbTotal++;
        totalCookies++;
        document.getElementById("qty-gb").textContent = (gbTotal)
        document.getElementById("qty-total").textContent = (totalCookies)     
    }
})
let ccQuantity = document.getElementById("qty-cc")

document.getElementById("qty-cc").textContent = (ccTotal)
// Buttons CC
var ccMinus = document.getElementById("minus-cc")
var ccPlus = document.getElementById("add-cc")

ccMinus.addEventListener("click", function() {
    if (ccTotal>0)
        ccTotal--;
        totalCookies--;
        document.getElementById("qty-cc").textContent = (ccTotal)
        document.getElementById("qty-total").textContent = (totalCookies)
})

ccPlus.addEventListener("click",function(){
    if (ccPlus){
        ccTotal++
        totalCookies++
        document.getElementById("qty-cc").textContent = (ccTotal)
        document.getElementById("qty-total").textContent = (totalCookies)
    }
})

let ssQuantity = document.getElementById("qty-sugar")

document.getElementById("qty-sugar").textContent = (ssTotal)

// Buttons ss

var ssMinus = document.getElementById("minus-sugar")
var ssPlus = document.getElementById("add-sugar")

ssMinus.addEventListener("click", function(){
    if (ssTotal>0)
        ssTotal--;
        totalCookies--;
        document.getElementById("qty-sugar").textContent = (ssTotal)
        document.getElementById("qty-total").textContent = (totalCookies)

})

ssPlus.addEventListener("click", function() {
    if (ssPlus) {
        ssTotal++
        totalCookies++
        document.getElementById("qty-sugar").innerHTML = (ssTotal)
        document.getElementById("qty-total").innerHTML = (totalCookies)
    }
}
)
// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons
