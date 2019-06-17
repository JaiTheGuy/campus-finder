import React from "react";
import './App.css';


function CampusForm (){
	return (
    
    <div>
      <div>
        <h1>Campus Finder</h1>
      <p><button>Add Campus</button></p>
      </div>
      <div>
     <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action active">
      <div class="d-flex w-100 justify-content-between">

      <h2 class="mb-1">Lehman College</h2>
      
     
      <img src="https://i.etsystatic.com/6765064/c/750/595/371/438/il/7b85c0/1708879776/il_340x270.1708879776_2cpq.jpg" alt="grad" width="250" height="100" class="img-thumbnail"/>
      <p>Lehman College is a senior college of the City University of New York in New York, United States. Founded in 1931 as the Bronx campus of Hunter College, the school became an independent college within CUNY in September 1967.</p>
      </div>
      
      </a>
<button> Delete </button>
      <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">

      <h5 class="mb-1">Queens College</h5>
      <img src="https://specials-images.forbesimg.com/imageserve/55ae8644e4b05c2c343212e5/300x300.jpg?fit=scale&background=000000" alt="grad" width="250" height="100" class="img-thumbnail"/>
      <p>Queens College is one of the four-year colleges in the City University of New York system. Its 80-acre campus is located in the Kew Gardens Hills subsection of Flushing, Queens, with a student body that represents over 170 countries</p>
      </div>
    
      </a>
<button> Delete </button>
      <a href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">

      <h5 class="mb-1">Hunter College</h5>
      <img src="data:image/jpeg;base64,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" alt="grad" width="250" height="100" class="img-thumbnail"/>
      <p>Hunter College is one of the constituent colleges of the City University of New York, an American public university. It is located in the Lenox Hill neighborhood of the Upper East Side of Manhattan, New York City.</p>
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
  <div class="form-group mx-sm-3 mb-2">
    <label for="text" class="sr-only">image</label>
    <input type="text" class="form-control" id="text" placeholder="Image URL"/>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Add Campus </button>
</form>
	</div>

		)
}

export default CampusForm