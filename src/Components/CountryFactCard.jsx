const CountryFactCard = ({currData}) => {
    const {id, name, capital, population, area, currency, language, fact} = currData;
  return (
    <li key={id} className="gradient cards">
        <h1>{name}</h1>
        <h2><span>Capital : </span>{capital}</h2>
        <h2><span>Population : </span>{population}</h2>
        <h2><span>Area : </span>{area}</h2>
        <h2><span>Currency : </span>{currency}</h2>
        <h2><span>Language : </span>{language}</h2>
        <h2><span>Fact : </span>{fact}</h2>
        
    </li>
  )
}

export default CountryFactCard
