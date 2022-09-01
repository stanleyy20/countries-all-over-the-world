import { Link, useNavigate, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import LoadingIndicator from './LoadingIndicator';

export const CountryDetails: React.FunctionComponent = () => {
    const [country, setCountry] = useState<any>([]);
    const navigate = useNavigate();
    const { countryCode } = useParams();

    const { fetch: getCountry, isLoading } = useFetch((country) => {
        setCountry(country);
    }, `alpha/${countryCode}`);

    useEffect(() => {
        getCountry();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryCode]);

    const forwardPage = () => {
        navigate('/');
    };

    return (
        <Container>
            <Wrapper>
                <LoadingIndicator isLoading={isLoading} />
                <BackButton onClick={forwardPage}>
                    {' '}
                    <FontAwesomeIcon icon={faArrowLeftLong} size='lg' /> Back
                </BackButton>
                <CountryDetailsBody>
                    <CountryFlag src={country[0]?.flags.png}></CountryFlag>
                    <CountryInfo>
                        <Title>{country[0]?.name.common}</Title>
                        <Text>
                            Native Name:{' '}
                            {
                                country[0]?.name.nativeName[
                                    Object.keys(country[0]?.name.nativeName)[0]
                                ].official
                            }{' '}
                        </Text>
                        <Text>
                            Population: {Intl.NumberFormat().format(country[0]?.population)}
                        </Text>
                        <Text>Region: {country[0]?.region} </Text>
                        <Text>Sub Region: {country[0]?.subregion}</Text>
                        <Text>Capital: {country[0]?.capital}</Text>

                        {country[0]?.tld &&
                            country[0]?.tld.map((domain: any) => (
                                <Text key={domain}>Top Level Domain: {domain}</Text>
                            ))}

                        {country[0]?.currencies &&
                            Object.values(country[0]?.currencies).map((currency: any) => (
                                <Text key={currency.name}>Currencies: {currency.name}</Text>
                            ))}

                        <Text>
                            Languages:{' '}
                            {country[0]?.languages &&
                                Object.values(country[0]?.languages).join(', ')}
                        </Text>
                        <BorderCountries>
                            <Text>Borders:</Text>
                            {country[0]?.borders &&
                                country[0]?.borders.map((country: any) => (
                                    <StyledLink to={`/country/${country}`} key={country}>
                                        {' '}
                                        {country}
                                    </StyledLink>
                                ))}
                        </BorderCountries>
                    </CountryInfo>
                </CountryDetailsBody>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.background_color};
    color: ${({ theme }) => theme.text_color};
    overflow-x: hidden;
    display: flex;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 70%;
    height: 100%;
    background-color: ${({ theme }) => theme.background_color};
    overflow-x: hidden;
    padding: 80px 25px;
`;

const BackButton = styled.button`
    background-color: ${({ theme }) => theme.items_color};
    color: ${({ theme }) => theme.text_color};
    font-size: ${({ theme }) => theme.font_size.details}px;
    border: none;
    border-radius: 6px;
    padding: 10px 50px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.box_shadow};
`;

const CountryDetailsBody = styled.div`
    display: flex;
    gap: 50px;
    padding-top: 55px;
`;

const CountryFlag = styled.img``;

const CountryInfo = styled.div``;
const BorderCountries = styled.div`
    display: flex;
    gap: 5px;
`;

const Text = styled.p`
    color: ${({ theme }) => theme.text_color};
`;

const Title = styled.h3`
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text_color};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.text_color};
`;
