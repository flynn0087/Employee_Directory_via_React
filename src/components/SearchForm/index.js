//dependencies needed
import React from "react";

//this function alllows for searching by employee name
function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Employee Search:</label>
        <input
          value={props.value}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by employee name"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
        <button onClick={props.refreshPage} className="btn btn-danger">
          Refresh
        </button>
      </div>
    </form>
  );
}

export default SearchForm;