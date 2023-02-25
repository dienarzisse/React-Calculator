import './styling/css/Layout.css';

function Layout({ Theme, ScreenText, setScreenText }){

    function numberWithCommas(string) {
        string = string.split(",").join("");
        return string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // event handlers
    const handleDel = () =>{
        let len = ScreenText.length;
        let result = ScreenText.substring(0, len-1);
        setScreenText(numberWithCommas(result));
    }

    const handleDigit = (event) => {
        let dataValue = event.target.getAttribute('data-value');
        if(ScreenText === "0" && dataValue ==="0")
            return;
        // have to handle multiple 0s
        let result = `${ ScreenText }${ dataValue }`;
        setScreenText(numberWithCommas(result));
    }

    const handleSign = (event) => {
        let dataValue = event.target.getAttribute('data-value');
        let textWithoutCommas = ScreenText.split(",").join("");
        if(textWithoutCommas.length < 1)
            return;
        try{
            let evalText = eval(textWithoutCommas);
            let result = `${ evalText }${ dataValue }`;
            setScreenText(numberWithCommas(result));
        }
        catch(err){
            console.log(err);
        }  
    }

    const handlePoint = () => {
        let textWithoutCommas = ScreenText.split(",").join("");
        if(textWithoutCommas.length === 0)
            textWithoutCommas = "0";
        if("+-/*".includes(textWithoutCommas[textWithoutCommas.length - 1]))
            return;
        setScreenText(`${ ScreenText }.`)
    }

    const handleReset = () => {
        setScreenText("");
    }

    const handleEquals = () => {
        let textWithoutCommas = ScreenText.split(",").join("");
        let result = `${ eval(textWithoutCommas) }`;
        setScreenText(numberWithCommas(result));
    }

    return(
        <div className={`Layout Layout${ Theme }`}>
            <div className="row">
                <div onClick={ handleDigit } className={`number button button${ Theme }`} data-value="7">7</div>
                <div onClick={ handleDigit } className={`number button button${ Theme }`} data-value="8">8</div>
                <div onClick={ handleDigit } className={`number button button${ Theme }`} data-value="9">9</div>
                <div onClick={ handleDel } className={`del${ Theme } button button${ Theme }`}>DEL</div>
            </div>
            <div className="row">
                <div onClick={ handleDigit } className={`number button button${ Theme }`} data-value="4">4</div>
                <div onClick={ handleDigit } className={`number button button${ Theme }`} data-value="5">5</div>
                <div onClick={ handleDigit } className={`number button button${ Theme }`} data-value="6">6</div>
                <div onClick={ handleSign } className={`plus button button${ Theme }`} data-value="+">+</div>
            </div>
            <div className="row">
                <div onClick={ handleDigit } className={`number button button${ Theme }`} data-value="1">1</div>
                <div onClick={ handleDigit } className={`number button button${ Theme }`} data-value="2">2</div>
                <div onClick={ handleDigit } className={`number button button${ Theme }`} data-value="3">3</div>
                <div onClick={ handleSign } className={`minus button button${ Theme }`} data-value="-">-</div>
            </div>
            <div className="row">
                <div onClick={ handlePoint } className={`point button button${ Theme }`} data-value=".">.</div>
                <div onClick={ handleDigit } className={`number button button${ Theme }`} data-value="0">0</div>
                <div onClick={ handleSign } className={`division button button${ Theme }`} data-value="/">/</div>
                <div onClick={ handleSign } className={`multiplication button button${ Theme }`} data-value="*">x</div>
            </div>
            <div className="row">
                <div onClick={ handleReset } className={`reset${ Theme } button button${ Theme }`}>RESET</div>
                <div onClick={ handleEquals } className={`equals${ Theme } button button${ Theme }`}>=</div>
            </div>   
        </div>
    );
}

export default Layout;