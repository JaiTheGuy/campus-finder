import React, {Component} from "react"
import './App.css';
import StudentForm from "./navbar"
import ShowStudent from'./ShowStudent'
import CampusForm from'./CampusForm'


class App extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    render() {
        return (
            <div>
                <h1>New Student Form</h1>
                <StudentForm />
                <ShowStudent />
                <CampusForm />


               
            </div>
            

        )
    }
}

export default App
