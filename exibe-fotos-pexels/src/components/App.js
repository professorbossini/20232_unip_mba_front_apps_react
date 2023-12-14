import React from 'react'
import Busca from './Busca'
import { createClient } from 'pexels'
export default class App extends React.Component {
  
  state = {
    pics: []
  }

  pexelsClient = null

  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos.search({
      query: termo
    })
    .then(pics => {
      console.log(pics)
      this.setState({pics: pics.photos})
    })
  }

  componentDidMount(){
    this.pexelsClient = createClient('563492ad6f91700001000001e00b21ab6afb45a18c1d44a759556f14')
  }

  render(){
      return (
        <div className='grid justify-content-center border-round border-1 border-400 w-9 m-auto p-3'>
          <div className="col-12">
            <h1>Exibir uma lista de...</h1>
          </div>
          <div className="col-8">
            <Busca 
              onBuscaRealizada={this.onBuscaRealizada}
            />
          </div>
          <div className="col-8">
            {
              this.state.pics.map((pic) => (
                <div>
                  <img src={pic.src.small} alt={pic.alt} />
                </div>
              ))
            }
          </div>
        </div>
      )
  }
}

// export default App