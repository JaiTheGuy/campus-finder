
import React from 'react';
import logo from './logo.svg';
import StudentForm from "./navbar"
import ShowStudent from'./ShowStudent'
import CampusForm from'./CampusForm'
import './App.css';


class App extends React.Component{
  render() {
    return (
      <div className="App">
                <h1>New Student Form</h1>
                <StudentForm />
                <ShowStudent />
                <CampusForm />
      <div className="App-header">
      <h1>Campus Listing</h1>
      </div>
      <div>
      <h2>Home</h2>
      <h2>Campuses</h2>
      <h2>Students</h2>

      <p><button>Add Campus</button></p>
      </div>



      <div>
      <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action active">
      <div class="d-flex w-100 justify-content-between">

      <h5 class="mb-1">Lehman College</h5>
      <small>3 days ago</small>
      <img src="https://i.etsystatic.com/6765064/c/750/595/371/438/il/7b85c0/1708879776/il_340x270.1708879776_2cpq.jpg" alt="grad" class="img-thumbnail"/>
      </div>
      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small>Donec id elit non mi porta.</small>
      </a>
<button> Delete </button>
      <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">

      <h5 class="mb-1">Queens College</h5>
      <small class="text-muted">3 days ago</small>
      </div>
      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
<button> Delete </button>
      <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">

      <h5 class="mb-1">Hunter College</h5>
      <small class="text-muted">3 days ago</small>
      </div>
      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small class="text-muted">Donec id elit non mi porta.</small>
      </a>
      <button> Delete </button>
      </div>

      </div>    
      </div>
      );

    }
  }

  export default App;

