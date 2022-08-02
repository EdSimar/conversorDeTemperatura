//input que mostra o número
let celsius = document.getElementById("celsius")
let fahrenheit = document.getElementById("fahrenheit")
let kelvin = document.getElementById("kelvin")

//input type range
let rgCelsius = document.getElementById("rgCelsius")
let rgFahreinheit = document.getElementById("rgFahreinheit")
let rgKelvin = document.getElementById("rgKelvin")

celsius.value = rgCelsius.value
fahrenheit.value = rgFahreinheit.value
kelvin.value = rgKelvin.value

function updateCelsius(){
    celsius.value = rgCelsius.value
}

function updateFahreinheit(){
    let converCelsToFahr = (rgCelsius.value *(9/5)) + 32
    fahrenheit.value = parseFloat(converCelsToFahr).toFixed(2)
}

function updateKelvin(){
    let converCelsToKel = parseFloat(rgCelsius.value) + 273
    kelvin.value = parseFloat(converCelsToKel).toFixed(2)
}

function btnZerar(){
    rgCelsius.value = 0.00
    celsius.value = rgCelsius.value
    fahrenheit.value = rgFahreinheit.value
    kelvin.value = rgKelvin.value
}
