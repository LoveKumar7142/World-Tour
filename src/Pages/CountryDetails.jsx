import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom"
import { getIdCountryData } from "../api/PostApi";
import Loading from "../Components/Loading";
import './Css/CountryDetails.css'

const CountryDetails = () => {
    const params = useParams();
    // console.log(params);
    const [isPanding, startTransition] = useTransition();
    const [country, setCountry] = useState({});
    useEffect(() => {
        startTransition(async () => {
            const res = await getIdCountryData(params.id);
            // console.log(res)
            if (res.status === 200) {
                setCountry(res.data[0])
            }
        })
    }, [params.id])


    if (isPanding) return <Loading />

    // console.log(country)
    return (
        <div className="container">

            <div className="country gradient">
                <div className="country-all-data">
                    <div className="  cards country-data">
                        <div className="county-image">
                            <img src={country.flags?.svg} alt={country.flags?.alt} />
                        </div>
                        <div className="country-text">
                            <h1>{country.name?.official}</h1>
                            <p><span className="font-semibold">Common Namec : </span> {country.name?.common}</p>
                            <p><span className="font-semibold">Native Name : </span>
                                {country.name?.nativeName
                                    ? Object.keys(country.name.nativeName)
                                        .map((key) => country.name.nativeName[key]?.common)
                                        .join(", ")
                                    : "N/A"}
                            </p>
                            <p><span className="font-semibold">Population : </span> {country.population?.toLocaleString()}</p>
                            <p><span className="font-semibold">Region : </span> {country.region}</p>
                            <p><span className="font-semibold">Subregion : </span> {country.subregion}</p>
                            <p><span className="font-semibold">Capital : </span> {country.capital?.join(", ")}</p>
                            <p><span className="font-semibold">Top Level Domain : </span> {country.tld?.join(", ")}</p>
                            <p><span className="font-semibold">Currencies : </span> {
                                country.currencies &&
                                Object.values(country.currencies)
                                    .map((currency) => currency.name)
                                    .join(", ")
                            }</p>
                            <p><span className="font-semibold">Languages : </span> {
                                country.languages &&
                                Object.values(country.languages).join(", ")
                            }</p>
                            <p><span className="font-semibold">Borders : </span> {
                                country.borders?.length > 0
                                    ? country.borders.join(", ")
                                    : "None"
                            }</p>
                        </div>

                    </div>
                </div>
                <div className="btn">
                    <NavLink to="/country" className="btn-back">
                        &larr; Go Back
                    </NavLink>
                </div>

            </div>
        </div>

    )
}

export default CountryDetails
