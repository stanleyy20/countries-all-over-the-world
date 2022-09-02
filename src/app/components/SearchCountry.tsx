import { ChangeEvent, useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { apiData } from '../types/apiData';

import styled from 'styled-components';

type SearchCountryProps = {
    setCountries: React.Dispatch<React.SetStateAction<apiData[]>>;
};

export const SearchCountry: React.FunctionComponent<SearchCountryProps> = ({ setCountries }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const { fetch: getCountry } = useFetch((country) => {
        setCountries(country);
    });

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        getCountry(`name/${inputValue}`);
    };

    return (
        <Container>
            <Input
                onChange={(event) => {
                    handleOnChange(event);
                }}
                value={inputValue}
                placeholder='&#128269; Search for a country...'></Input>
        </Container>
    );
};

const Container = styled.div`
    @media (min-width: ${({ theme }) => theme.media.md}) {
        width: 35%;
    }
`;
const Input = styled.input`
    width: 100%;
    background-color: ${({ theme }) => theme.items_color};
    box-shadow: ${({ theme }) => theme.box_shadow};
    color: ${({ theme }) => theme.text_color};
    border-radius: 6px;
    border: none;
    outline: none;
    padding: 15px 35px;

    &::placeholder {
        font-size: 16px;
    }
`;
