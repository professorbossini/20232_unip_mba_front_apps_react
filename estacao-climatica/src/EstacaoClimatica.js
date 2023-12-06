import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export class EstacaoClimatica extends Component {

  state = {
    data: null
  }
  
  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentDidMount(){

    this.timer = setInterval(() => {
      //extrair a data atual do sistema
      const dataAtual = new Date()
      //atualizar o estado
      //não faça isso
      //this.state.data = dataAtual
      this.setState({
        data: dataAtual.toLocaleTimeString() //usar a biblioteca moment
      })
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)  
  }

  timer = null

  render() {
    console.log('render')
    return (
      <div className="card">

        <div className="card-body">

          <div className="d-flex align-items-center" style={{ height: '6rem' }}>
            <i className={`fa-solid fa-5x ${this.props.icone}`}></i>
            <p className='ms-3 fs-1 w-75 text-center'>{this.props.estacao}</p>
          </div>

          <div>
            <p className="text-center">
              {
                this.props.latitude
                  ?
                  `Latitude: ${this.props.latitude}, Longitude: ${this.props.longitude}. Data: ${this.state.data}`
                  :
                  this.props.mensagemDeErro ?
                    `${this.props.mensagemDeErro}`
                    :
                    'Clique no botão para saber a sua estação climática'
              }
            </p>
          </div>


          <button
            onClick={this.props.obterLocalizacao}
            className="btn btn-outline-primary w-100 mt-2">
            Qual a minha estação?
          </button>

          <button
            onClick={() => {
              ReactDOM.unmountComponentAtNode(
                document.querySelector('#root')
              )
            }}
            className="btn btn-outline-danger w-100 mt-2">
            Destruir a aplicação!!
          </button>
        </div>

      </div>
    )
  }
}

export default EstacaoClimatica