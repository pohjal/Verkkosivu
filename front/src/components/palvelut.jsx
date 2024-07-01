import "./palvelut.css"

const HugeBox = ({text}) => {
    return (
        <div className="hugeBox">
      <div className="circle"></div>
      <p>{text} </p>
        </div>
    )
    }
    

const BigBox = ({text}) => {
    return (
        <div className="bigBox">
      <div className="circle"></div>
      <p>{text} </p>
        </div>
    )
    }
    

const SmallBox = ({text}) => {
return (
    <div className="smallBox">
        <div className="circle"></div>
        <p>{text} </p>
    </div>
)
}

const Palvelut = () => {
return (

<div className="palvelutSection">
    <div className="headerContainer">
   <h1 className="heroOtsikko">Palvelut</h1>
   </div>
<div className="palvelutContainer">
    <SmallBox text={"Teknologia konsultointipalvelut"}/>
    <SmallBox text={"SEO optimointi ja ylläpito"}/>
    <BigBox     text={"Verkkosivujen  sekä verkkokauppojen suunnittelu ja luominen "} />


    </div>
    <div className="palvelutContainer"> 
    <HugeBox text={"Jokainen projekti on uniikki joten myös hintakin - Neuvotellaan yhdessä hinta johon molemmat osapuolet ovat tyytyväisiä"}/>
     </div>
    </div>
)

}


export default Palvelut