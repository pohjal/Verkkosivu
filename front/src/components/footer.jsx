import "./footer.css"
import logo from './logop.png'; 


const Logo = () => {
    return (
        <div className='logoContainerFooter'>
        <img id='logoFooter' src={logo} alt="logo" /> 
        <p className="logo">Verkkosivut.fi</p> 
        </div>)
}

const Footer = () => {
return (
    <div className="footerSection">
        <div className="footerContainer">
            <div className="topContainer">
                <div className="logoEmail">
                    <Logo/>
                    <p>Info@verkkosivut.fi</p>
                    </div>
                <div className="links">
                <a href="/">Etusivu</a>
                <a href="#palvelut">Palvelut</a>
                <a href="#tietoa">Tietoa</a>
                <a href="#yhteys">Ota Yhteyttä</a>

                </div>
                <div className="contacts">
                    <p className="bottomText" > <span className="red" > Jätä</span> yhteydenottopyyntö, niin suunnitellaan yhdessä juuri sinulle <span className="red" > täydellinen</span> ratkaisu!</p>
                    <a href="#yhteys" id="footerButton" className='contact' >Ota Yhteyttä</a>
                </div>
            </div>
            <div className="bottomContainer">
            <a href="">©2024 verkkosivut.fi</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Cookie Policy</a>
            </div>
        </div>

    </div>
)
}

export default Footer