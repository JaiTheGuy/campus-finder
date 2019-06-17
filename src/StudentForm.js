import React from "react"
import './App.css';
import {Link} from 'react-router-dom';

function StudentForm (){
	return (
		<div>
	<form class="form-inline">
  	<div class="form-group mb-2">
  	

    <label for="Student Name" class="sr-only">StudentForm</label>

    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Student Name"/>
  </div>
  <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Password</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Name"/>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Add Student </button>
</form>
		</div>


		)
}

export default StudentForm;