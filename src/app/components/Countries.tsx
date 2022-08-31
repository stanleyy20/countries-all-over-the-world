import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useFetch } from '../hooks/useFetch';
import { CountryItem } from './CountryItem';
import LoadingIndicator from './LoadingIndicator';

export const Countries = () => {
    const [countries, setCountries] = useState<any>([]);

    const { fetch: getCountries, isLoading } = useFetch((countries) => {
        setCountries(countries);
    });

    useEffect(() => {
        getCountries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <LoadingIndicator isLoading={isLoading} />
            <CountryItem countries={countries} />
        </Container>
    );
};

const Container = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.background_color};
    color: ${({ theme }) => theme.text_color};
`;
