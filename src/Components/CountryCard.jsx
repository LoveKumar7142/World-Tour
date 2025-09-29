import { NavLink } from "react-router-dom";

const CountryCard = ({ currData }) => {
    const { flags, name, population, region, capital } = currData;

    return (
        <li className="gradient cards cards-1">
            <img src={flags.svg} alt="flags-image" className="country-image" />
            <h1>{name.common.length > 10 ? name.common.slice(0, 10) + "..." : name.common}</h1>
            <h2><span>Population : </span>{population.toLocaleString}</h2>
            <h2><span>Region : </span>{region}</h2>
            <h2><span>Capital : </span>{capital[0]}</h2>
            <NavLink to={`/country/${name.common}`}>
                <button className="country-read-btn">
                    Read More &rarr;
                </button>
            </NavLink>
        </li>
    )
}

export default CountryCard
