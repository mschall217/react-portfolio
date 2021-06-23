import React from "react";
import{ BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
