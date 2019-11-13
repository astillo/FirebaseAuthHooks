import React from "react";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/login" component={Login} /> */}
      <Route exact path="/register" component={Register} />
      {/* <Route exact path="/dashboard" component={Dashboard} /> */}
    </Router>
  );
}

export default App;
