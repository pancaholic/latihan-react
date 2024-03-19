import React, {Component} from 'react'

class Welcome extends Component{
    
    render() {
        // Destructuring
        const {name, roleName} = this.props
        // const {state1, state2} = this.state
        return <h1>Welcome {name} Yang Role nya {roleName}</h1>
    }
}

export default Welcome
