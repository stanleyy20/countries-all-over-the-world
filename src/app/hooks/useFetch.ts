import { useState } from 'react';
// import { trackPromise } from 'react-promise-tracker';
import { CONFIGURATION } from '../config/config';
import { apiData } from '../types/apiData';
// import { countryProperty } from '../types/country';

const { API_URL } = CONFIGURATION;

export const useFetch = (onSuccess: (country: Array<apiData>) => void) => {
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return {
        isLoading,
        isError,
        fetch: (endpoint: string) => {
            setIsLoading(true);
            setIsError(false);
            fetch(`${API_URL}${endpoint}`)
                .then((response) => {
                    if (response.ok) {
                        return response;
                    }
                    throw response;
                })
                .then((response) => response.json())
                .then((countriesData) => onSuccess(countriesData))
                .catch(() => {
                    setIsError(true);
                    console.error('błąd wczytywania danych, spróbuj ponownie');
                })
                .finally(() => setIsLoading(false));
        },
    };
};
