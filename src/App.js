import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/From";
import { Routes, Route, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
class App extends Component {
  state = {};
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("acv");
    fetch(`https://api.github.com/users/{}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  render() {
    return (
      <>
        <div className='nav'>
          <Link className='textGit' to='/'>
            Github Finder
          </Link>
          <Link className='textHome' to='/'>
            Home
          </Link>
          <Link className='textAbout' to='/about'>
            About
          </Link>
        </div>
        <Routes>
          <Route
            path=''
            element={<SearchPage handleSubmit={this.handleSubmit} />}
          ></Route>
          {/* <Route path='/about' element={<Github/>}></Route> */}
        </Routes>
      </>
    );
  }
}

export default App;
