import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Pedido from './Pedido'

const App = () => {
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
          <Pedido 
            data='22/04/2021'
            icone='fa-solid fa-hard-drive fa-shake fa-2x'
            titulo='SSD'
            descricao='SSD Kingston A400 - SATA'/>
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <Pedido 
            data='20/04/2021'
            icone='fa-solid fa-book fa-2x fa-shake'
            titulo='Livro'
            descricao='Concrete Maths - Donald Knuth'/>  
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <Pedido 
            data='21/01/2021'
            icone='fa-solid fa-laptop fa-shake fa-2x'
            titulo='Notebook'
            descricao='Notebook Dell - 8Gb i5'/> 
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <Pedido 
            data='22/01/2023'
            icone='fa-solid fa-umbrella-beach fa-bounce fa-2x'
            titulo='Guarda sol'
            descricao='Guarda sol'/> 
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)