import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'

const App = () => {

  const funcaoOK = () => alert('Agradecemos o feedback')
  const funcaoNOK = () => alert('Verificaremos o ocorrido')
  const textoOK = 'Já chegou'
  const textoNOK = 'Não chegou ainda'

  const componenteFeedback = (
    <Feedback 
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
      textoOK={textoOK}
      textoNOK={textoNOK}
    />
  )
  return (
    <div className='container border rounded mt-2'>
      
      <div className='row'>
        <div className='col-12'>
          <div className='my-3'>
            <h1 className='display-5 text-center'>Seus pedidos</h1>
          </div>
        </div>
      </div>  

      <div className="row">
        <div className='col-lg-3 col-md-6 col-sm-12'>
          {/* criar um cartão e colocar o pedido como filho, além disso, passar a data como props do cartão, com o nome cabecalho */}
          <Cartao
            cabecalho='22/04/2021'>
            <Pedido 
              icone='fa-solid fa-hard-drive fa-shake fa-2x'
              titulo='SSD'
              descricao='SSD Kingston A400 - SATA'/>
              {componenteFeedback}
          </Cartao>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <Cartao
            cabecalho="21/04/2022">
            <Pedido 
              icone='fa-solid fa-book fa-2x fa-shake'
              titulo='Livro'
              descricao='Concrete Maths - Donald Knuth'/>
              {componenteFeedback}  
          </Cartao>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <Cartao
            cabecalho="22/05/2023">
            <Pedido 
              icone='fa-solid fa-laptop fa-shake fa-2x'
              titulo='Notebook'
              descricao='Notebook Dell - 8Gb i5'/> 
              {componenteFeedback}
          </Cartao>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <Cartao
            cabecalho="22/01/2023">
            <Pedido 
              icone='fa-solid fa-umbrella-beach fa-bounce fa-2x'
              titulo='Guarda sol'
              descricao='Guarda sol'/>
              {componenteFeedback} 
          </Cartao>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)