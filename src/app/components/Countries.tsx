import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFetch } from '../hooks/useFetch';
import { apiData } from '../types/apiData';

import { CountryItem } from './CountryItem';
import { FilteredRegion } from './FilteredRegion';
import LoadingIndicator from './LoadingIndicator';
import { SearchCountry } from './SearchCountry';

export const Countries: React.FunctionComponent = () => {
    const [countries, setCountries] = useState<Array<apiData>>([]);

    const { fetch: getCountries, isLoading } = useFetch((countries) => {
        setCountries(countries);
    });

    useEffect(() => {
        getCountries('all');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Form>
                <SearchCountry setCountries={setCountries} />
                <FilteredRegion setCountries={setCountries} />
            </Form>
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

const Form = styled.form`
    width: 85%;
    margin: 0 auto;
    padding-top: 40px;

    @media (min-width: ${({ theme }) => theme.media.md}) {
        display: flex;
        justify-content: space-between;
        padding-left: 12px;
        padding-right: 12px;
    }

    @media (min-width: ${({ theme }) => theme.media.xl}) {
        padding-left: 6px;
        padding-right: 6px;
    }
`;
