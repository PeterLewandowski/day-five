const usd = 95
const pesos = 20

function convert(number, exRate, currency1, currency2){

    let output = (number * exRate)

    console.log(`${number} ${currency1} is equivalent to ${output} in ${currency2}`)
}

// 1 usd = 0.88 euro

convert(pesos, 20.45, "USD", "Pesos")

//Problem #2

const tempC = 8.5 


//const tempF = 9.5

//(0°C × 9/5) + 32 = 32°F

function convert(number){
    
    let output = (number * conversion)

    console.log(`${number} degrees celsius convert to ${output} degrees fahrenheit `)
}

convert(tempC) 