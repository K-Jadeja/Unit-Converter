/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lenOut = document.getElementById("len-out")
const volOut = document.getElementById("vol-out")
const massOut = document.getElementById("mass-out")

convertBtn.addEventListener("click", function() {
    const input = inputEl.value
    lenOut.textContent = `${input} meters = ${(input*3.281).toFixed(2)} feet | ${input} feet = ${(input/3.281).toFixed(2)} meters`
    volOut.textContent = `${input} liters = ${(input*0.264).toFixed(2)} gallons | ${input} gallons = ${(input/0.264).toFixed(2)} liters`
    massOut.textContent = `${input} kilos = ${(input*2.204).toFixed(2)} pounds | ${input} pounds = ${(input/2.204).toFixed(2)} kilos`
})