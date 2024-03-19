import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

      this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Goodbye"
    //     })
    // }

    //  NEW APPROACH
    clickHandler = () => {
        this.setState({
            message: 'goodbye'
        })
    }

    
  render() {
    const message = this.state.message

    return (
      <div>
        <div>{message}</div>
        {/* <button onClick={() => this.clickHandler()}>Click Event</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click Event</button> */}
        <button onClick={this.clickHandler}>Click Event</button>
      </div>
    )
  }
}

export default EventBind
