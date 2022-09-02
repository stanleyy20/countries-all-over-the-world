import { Link } from 'react-router-dom';
import styled from 'styled-components';

type BorderCountriesProps = {
    country: any;
};

export const BorderCountries: React.FunctionComponent<BorderCountriesProps> = ({ country }) => {
    const BORDER_COUNTRIES =
        country[0]?.borders &&
        country[0]?.borders.map((country: any) => (
            <StyledLink to={`/country/${country}`} key={country}>
                {' '}
                {country}
            </StyledLink>
        ));

    return (
        <Container>
            <Text>Border Countries:</Text>
            <Countries>{BORDER_COUNTRIES}</Countries>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-top: 25px;

    @media (min-width: ${({ theme }) => theme.media.xl}) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
    }
`;

const Countries = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.text_color};
    background-color: ${({ theme }) => theme.items_color};
    width: 30%;
    display: flex;
    justify-content: center;
    padding: 8px 0;
    box-shadow: ${({ theme }) => theme.box_shadow};
    border-radius: 6px;
`;

const Text = styled.p`
    color: ${({ theme }) => theme.text_color};
`;
