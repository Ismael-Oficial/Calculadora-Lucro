function lucro() {

    var valor = document.getElementById('valor')
    var percentual = document.getElementById('percentual')
    var result = document.getElementById('resultado')
    var result2 = document.getElementById('resultado2')

    var valor = Number(valor.value)
    var percentual = Number(percentual.value)
    var soma = parseFloat((percentual / 100) * valor)
    result.innerHTML = "O Lucro será de: R$" + soma

    result2.innerHTML = "O Preço sugerido é R$" + (valor + soma)
}