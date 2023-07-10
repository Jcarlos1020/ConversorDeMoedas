const ConvertButton = document.querySelector(".convert-button")

function ConvertValues() {

    const InputMoedaValor = document.querySelector(".input-moeda").value

    const DolarDia = 5.5

    const ConvertedValue = InputMoedaValor / DolarDia

    console.log( ConvertedValue);
}



ConvertButton.addEventListener("click", ConvertValues)