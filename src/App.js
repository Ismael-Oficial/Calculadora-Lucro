import './App.css';

function App() {

  function lucro() {
    var valor = document.getElementById('valor')
    var percentual = document.getElementById('percentual')
    var result = document.getElementById('resultado1')
    var result2 = document.getElementById('resultado2')
    var result3 = document.getElementById('resultado3')
    var result4 = document.getElementById('resultado4')

    var valor = Number(valor.value)
    var percentual = Number(percentual.value)
    var soma = parseFloat((percentual / 100) * valor)

    result.innerHTML = "Valor de Lucro: R$" + soma
    result2.innerHTML = "Preço sugerido R$" + (valor + soma)
    result3.innerHTML = "Percentual do calculo: " + percentual + "%"
    result4.innerHTML = "O Custo inicial foi de R$" + valor
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Calcular Lucro</h1>
        <input type="number" id="valor" placeholder="Digite o valor do custo" />
        <br />
        <input type="number" id="percentual" placeholder="Digite a porcentagem do lucro" />
      </div>
      <div className="btn">
        <button onClick={lucro}>Calcular</button>
        <p id="resultado4"></p>
        <p id="resultado3"></p>
        <p id="resultado2"></p>
        <p id="resultado1"></p>
      </div>
    </div>
  );
}

export default App;
