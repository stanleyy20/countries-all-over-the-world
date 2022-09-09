import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { apiData } from '../types/apiData';

type CountryItemProps = {
    countries: Array<apiData>;
};

export const CountriesListItem: React.FunctionComponent<CountryItemProps> = ({ countries }) => {
    const countriesList = countries.map((country: apiData) => {
        return (
            <Item key={country.name.common}>
                <StyledLink to={`country/${country.cioc ?? country.cca3}`}>
                    <Img src={country.flags.png} alt='country flag'></Img>
                    <ItemBody>
                        <Title>{country.name.common}</Title>
                        <Text>
                            Population: {Intl.NumberFormat().format(Number(country.population))}
                        </Text>
                        <Text>Region: {country.region} </Text>
                        <Text>Capital: {country.capital}</Text>
                    </ItemBody>
                </StyledLink>
            </Item>
        );
    });

    return <Container>{countriesList}</Container>;
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 85%;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 50px;
`;

const Item = styled.div`
    background-color: ${({ theme }) => theme.items_color};
    margin-top: 10px;
    width: 85%;
    min-height: 330px;
    cursor: pointer;
    border-radius: 6px;
    box-shadow: ${({ theme }) => theme.box_shadow};

    @media screen and (min-width: ${({ theme }) => theme.media.sm}) {
        width: 38%;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.md}) {
        width: 28%;
    }

    @media screen and (min-width: ${({ theme }) => theme.media.lg}) {
        width: 18%;
    }
`;

const ItemBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    padding: 15px;
`;
const Text = styled.p`
    color: ${({ theme }) => theme.text_color};
`;
const Title = styled.h3`
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text_color};
`;
const Img = styled.img`
    max-width: 100%;
    border-radius: 6px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.text_color};
    display: block;
    height: 100%;
`;
