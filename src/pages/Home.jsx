import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Pages.css';

const Home =() => {
    return (
        <React.Fragment>
            <Header/>
            <div className="body">
                <h1>Welcome to Cow's page</h1>
                <p>Here you can learn a lot of interesting things about cows!</p>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Home;