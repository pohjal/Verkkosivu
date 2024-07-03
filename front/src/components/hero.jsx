import logo from './logop.png'; 

import "./hero.css";


const NavItem = ({itemName, section}) => {
    return (
        <div className='navItem'>
             <a href={section}  >{itemName}</a>
       
        </div>
        )
}

const Contact = () => {
    return(
        // <div  className='contact' > Ota Yhteyttä</div>
        // <div href="#palvelut" className='contact' > Ota Yhteyttä</div>
        <a href="#yhteys" className='contact' >Ota Yhteyttä</a>
    )
}

const ContactButton = () => {
    return(
       
        <a href="#yhteys" className='contactButton' >Ota Yhteyttä</a>
    )
}

const Nav = () => {
    return (
        <div className='navContainer'>
        <NavItem itemName="PALVELUT" section={"#palvelut"}/>
        <NavItem itemName="TIETOA"section={"#tietoa"}/>
        <NavItem itemName="BLOG" />
        </div>)
}



const Logo = () => {
    return (
        <div className='logoContainer'>
        <img id='logo' src={logo} alt="logo" /> 
        <p className="logo">Verkkosivut.fi</p> 
        </div>)
}


const Header = () => {
    return(
        <div className="headerContainer">
       <Logo/>
       <Nav/>
       <Contact/>
       </div>
    )
}

const Content = () => {
return <div className='heroContent' >
 <h1 className='heroOtsikko'>Verkkosivut helposti ja nopeasti</h1>
 <h2 className='leipateksti'>Me suunnittelemme, toteutamme ja ylläpidämme sivut  puolestasi, jotta voit keskittyä olennaiseen.</h2>
 <ContactButton/>
 </div>
}

const Hero = () => {
    return (

    <><Header/>
    <Content/>
    </>

    )
  }
  
  export default Hero
  