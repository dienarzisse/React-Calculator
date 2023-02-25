import './styling/css/TopBar.css';


function TopBar({theme, setTheme}){

    // Event handlers
    const handleClick = () => {
        if(theme < 3)
            setTheme(theme + 1);
        else
            setTheme(1);
    }

    return(
        <div className={`TopBar TopBar${ theme }`}>
            <div className="Logo">
                calc
            </div>
            <div className="Theme">
                <span>theme</span>
                <div className="ThemeSwitch">
                    <ul className="Digits">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                    <div className="Switch" onClick={ handleClick }>
                        <div className={`Circle Circle${theme}`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;