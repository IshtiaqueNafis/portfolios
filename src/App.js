import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";
import Certificate from "./components/certificate/Certificate";
import Resume from "./components/Resume/Resume";

function App() {
    const [load, upadateLoad] = useState(true);


    return (
        <Router>

            <div className="App" id={load ? "scroll" : "no-scroll"}>
                <Navbar/>
                <ScrollToTop/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/project" component={Projects}/>
                    <Route path="/about" component={About}/>
                    <Route path="/certificates" component={Certificate}/>
                    <Route path="/resume" component={Resume}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
