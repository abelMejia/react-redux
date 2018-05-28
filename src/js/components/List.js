// src/js/components/List.js
import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
  <ul className="list-group list-group-flush">
    {articles.map(el => (
      <div className="row" key={el.id}>
      	<hr />
        <div className="col-md-12">
	          <div className="timeline-panel">
	            <h1>{el.title}</h1>
			    <p>{el.text}</p>
			    <div>
				<span className="badge">Posted 2012-08-02 20:47:04</span><div className="pull-right"><span className="label label-default">alice</span> <span className="label label-primary">story</span> <span className="label label-success">blog</span> <span className="label label-info">personal</span> <span className="label label-warning">Warning</span>
				<span className="label label-danger">Danger</span></div>         
			     </div>

	          </div>
        </div>
      </div>
    ))}
  </ul>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;