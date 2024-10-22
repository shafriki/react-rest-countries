import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    const {name, flags, population, area, region} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(true);
    }
    
    return (
        
        <div className={`country ${visited && 'visited'}`}>
            <h3 className='header'>Name: {name?.common} </h3>
            <img src={flags.png} alt="" />
            <div className='info'>
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p>Region: {region} </p>
            <button onClick={handleVisited}>Visited</button>
            {visited && ' I have visited this country'}
            </div>
        </div>
    );
};

export default Country;