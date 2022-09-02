import { useNavigate, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import LoadingIndicator from './LoadingIndicator';
import { BorderCountries } from './BorderCountries';
import { apiData } from '../types/apiData';

export const CountryDetails: React.FunctionComponent = () => {
    const [country, setCountry] = useState<Array<apiData>>([]);
    const navigate = useNavigate();
    const { countryCode } = useParams();

    const { fetch: getCountry, isLoading } = useFetch((country) => {
        setCountry(country);
    });

    useEffect(() => {
        getCountry(`alpha/${countryCode}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryCode]);

    const forwardPage = () => {
        navigate('/');
    };

    const NATIVE_NAME: string =
        country[0]?.name.nativeName[Object.keys(country[0]?.name.nativeName)[0]].official;

    const NAME = country[0]?.name.common;
    const FLAG_SRC = country[0]?.flags.png;
    const POPULATION = Intl.NumberFormat().format(Number(country[0]?.population));
    const REGION = country[0]?.region;
    const SUB_REGION = country[0]?.subregion;
    const DOMAIN = country[0]?.tld && country[0]?.tld.map((domain: any) => domain).join(' ');
    const CURRENCIES =
        country[0]?.currencies &&
        Object.values(country[0]?.currencies).map((currency: any) => (
            <Text key={currency.name}>Currencies: {currency.name}</Text>
        ));
    const LANG = country[0]?.languages && Object.values(country[0]?.languages).join(', ');
    const CAPITAL = country[0]?.capital;

    return (
        <Container>
            <Wrapper>
                <LoadingIndicator isLoading={isLoading} />
                <BackButton onClick={forwardPage}>
                    {' '}
                    <FontAwesomeIcon icon={faArrowLeftLong} size='lg' /> Back
                </BackButton>
                <CountryDetailsBody>
                    <CountryFlag src={FLAG_SRC}></CountryFlag>
                    <CountryInfo>
                        <Title>{NAME}</Title>
                        <TextContainer>
                            {' '}
                            <Text>Native Name: {NATIVE_NAME} </Text>
                            <Text>Population: {POPULATION}</Text>
                            <Text>Region: {REGION} </Text>
                            <Text>Sub Region: {SUB_REGION}</Text>
                            <Text style={{ marginBottom: '20px' }}>Capital: {CAPITAL}</Text>
                        </TextContainer>
                        <TextContainer>
                            <Text>Top Level Domain: {DOMAIN}</Text>
                            {CURRENCIES}
                            <Text>Languages: {LANG}</Text>
                        </TextContainer>

                        <BorderCountries country={country} />
                    </CountryInfo>
                </CountryDetailsBody>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.background_color};
    color: ${({ theme }) => theme.text_color};
    font-size: ${({ theme }) => theme.font_size.homepage}px;
    padding-top: 25px;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 90%;

    @media (min-width: ${({ theme }) => theme.media.md}) {
        width: 60%;
    }

    @media (min-width: ${({ theme }) => theme.media.xl}) {
        width: 80%;
    }
`;

const BackButton = styled.button`
    background-color: ${({ theme }) => theme.items_color};
    color: ${({ theme }) => theme.text_color};
    font-size: ${({ theme }) => theme.font_size.details}px;
    border: none;
    border-radius: 6px;
    padding: 10px 30px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.box_shadow};
`;

const CountryDetailsBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 25px;
    width: 100%;
    height: 100%;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.media.md}) {
        font-size: ${({ theme }) => theme.font_size.details}px;
    }

    @media (min-width: ${({ theme }) => theme.media.xl}) {
        line-height: 30px;
        flex-direction: row;
        gap: 150px;
    }
`;

const CountryFlag = styled.img`
    width: 100%;
    aspect-ratio: 320/ 213;
    border: ${({ theme }) => theme.border};
`;

const CountryInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;

    @media (min-width: ${({ theme }) => theme.media.xl}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 50px auto auto;
    }
`;

const Text = styled.p`
    color: ${({ theme }) => theme.text_color};
`;

const Title = styled.h3`
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text_color};

    @media (min-width: ${({ theme }) => theme.media.xl}) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
    }
`;

const TextContainer = styled.div``;
