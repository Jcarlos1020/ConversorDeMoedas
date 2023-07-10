const ConvertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".moeda-select")


function ConvertValues() {

    const InputMoedaValor = document.querySelector(".input-moeda").value

    const ConverterValor = document.querySelector(".Valor-converter")

    const ConvertidoValor = document.querySelector(".Valor")

    console.log(currencySelect.value);

    const DolarDia = 5.2
    const EuroDia = 6.2
    const LibraDia = 4.5
    const BitcoinDia = 3.0
    const RealDia = 1.0



    if (currencySelect.value == "dolar") {
        ConvertidoValor.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", currency: "USD"
        }).format(InputMoedaValor / DolarDia)


    }

    if (currencySelect.value == "euro") {
        ConvertidoValor.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", currency: "EUR"
        }).format(InputMoedaValor / EuroDia)

    }

    if (currencySelect.value == "libra") {
        ConvertidoValor.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency", currency: "GBP"
        }).format(InputMoedaValor / LibraDia)

    }

    if (currencySelect.value == "bitcoin") {
        ConvertidoValor.innerHTML = new Intl.NumberFormat("en-IN", {
            style: "currency", currency: "BTC"
        }).format(InputMoedaValor / BitcoinDia)

    }


    if (currencySelect.value == "real") {
        ConvertidoValor.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency", currency: "BRL"
        }).format(InputMoedaValor / RealDia)

    }

   
   ////////////////////////////////////////////////////////////////////////
   
   
   
   ConverterValor.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency", currency: "BRL"
}).format(InputMoedaValor)

   



}




function changeCurrency() {

    const moedaName = document.getElementById("moeada-name")
    const moedaImg = document.querySelector(".moeda-img")

    if (currencySelect.value == "dolar") {

        moedaName.innerHTML = "Dolar Americano"
        moedaImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "real") {

        moedaName.innerHTML = "   R$ Real brasileiro"
        moedaImg.src = "./assets/real.png"
    }


    if (currencySelect.value == "euro") {

        moedaName.innerHTML = "Euro"
        moedaImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {

        moedaName.innerHTML = "Libra"
        moedaImg.src = "./assets/libra 1.png"
    }

    if (currencySelect.value == "bitcoin") {

        moedaName.innerHTML = "Bitcoin"
        moedaImg.src = "./assets/bitcoin 1.png"
    }
    ConvertValues()
}






currencySelect.addEventListener("change", changeCurrency)
ConvertButton.addEventListener("click", ConvertValues)