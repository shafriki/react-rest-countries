import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries }) => {
    const { name, flags, population, area, region } = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(true);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 className='header'>Name: {name?.common} </h3>
            <img src={flags.png} alt="" />
            <div className='info'>
                <p>Population: {population}</p>
                <p>Area: {area}</p>
                <p>Region: {region}</p>
                <button className='btn-m' onClick={() => {
                    handleVisitedCountries(country);  // This will add to the visited list
                    handleVisited();  // Mark as visited locally
                }}>Mark As Visited</button>
                {visited && <p>I have visited this country</p>}
            </div>
        </div>
    );
};

export default Country;
