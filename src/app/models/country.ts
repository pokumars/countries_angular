export interface Country {
    name: string;
    topLevelDomain: Array<string>;
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: Array<string>;
    capital: string;
    altSpellings: Array<string>;
    subregion: string;
    region: string;
    population: number;
    latlng: Array<number>;
    demonym: string;
    area: number;
    timezones: Array<string>;
    borders: Array<string>;
    nativeName: string;
    numericCode: string;
    flags: FlagImageSources;
    currencies: Array<Currency>;
    languages: Array<Language>;
    translations: CountryNameTranslations;
    flag: string;
    regionalBlocs: Array<RegionalBloc>;
    cioc: string;
    independent: boolean;
}

interface FlagImageSources {
    svg: string;
    png: string
}

interface RegionalBloc {
    acronym: string;
    name: string;
}

interface Currency {
    code: string;
    name: string;
    symbol: string;
}

interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

interface CountryNameTranslations {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
}