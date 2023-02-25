import './styling/css/Screen.css';

function Screen({ ScreenText, Theme }){
    return(
        <div className={`Screen Screen${ Theme }`}>
            <span>{ ScreenText }</span>
        </div>
    );
}

export default Screen; 