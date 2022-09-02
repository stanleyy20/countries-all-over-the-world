export interface apiData {
    name: {
        nativeName: {
            [key: string]: {
                official: string;
            };
        };
        common: string;
    };
    flags: {
        png: string;
    };
    population: string;
    region: string;
    subregion: string;
    capital: string;
    languages: {};
    tld: [];
    currencies: [];
    cioc: string;
}
