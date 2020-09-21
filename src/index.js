import React from 'react';
import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};
 
const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
ReactDOM.render(
  <Router>
  <Route path='/' component={home}/>
  </Router>
  document.getElementById('root')
);
