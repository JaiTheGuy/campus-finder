
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import StudentForm from "./StudentForm"
import ShowStudent from'./ShowStudent'
import CampusForm from'./CampusForm'
import Notfound from './Notfound'
import './App.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'



const routing = (
   <Router>
     <div>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
 <form class="form-inline">
    <ul>
         <li>
         <button class="btn btn-light" type="button"><Link to="/">Home</Link></button>
         </li>
         <li>
         <button class="btn btn-light" type="button"><Link to='/CampusForm'>Campuses</Link></button>
         </li>
         <li>
         <button class="btn btn-light" type="button"><Link  to='/ShowStudent'>Students</Link></button>
         </li>
       </ul>
</form>
</nav>

       <Switch>
         <Route exact path="/" component={App} />
         <Route path="/ShowStudent" component={ShowStudent} />
         <Route path="/CampusForm" component={CampusForm} />

         <Route component={Notfound} />
       </Switch>
     </div>
   </Router>
 )
 export default routing;


//
// class App extends React.Component{
//   render() {
//     return (
//       <div className="App">
//                 <h1>New Student Form</h1>
//                 <StudentForm />
//                 <ShowStudent />
//                 <CampusForm />
      
     

