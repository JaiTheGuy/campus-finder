import React from "react"
import './App.css';


function CampusForm (){
	return (
		<div>
	<form class="form-inline">
  	<div class="form-group mb-2">
  	

    <label for="Student Name" class="sr-only">CampusForm</label>

    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Campus Name"/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Name"/>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Add Campus </button>
</form>
		</div>


		)
}

export default CampusForm