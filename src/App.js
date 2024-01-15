import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";
import Certificate from "./components/certificate/Certificate";
import Resume from "./components/Resume/Resume";

function App() {
    const [load, upadateLoad] = useState(true);


    return (

        <div className="App" id={load ? "scroll" : "no-scroll"}>
            <Navbar/>

            <Home/>
            <Footer/>
        </div>

    );
}

export default App;
