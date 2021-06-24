import React from "react";
import{ HashRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Projects from "./pages/projects/Projects"
import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
      <Header />
      <Switch>
        <Route exact path={['/', '/home']} component={Home}></Route>
        <Route exact path={"/about"} component={About}></Route> 
		    <Route exact path={"/projects"} component={Projects}></Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
