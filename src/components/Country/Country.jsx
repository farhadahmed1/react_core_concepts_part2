
import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry}) => {
    //console.log(country);
    const {name,flags,area ,cca3 ,population} = country;

   const [visited , setVisited] = useState(false);

   
   //console.log(handleVisitedCountry);

    return (
            <div className={`country ${visited ? 'visited-color': 'non-visited'}`}>
            <h3>{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population :{population}</p>
            <p>Area :{area}</p>
            <p>Code : {cca3}</p>
            <button onClick={()=> handleVisitedCountry(country)}> Mark Visited </button>
            <br/>
            <button onClick={()=>setVisited(!visited)}>{visited? 'Visite':'Going'}</button>
        </div>
    );
};

export default Country;