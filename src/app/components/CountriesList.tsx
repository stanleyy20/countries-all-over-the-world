import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFetch } from '../hooks/useFetch';
import { apiData } from '../types/apiData';

import { CountriesListItem } from './CountriesListItem';
import { FilteredRegion } from './FilteredRegion';
import LoadingIndicator from './LoadingIndicator';
import { RefreshButton } from './RefreshButton';
import { SearchCountry } from './SearchCountry';

export const CountriesList: React.FunctionComponent = () => {
    const [countries, setCountries] = useState<Array<apiData>>([]);

    const {
        fetch: getCountries,
        isLoading,
        isError,
    } = useFetch((countries) => {
        setCountries(countries);
    });

    useEffect(() => {
        getCountries('all');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            {isError ? (
                <RefreshButton refresh={getCountries} endpoint='all' />
            ) : (
                <>
                    <LoadingIndicator isLoading={isLoading} />
                    <Form>
                        <SearchCountry setCountries={setCountries} />
                        <FilteredRegion setCountries={setCountries} />
                    </Form>
                    <CountriesListItem countries={countries} />
                </>
            )}
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
