import "./yhteys.css"
import  { useState } from 'react';
const Yhteys = () => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
          ...form,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Lähetetty viesti:\nNimi: ${form.name}\nSähköposti: ${form.email}\nPuhelinnumero: ${form.phone}\nViesti: ${form.message}`);
        setForm({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
      };
    

    return (
        <div className="yhteysContainer">
             <div className="infoContainer">
                <h1 className="heroOtsikko">Ota yhteyttä</h1>
                <p className="contactText"> <span className="red"> Jätä</span> yhteydenottopyyntö, niin suunnitellaan yhdessä juuri sinulle <span className="red">täydellinen</span> ratkaisu!</p>
                <img className="lentokone" src="./lentokone.svg" alt="lentokone" />
             </div>
            <div className="contactContainer"> 
            <form className="contactform" onSubmit={handleSubmit}>
        <div className="form-group">
          <input className="inputBox"
           placeholder="Nimi"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">

          <input className="inputBox"
            placeholder="Sähköposti"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          
          <input className="inputBox"
                      placeholder="Puhelinnumero"
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea  className="inputBox"
                    placeholder="Viesti"
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button className="formButton" type="submit">Lähetä</button>
      </form></div>

            
        </div>
    )
}

export default Yhteys