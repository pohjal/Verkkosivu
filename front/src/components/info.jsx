import "./info.css"


const InfoBox = ({otsikko, teksti}) => {
    return <div className="infoBox">
            <div className="circle"></div>
            <h2 className="boxHeader" >{otsikko}</h2>
            <p>{teksti}</p>
    </div>
}

const Info = () => {
    return (
        <div id="tietoa" className="infoSection">
        <div className="infoLeft" >
            <h1 className="infoHeader" >MEIDÄN TIIMI JA TAVOITTEEMME</h1>
           <img className="tiimi" src="./team.svg" alt="team" /> 
        </div>
        <div className="infoRight" >
        <InfoBox otsikko={"TIIMI"} teksti={"Olemme valmistuneet Jyväskylän yliopistosta tietojärjestelmätieteen opintolinjalta. Opinnoissamme olemme keskittyneet liiketoiminnan ja palveluiden kehittämiseen sekä ohjelmointiin ja UI/UX-suunnitteluun."}/>
        <InfoBox otsikko={"MISSIO"} teksti={"Haluamme auttaa suomalaisia pk-yrityksiä parantamaan digitaalista läsnäoloaan, lisäämään näkyvyyttään ja kasvattamaan liiketoimintaansa."}/>
    
        </div>

        </div>
    )
}

export default Info