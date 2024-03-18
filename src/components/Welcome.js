import React, {Component} from 'react'

class Welcome extends Component{
    render() {
        return <h1>Welcome {this.props.name} Yang Role nya {this.props.roleName}</h1>
    }
}

export default Welcome
