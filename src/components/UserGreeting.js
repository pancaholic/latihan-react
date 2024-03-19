import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {

    return (
        this.state.isLoggedIn ? (
        <h1>Welcome Panca</h1>
        ):(
            <h1>Welcome Guest</h1>
        )
    )
    // 1) Element variable approach
    // let message 
    // if(this.state.isLoggedIn){
    //     message = <h1>Welcome Panca</h1>
    // }else{
    //     message = <h1>Welcome Guest</h1>
    // }

    // return (
    //     <div>{message}</div>
    // )

    // if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //             <h1>Welcome Panca</h1>
    //         </div>
    //     )
    // }else {
    //     return (
    //         <div>
    //             <h1>Welcome Guest</h1>
    //         </div>
    //     )
    // }

    // return (
    //   <div>
    //     <div>Hello Panca</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
