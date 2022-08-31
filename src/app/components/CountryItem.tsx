import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

type CountryItemProps = {
    countries: any;
};

export const CountryItem: React.FunctionComponent<CountryItemProps> = ({ countries }) => {
    const navigate = useNavigate();

    const showCountryDetails = () => {
        console.log('działa');
        navigate('/details');
    };

    const countriesList = countries.map((country: any) => {
        return (
            <Item key={country.name.common} onClick={showCountryDetails}>
                <Img src={country.flags.png}></Img>
                <ItemBody>
                    <Title>{country.name.common}</Title>
                    <Text>Population: {country.population}</Text>
                    <Text>Region: {country.region} </Text>
                    <Text>Capital: {country.capital}</Text>
                </ItemBody>
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
`;

const Item = styled.div`
    background-color: ${({ theme }) => theme.items_color};
    margin-top: 10px;
    width: 70%;
    min-height: 330px;
    cursor: pointer;
    border-radius: 6px;

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
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-left: 20px;
    margin-top: 20px;
`;
const Text = styled.p``;
const Title = styled.h3`
    margin-bottom: 10px;
`;
const Img = styled.img`
    max-width: 100%;
    border-radius: 6px;
`;

//                             border_countries: country.borders,
//                             currencies: country.currencies,
//                             domain: country.tld,
//                             flag: country.flags.png,
//                             lang: country.languages,
//                             name: country.name.common,
//                             native_name: country.name.nativeName,
//                             sub_region: country.subregion,
//
