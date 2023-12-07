import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import EstacaoClimatica from './EstacaoClimatica'
import Loading from './Loading'

class App extends React.Component{
  
  // constructor(props){
  //   super(props)
  //   // this.state = {
  //   //   latitude: null,
  //   //   longitude: null,
  //   //   estacao: null,
  //   //   data: null,
  //   //   icone: null,
  //   //   mensagemDeErro: null
  //   // }
  //   console.log('constructor')  
  // }

  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null
  }

  componentDidMount(){
    this.obterLocalizacao()
    console.log('componentDidMount')
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
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


  render(){
    console.log('render')
    return <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {
            this.state.mensagemDeErro ?
            <p className='border rounded p-2 fs-1 text-center'>
              É preciso dar permissão para acesso à localização. Atualize a página e tente de novo, ajustando a configuração do seu navegador.
            </p>
            :
            !this.state.latitude ?
            <Loading/>
            :
            <EstacaoClimatica 
              icone={this.state.icone}
              estacao={this.state.estacao}
              latitude={this.state.latitude}
              longitude={this.state.longitude}
              data={this.state.data}
              mensagemDeErro={this.state.mensagemDeErro}
              obterLocalizacao={this.obterLocalizacao}
            />
          }
        </div>
      </div>
    </div>
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)