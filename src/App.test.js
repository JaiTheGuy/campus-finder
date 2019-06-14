import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    render() {
        return (
            <form>
                <input type="text" placeholder="First Name" />
            </form>
        )
    }
}

export default App