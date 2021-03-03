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

  
}

export default App;
