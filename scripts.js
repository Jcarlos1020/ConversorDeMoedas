const ConvertButton = document.querySelector(".convert-button")

function ConvertValues() {

    const InputMoedaValor = document.querySelector(".input-moeda").value

    const ConverterValor = document.querySelector(".Valor-converter")

    const ConvertidoValor = document.querySelector(".Valor")

    const DolarDia = 5.2
    
    const ConvertedValue = InputMoedaValor / DolarDia

    ConverterValor.innerHTML =new Intl.NumberFormat("pt-BR", {
        style:"currency", currency:"BRL"
    }).format(InputMoedaValor)
   
    ConvertidoValor.innerHTML =new Intl.NumberFormat("en-US", {
        style:"currency", currency:"USD"
    }).format(ConvertedValue)
   
    console.log(ConvertedValue);
}



ConvertButton.addEventListener("click", ConvertValues)