//DEPENDENCIES
import React, { Component } from "react";
import Container from "./components/Container";
import Col from "./components/Col";
import SearchForm from "./components/SearchForm";
import EmployeeCard from "./components/EmployeeCard";
import API from "./utils/API";
import "./App.css";


// this section sets the state
class App extends Component {
  state = { 
    employees: [], 
    search: "",
    sortOrder: "ASC" 
  };

  //this section allows the sorting via first name
  sortFirstName() {
    const sortedFirst = this.state.employees.sort(this.compareFirst);
    this.setState({ employees: sortedFirst });
    const orderFirst = this.state.sortOrder ? "ASC" : "DESC";
    this.setState({ sortOrder: orderFirst })
  };

  compareFirst(a, b) {
    if (a.firstName > b.firstName) return 1;
    if (b.firstName > a.firstName) return -1;
    return 0;
  };

  //this section allows sorting via last name
  sortLastName() {
    const sortedLast = this.state.employees.sort(this.compareLast);
    this.setState({ employees: sortedLast });
    const orderLast = this.state.sortOrder ? "ASC" : "DESC";
    this.setState({ sortOrder: orderLast })
  };

  compareLast(a, b) {
    if (a.lastName > b.lastName) return 1;
    if (b.lastName > a.lastName) return -1;
    return 0;
  };

  //this section allows for sorting via email
  sortEmail() {
    const sortedEmail = this.state.employees.sort(this.compareEmail);
    this.setState({ employees: sortedEmail });
    const orderEmail = this.state.sortOrder ? "ASC" : "DESC";
    this.setState({ sortOrder: orderEmail })
  };

  compareEmail(a, b) {
    if (a.email > b.email) return 1;
    if (b.email > a.email) return -1;
    return 0;
  };

  //get the data for the employees via the API
  componentDidMount() {
    API.search().then((res) => {
      console.log(res);
      this.setState({
        employees: res.data.results.map((employee, i) => ({
          firstName: employee.name.first,
          lastName: employee.name.last,
          picture: employee.picture.large,
          email: employee.email,
          phone: employee.phone,
          city: employee.location.city,
          key: i,
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
    console.log("Search by name:", filter);
    const filterEmployees = this.state.employees.filter((employee) => {
      let values = Object.values(employee).join("").toLocaleLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ employees: filterEmployees });
  };

  //this is an event handler for input changing
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  //this is an event handler for form submissions
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchName(this.state.search)
  };


  //this section renders the page using the various props to populate information
  render() {
    return (
      <Container>
          <div className = "row">
            <Col size = "md-3">
            </Col>
            <Col size = "md-6">
              <h2>Employee Directory</h2>
              <SearchForm
              value = {this.state.search}
              handleInputChange = {this.handleInputChange}
              handleFormSubmit = {this.handleFormSubmit}
              />
            </Col>
            <Col size = "md-3">
            </Col>
          </div>

          <div className = "row">
            <Col size = "md-12">
              <table className = "table">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th onClick={() => { this.sortFirstName() }}>First Name</th>
                    <th onClick={() => { this.sortLastName() }}>Last Name</th>
                    <th onClick={() => { this.sortEmail() }}>Email</th>
                    <th>Phone</th>
                    <th>City</th>
                  </tr>
                </thead>
                {[...this.state.employees].map((item) => (
                  <EmployeeCard
                  picture = {item.picture}
                  firstName = {item.firstName}
                  lastName = {item.lastName}
                  email = {item.email}
                  phone = {item.phone}
                  city = {item.city}
                  key = {item.key}
                  />
                ))}
              </table>
            </Col>
          </div>   
    </Container>
    );
  };
};

export default App;