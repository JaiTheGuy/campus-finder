import React from "react"
import './App.css';
import {Link} from 'react-router-dom';

function CampForm (){
    return (
        <div>
    <form class="form-inline">
     <div class="form-group mb-2">
     
        <h1>Campus Finder</h1>
   <label for="Campus Name" class="sr-only">CampForm</label>

   <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Campus Name"/>
 </div>
 <div class="form-group mx-sm-3 mb-2">
   <label for="text" class="sr-only">Name</label>
   <input type="text" class="form-control" id="text" placeholder="Name"/>
 </div>
 <button type="submit" class="btn btn-primary mb-2">Add Campus </button>
</form>
        </div>


        )
}

export default CampForm;