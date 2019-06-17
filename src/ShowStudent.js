import React from "react"
import './App.css';
import {Link} from 'react-router-dom';


function ShowStudent (){
	return (
		<div>
<h1>Student Name</h1>
<div class="submit">
	<div class="submit">
		<br></br>
		
	<div>
      <p><button>Add Student</button ></p>

      </div>
	  <br></br>
	
	
	</div>
<input
				type="text"
		
				placeholder="Name"
				
                
                  />
				  <input
				type="text"
		
				placeholder="Emplid ID"
				
                
                  />
				  <input
				type="text"
		
				placeholder="GPA"
				
                
                  />
				  <br>
				  </br>
				  <br></br>
	
  <img src="https://theimag.org/wp-content/uploads/2015/01/user-icon-png-person-user-profile-icon-20.png" alt="Student" width="150" height="150" class="img-thumbnail"/>
</div>
</div>

)}

export default ShowStudent;

