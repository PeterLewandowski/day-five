const usd = 95
const pesos = 20

function convert(number, exRate, currency1, currency2){

    let output = (number * exRate)

    console.log(`${number} ${currency1} is equivalent to ${output} in ${currency2}`)
}

// 1 usd = 0.88 euro

convert(pesos, 20.45, "USD", "Pesos")
