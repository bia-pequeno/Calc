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
      num1: Number(ev.target.value) 
    })
  }
  handleChange2 = (ev) => {
    this.setState({
      num2: Number(ev.target.value)
    })
  }

  minus = () => {
    let {num1,num2} = this.state
    if(num1 && num2 !== null){
      this.setState({
        result: num1 - num2
      })
    }else{
      this.setState({
        result: "Nenhum valor foi digitado"
      })
    }
  }
  multiply = () => {
    let {num1,num2} = this.state
    if(num1 && num2 !== null){
      this.setState({
        result: num1 * num2
      })
    }else{
      this.setState({
        result: "Nenhum valor foi digitado"
      })
    }
  }
  divide = () => {
    let {num1,num2} = this.state
    if(num1 && num2 !== null){
      this.setState({
        result: num1 / num2
      })
    }else{
      this.setState({
        result: "Nenhum valor foi digitado"
      })
    }
  }
  add = () => {
    let {num1,num2} = this.state
    if(num1 && num2 !== null){
      this.setState({
        result: num1 + num2
      })
    }else{
      this.setState({
        result: "Nenhum valor foi digitado"
      })
    }
  }
  clear = ()=>{
    let {num1, num2} = this.state
    if(num1 && num2 !== " "){
      this.setState({
        result: null,
        num1: 0,
        num2: 0
      })
    }else{
      this.setState({
        result: "Nenhum valor foi digitado"
      })
    }
  }
  
  render(){
    let {minus, add, divide, multiply, clear, handleChange, handleChange2} = this
    let {num1, num2, result,} = this.state
    return(
      <div className='container'>
        <h1>React Calc App</h1>
        <h2>{result}</h2>
        <div>
          <input onChange={handleChange} type='Number' value={num1}/>
          <input onChange={handleChange2} type='Number' value={num2}/>
        </div>
        <div>
        <button onClick={minus}>-</button>
          <button onClick={multiply}>*</button>
          <button onClick={divide}>/</button>
          <button onClick={add}>+</button>
          <button onClick={clear}>Clear</button>
        </div>
      </div>
    )
  }
}

export default calc