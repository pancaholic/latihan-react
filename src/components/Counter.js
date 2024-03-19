import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    increment() {
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)
        // this.setState({
        //     count: this.state.count + 1
        // }, () => console.log(`Increment Ke ${this.state.count}`)) 

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count);
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

  render() {
    // Destructuring
    const {state1} = this.state
    return (
        <div>
            <div>Count - {state1.count}</div>
            <button onClick={() => this.incrementFive()}>Increment</button>
        </div>
        
    )
  }
}

export default Counter
