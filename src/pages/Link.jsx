import React, {useState, useContext} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Pages.css';
import ThemeContext from "../components/Context/ThemeContext";

const Link =() => {
    const [darkMode, setDarkMode] = useState(true);

    const Theme = useContext (ThemeContext);
    
    return (
        <React.Fragment>
            <Header/>
            <div className={darkMode? "main-dark" : "main-light"} style={{Theme}}>
                <button type="button" onClick={()=> {setDarkMode(!darkMode)}}>{darkMode? "Dark Mode ON" : "Light Mode ON"} </button>
                <br/><br/>
                <h1>Food</h1>
                <br/>
                <p>Cows like to eat grass</p>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Link;