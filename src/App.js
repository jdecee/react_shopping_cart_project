import React, { Component } from 'react'
import Button from './components/Button'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count : 0
    }
  }

  // **The setState method (which is a built-in react method) forces the render function the render again**

  handleclick = (step) => {
    let newCount = this.state.count + step
    this.setState({
        count: newCount
    })
}


  render() {
    const pep_talk = "UNDER ANY CIRCUMSTANCES DON'T GIVE UP!"
    return (
        <div className='container'>
        <h1>{this.props.name}, {pep_talk}</h1>
        <Button step={1} incrementCount={this.handleclick} />
        <Button step={5} incrementCount={this.handleclick} />
        <Button step={10} incrementCount={this.handleclick} />
        <Button step={25} incrementCount={this.handleclick} />
        <Button step={100} incrementCount={this.handleclick} />
        <h6>Count is at {this.state.count}</h6>
        {/* Now that the state is at the App.js level, the count can be totaled for all the buttons not just one button individually. */}
      </div>
    )
  }
}

