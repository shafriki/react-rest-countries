import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    return (
        <div>
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
            </div>
            <div className='country-container'>
                {countries.map((country) => (
                    <Country 
                        key={country.cca3}
                        handleVisitedCountries={handleVisitedCountries} 
                        country={country} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Countries;
