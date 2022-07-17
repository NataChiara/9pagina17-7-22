import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Pages.css';

const Link =() => {
    return (
        <React.Fragment>
            <Header/>
            <div className="body">
                <h1>Food</h1>
                <p>Cows like to eat grass</p>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Link;