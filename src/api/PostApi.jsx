import axios from "axios";

const api = axios.create({
    baseURL:"https://restcountries.com/v3.1",
})

export const getApiData = () => {
    return api.get("/all?fields=name,population,region,capital,flags");
}

export const getIdCountryData = (name) => {
    return api.get(
        `/name/${name}?fullText=true&fileds=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
    );
}