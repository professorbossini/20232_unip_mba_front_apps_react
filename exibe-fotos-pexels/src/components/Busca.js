//rcc: react class component
import React, { Component } from 'react'
// import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
export default () => {

  state = {
    termoDeBusca: ''
  }
  onTermoAlterado = (event) => {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className='flex flex-column'>
        <span className="p-input-icon-left w-full">
          <i className="pi pi-search"></i>
          {/* <InputText 
            className='w-full'
            onChange={this.onTermoAlterado}
            placeholder={this.props.dica}
          /> */}
          <Button 
            label="Ok"
            className='p-button-outlined mt-2'
          />
        </span>
      </div>
    )
  }
}
