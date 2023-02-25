import TopBar from "./TopBar";
import Screen from "./Screen";
import Layout from "./Layout";
import { useState } from 'react';
import './styling/css/Calculator.css';

function Calculator(){

    // variables
    const [theme, setTheme] = useState(3);
    const [screenText, setScreenText] = useState("");

    return(
        <div className={`Calculator Calculator${ theme }`}>
            <TopBar theme={ theme } setTheme={ setTheme }/>
            <Screen Theme={ theme } ScreenText={ screenText }/>
            <Layout Theme={ theme } ScreenText={ screenText } setScreenText={ setScreenText }/>
        </div>
    );
}

export default Calculator;