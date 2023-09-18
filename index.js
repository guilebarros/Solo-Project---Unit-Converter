/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("user-input")
const buttonEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("meter-feet")
const volumeEl = document.getElementById("liters-gallons")
const massEl = document.getElementById("kilograms-pounds")
let numberToConvert = inputEl.value 

buttonEl.addEventListener("click", function() {
    let numberToConvert = inputEl.value
    convertValue(numberToConvert)
})

function convertValue(value) {

    let meterToFeet = value * 3.281
    let feetToMeter = value / 3.281
    let literToGallon = value * 0.264
    let GallonToLiter = value / 0.264
    let kilogramToPound = value * 2.204
    let PoundToKilogram = value / 2.204
    showResults(value,
                meterToFeet,
                feetToMeter,
                literToGallon, 
                GallonToLiter,
                kilogramToPound,
                PoundToKilogram
                )
}

function showResults(userInput, 
                     meterToFeet,
                     feetToMeter, 
                     literToGallon, 
                     GallonToLiter, 
                     kilogramToPound, 
                     PoundToKilogram) {


    lengthEl.textContent = `${userInput} meters = ${meterToFeet.toFixed(3)} feet | ${userInput} feet = ${feetToMeter.toFixed(3)} meters`  
    volumeEl.textContent = `${userInput} liters = ${literToGallon.toFixed(3)} gallons | ${userInput} gallons = ${GallonToLiter.toFixed(3)} liters`
    massEl.textContent = `${userInput} kilograms = ${kilogramToPound.toFixed(3)} pounds | ${userInput} pounds = ${PoundToKilogram.toFixed(3)} kilograms`
}