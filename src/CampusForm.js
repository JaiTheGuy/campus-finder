import React from "react";
import './App.css';


function CampusForm (){
	return (
    
    <div>
      <div>
      <p><button>Add Campus</button></p>
      </div>
      <div>
     <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action active">
      <div class="d-flex w-100 justify-content-between">

      <h5 class="mb-1">Lehman College</h5>
    
      <img src="https://i.etsystatic.com/6765064/c/750/595/371/438/il/7b85c0/1708879776/il_340x270.1708879776_2cpq.jpg" alt="grad" width="200" height="20" class="img-thumbnail"/>
      </div>
      
      </a>
<button> Delete </button>
      <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">

      <h5 class="mb-1">Queens College</h5>
      
      </div>
    
      </a>
<button> Delete </button>
      <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">

      <h5 class="mb-1">Hunter College</h5>
    
      </div>
      
      </a>
      <button> Delete </button>
      </div>

      </div>    
      
	
	<form class="form-inline">
  	<div class="form-group mb-2">
  	

    <label for="Student Name" class="sr-only">CampusForm</label>

    <input type="text" readonly class="form-control-plaintext" id="text" value="Campus Name"/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="text" class="sr-only">name</label>
    <input type="text" class="form-control" id="text" placeholder="Name"/>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Add Campus </button>
</form>
	</div>

		)
}

export default CampusForm