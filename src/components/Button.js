import React, { Component } from 'react'

// When the page is refreshed the component is constructed again? 

export default class Button extends Component {
    render() {
        return (
// 1. He said something about references which is why we switched the onClick to an arrow function.
// 2. this.props.incrementCount is the property on the button (set within the green component buttons in app.js).
// 3. incrementCount(this.props.step) refers to the step property number for each button (set inside the green jsx buttons in app.js). 
//    that gets passed into the handleclick function because incrementCount=handleclick...(this.props.step) is the step paramater in handleclick(step).
// 4. +{this.props.step} is just for visual purposes on the button, also refers to the step property number for each button.
                                                    
            <div>                                   
                <button className='btn btn-primary' onClick={() => this.props.incrementCount(this.props.step)}>+{this.props.step}</button>
            </div>
        )
    }
}
