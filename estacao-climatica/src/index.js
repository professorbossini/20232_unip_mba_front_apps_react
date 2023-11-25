import 'bootstrap/dist/css/bootstrap.min.css'
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
      icone: null
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
      }
    )
  }

  componentDidMount(){
    this.obterLocalizacao()
  }

  render(){
    return <div>
      {this.state.latitude}
    </div>
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)