import { useState } from 'react';
import { trackPromise } from 'react-promise-tracker';
import { CONFIGURATION } from '../config/config';
// import { countryProperty } from '../types/country';

const { API_URL } = CONFIGURATION;

export const useFetch = (onSuccess: (country: Array<string>) => void) => {
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return {
        isLoading,
        isError,
        fetch: () => {
            trackPromise(
                fetch(`${API_URL}all`)
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
                    .finally(() => setIsLoading(false))
            );
        },
    };
};