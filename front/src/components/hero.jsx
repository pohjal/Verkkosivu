import logo from './logop.png'; 

import "./hero.css";


const NavItem = ({itemName}) => {
    return (
        <div className='navItem'>
            <p >{itemName}</p>
        </div>
        )
}

const Contact = () => {
    return(
        <div className='contact' >Ota Yhteyttä</div>
    )
}

const ContactButton = () => {
    return(
        <div className='contactButton' >Ota Yhteyttä</div>
    )
}

const Nav = () => {
    return (
        <div className='navContainer'>
        <NavItem itemName="PALVELUT"/>
        <NavItem itemName="TIETOA"/>
        <NavItem itemName="BLOG"/>
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
  