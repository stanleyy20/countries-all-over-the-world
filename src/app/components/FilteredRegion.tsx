import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useFetch } from '../hooks/useFetch';
import { apiData } from '../types/apiData';
import { regions } from '../types/regions';

type FilteredRegionProps = {
    setCountries: React.Dispatch<React.SetStateAction<apiData[]>>;
};

export const FilteredRegion: React.FunctionComponent<FilteredRegionProps> = ({ setCountries }) => {
    const [region, setRegion] = useState<string>('all');

    const { fetch: getCountry } = useFetch((country) => {
        setCountries(country);
    });

    useEffect(() => {
        getCountry(region);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [region]);

    const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setRegion(`region/${event.target.value}`);
        if (event.target.value === 'All') {
            setRegion('all');
            return;
        }
    };

    return (
        <Select placeholder='Filter by Region' onChange={(event) => handleOnChange(event)}>
            {regions.map((region) => (
                <Option key={region} value={region}>
                    {region}
                </Option>
            ))}
        </Select>
    );
};

const Select = styled.select`
    width: 50%;
    background-color: ${({ theme }) => theme.items_color};
    box-shadow: ${({ theme }) => theme.box_shadow};
    color: ${({ theme }) => theme.text_color};
    border-radius: 6px;
    border: none;
    outline: none;
    padding: 15px 35px;
    margin-top: 40px;

    @media (min-width: ${({ theme }) => theme.media.md}) {
        margin-top: 0;
        width: 20%;
    }
`;
const Option = styled.option``;
