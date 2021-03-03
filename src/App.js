//dependencies 
import React, { Component } from "react";
import Col from "./components/Col";
import Container from "./components/Container";
import EmployeeCard from "./components/EmployeeCard";
import SearchForm from "./components/SearchForm";
import API from "./utils/API";
import './App.css';

// this section sets the state
class App extends Component {
   state = { employees: [], search: "" };

  //get the data for the employees via the API
  componentDidMount() {
    API.search().then((res) => {
      this.setState({
        employees: res.data.results.map((employee, k) => ({
          picture: employee.picture.large,
          firstName: employee.name.first,
          lastName: employee.name.last,
          email: employee.email,
          phone: employee.phone,
          city: employee.location.city,
          key: k,
        })),
      });
    })
    .catch((err) => console.log(err));
  };

  refreshPage() {
    window.location.reload(false);
  };

  //this is the function for searching by name
  searchName = (filter) => {
    let filterEmployees = this.state.employees.filter((employee) => {
      let lowercase = Object.lowercase(employee).join("").toLowerCase();
      return lowercase.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ employees: filterEmployees});
  };

  //this is an event handler for input changing
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchName(this.state.search)
  };

}

export default App;
