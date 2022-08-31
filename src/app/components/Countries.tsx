// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useFetch } from '../hooks/useFetch';

export const Countries = () => {
    const [countries, setCountries] = useState<Array<string>>([]);

    const { fetch: getCountries } = useFetch((countries) => {
        setCountries(countries);
    });

    useEffect(() => {
        getCountries();
    }, [getCountries]);

    return <Container></Container>;
};

const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.background_color};
    color: ${({ theme }) => theme.text_color};
`;

// border_countries: country.borders,
//                             capital: country.capital,
//                             currencies: country.currencies,
//                             domain: country.tld,
//                             flag: country.flags.png,
//                             lang: country.languages,
//                             name: country.name.common,
//                             native_name: country.name.nativeName,
//                             population: country.population,
//                             region: country.region,
//                             sub_region: country.subregion,
//                             error: isError,
