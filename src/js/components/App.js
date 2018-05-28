// src/js/components/App.js
import React from "react";
import List from "./List";
import Form from "./Form";

const App = () => (
	<div className="container">
		  <div className="row">
		    <div className="col-md-6 offset-md-1">
		    	<h2>Articles</h2>
		      	<List />
		    </div>
		    <div className="col-md-6 offset-md-1">
		      <h2>Add a new article</h2>
		      <Form />
		    </div>
		  </div>
	</div>
);
export default App;