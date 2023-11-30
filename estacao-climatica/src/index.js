import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro: null
    }  
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear()
    //21/06
    const d1 = new Date(anoAtual, 5, 21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const d4 = new Date(anoAtual, 2, 21)
    const sul = latitude < 0
    if (data >= d1 && data < d2)
      return sul ? 'Inverno' : 'Verão'
    if(data >= d2 && data < d3)
      return sul ? 'Primavera' : 'Outono'
    if(data >= d3 || data < d4)
      return sul ? 'Verão' : 'Inverno'
    return sul ? 'Outono' : 'Primavera'
  }

  icones = {
    'Primavera': 'fa-seedling',
    'Verão': 'fa-umbrella-beach',
    'Outono': 'fa-tree',
    'Inverno': 'fa-snowman'
  }

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //extrair a data atual do sistema
        let data = new Date()
        //obter a estação climática
        let estacao = this.obterEstacao(data, position.coords.latitude)
        //obter o icone
        let icone = this.icones[estacao]
        //atualizar as variáveis de estado, fazendo com que a tela seja atualizada
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: estacao,
          data: data.toLocaleTimeString(),
          icone: icone
        })
      },
      (error) => {
        this.setState({
          mensagemDeErro: 'Tente novamente mais tarde'
        })
      }
    )
  }

  // componentDidMount(){
  //   this.obterLocalizacao()
  // }

  render(){
   return <div className="container mt-2">
    <div className="row justify-content-center">
      <div className="col-md-8">
        
        <div className="card">
          
          <div className="card-body">
            
            <div className="d-flex align-items-center" style={{height: '6rem'}}>
              <i className={`fa-solid fa-5x ${this.state.icone}`}></i>
              <p className='ms-3 fs-1 w-75 text-center'>{this.state.estacao}</p>
            </div>
            
            <div>
              <p className="text-center">
                {
                  this.state.latitude 
                  ?
                  `Latitude: ${this.state.latitude}, Longitude: ${this.state.longitude}` 
                  :
                  this.state.mensagemDeErro ?
                    `${this.state.mensagemDeErro}`
                  :
                  'Clique no botão para saber a sua estação climática'
                }
              </p>
            </div>
          
            
            <button 
              onClick={this.obterLocalizacao}
              className="btn btn-outline-primary w-100 mt-2">
                Qual a minha estação?
            </button>
          </div>
                
        </div>

      </div>
    </div>
   </div>
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)