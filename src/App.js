import React, { Component } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar';
import { Products } from './views/Products';


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
        <Navbar />
        <Router>
            <h1>{this.props.name}, {pep_talk}</h1>
          <Route exact path='/products'>
            <Products />
          </Route>
        </Router>
      </div>
    )
  }
}

