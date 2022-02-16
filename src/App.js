import React, {Component} from 'react'
import './App.css'

class calc extends Component{

  state = {
    result: 0,
    num1: null,
    num2: null
  }

  handleChange = (ev) => {
    this.setState({
      num1: ev.target.value
    })
  }
  handleChange2 = (ev) => {
    this.setState({
      num2: ev.target.value
    })
  }

  minus = () => {
    let {num1,num2} = this.state
    this.setState({
      result: num1 - num2

    })
  }
  multiply = () => {
    let {num1,num2} = this.state
    this.setState({
      result: num1 * num2
    })
  }
  divide = () => {
    let {num1,num2} = this.state
    this.setState({
      result: num1 / num2 
    })
  }
  add = () => {
    let {num1,num2} = this.state
    this.setState({
      result: Number(num1) + Number(num2) 
    })
  }
  
  render(){
    return(
      <div className='container'>
        {console.log(this.state.num1, this.state.num2)}
        <h1>React Calc App</h1>
        <h2>{this.state.result}</h2>
        <div>
          <input onChange={this.handleChange} type='Number'/>
          <input onChange={this.handleChange2} type='Number'/>
        </div>
        <div>
        <button onClick={this.minus}>-</button>
          <button onClick={this.multiply}>*</button>
          <button onClick={this.divide}>/</button>
          <button onClick={this.add}>+</button>
        </div>
      </div>
    )
  }
}

export default calc