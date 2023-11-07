
const App = () => {
  return (
    <div>
      <nav class="nav navbar">
        <div class="container">
          Minha Loja
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check psiu" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-0-square-fill spa" viewBox="0 0 16 16">
              <path d="M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895Z"/>
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm5.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99Z"/>
            </svg>
          </div> 
        </div>
</nav>
        <div class="tudo">
            <div>
                <img class="img" src="./img/camisa-vermelha.jpg" alt=""></img>
            </div>
            <div class="cont">
                <p>R$59,99</p>
                <h1 class="nome">Camisa Vermelha</h1>
                <p class="frase">Essa é uma camisa vermelha 
                    feita de algodão com detalhes 
                    preto e vermelho.
                </p>
                <div class="cont-2">
                    <button class="add">-</button>
                    <label class="quant" for="">1</label>
                    <button class="add">+</button>
                    <button class="add-car">Adicionar ao Carrinho</button>
                    <div class="total">
                        Total:  R$ <label for="">59,99</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

function AjustarQuantidade(){
  return b = b + 1
}

function AjustarPreço() {
  return c = c + 59.99; 
}

function Ajuste(){
  AjustarPreço();
  AjustarQuantidade()
}

let c = 59.99
let b = 1

console.log (c, b)
