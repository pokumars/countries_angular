export interface Country {
    name: CountryName;
    tld: Array<string>;
    /**alpha2Code / cca2 ISO 3166-1 alpha-2 two-letter country codes */
    cca2: string;
    /**alpha3Code / cca3 ISO 3166-1 alpha-3 */
    cca3: string;
    /** Code of the International Olympic Committee */
    cioc: string;
    independent: boolean;
    /** numericCode / ccn3 ISO 3166-1 numeric code (UN M49) three-letter country codes ISO 3166-1 numeric – three-digit country codes which are identical to those developed and maintained by the United Nations Statistics Division, with the advantage of script (writing system) independence, and hence useful for people or systems using non-Latin scripts.*/
    ccn3: string;
    /**ISO 3166-1 assignment statusISO 3166-1 numeric – three-digit country codes which are identical to those developed and maintained by the United Nations Statistics Division, with the advantage of script (writing system) independence, and hence useful for people or systems using non-Latin scripts. */
    status: string;
    unMember: boolean;
    currencies: Array<Currency>;
    /**International dialing codes */
    idd: CallingCodes;
    capital: Array<string>;
    altSpellings: Array<string>;
    subregion: string;
    region: string;
    languages: {
        [name: string]: string
    };
    translations: CountryNameTranslations;
    landlocked: boolean;
    borders: Array<string>;
    area: number;
    demonyms: Demonyms;
    flag: string;
    /**googleMaps or openStreetMaps link to country*/
    maps: Maps;
    population: number;
    latlng: Array<number>;
    fifa: string;
    car: Car;
    timezones: Array<string>;
    continents: Array<string>
    flags: ImageSources;
    coatOfArms: CoatOfArmsSources;
    startOfWeek: string;
    postalCode: PostalCode;
    /** optional! places like Antarctica dont have a capital */
    capitalInfo: { latlng?: Array<number> }
}


interface CountryName {
    common: string;
    official: string;
    nativeName: {
        [name: string]: {
            official: string;
            common: string;
        }
    }
}

interface Currency {
    [acronym: string]: {
        name: string;
        symbol: string;
    }
}

//callingCodes / idd
interface CallingCodes {
    root: string;
    suffixes: Array<string>;
}

interface GenderedString {
    f: string;
    m: string;
}

interface Demonyms {
    eng: GenderedString;
    fra: GenderedString;
}
interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}
interface Car {
    signs: Array<string>;
    side: string;
}

interface ImageSources {
    svg: string;
    png: string;
    alt: string
}

type CoatOfArmsSources = Pick<ImageSources, 'png' | 'svg'>

interface CapitalInfo {
    latlng: Array<number>;
}
interface CountryNameTranslations {
    [name: string]: {
        official: string;
        common: string
    }
}

interface PostalCode {
    format: string,
    regex: string
}

//the data type that was in data.json
/**export interface Country {
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
} */