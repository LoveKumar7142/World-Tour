import { useEffect, useState, useTransition } from "react"
import { getApiData } from "../api/PostApi";
import Loading from "../Components/Loading";
import CountryCard from "../Components/CountryCard";
import './Css/Country.css'
import SearchFilter from "../Components/SearchFilter";



const Country = () => {
  const [isPanding,startTransition] = useTransition();
  const [countries,setCountries] = useState([]);
  const [search,setSearch] = useState();
  const [filter,setFilter] = useState("all");
  useEffect(()=>{
    startTransition(async ()=>{
      const res = await getApiData();
      // console.log(res)
      setCountries(res.data)
      
    })
  },[])
  if(isPanding) return <Loading />
  // console.log(countries)
  // console.log(search, filter)

  // search logic 
  const searchCountry =(country) => {
    if(search){
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  }

  const filterRegion = (country) => {
    if(filter === 'all') return country;
    return country.region === filter;
  }

  const countryFilter =  countries.filter((country) => searchCountry(country) && filterRegion(country));
  return (
    <div className="container">
      <section className="country-section">
        <SearchFilter search = {search} setSearch = {setSearch} filter = {filter} setFilter = {setFilter} countries = {countries} setCountries = {setCountries}/>
        <ul className="cards-list1">
        {countryFilter.map((currData) => {
          return <CountryCard key= {currData.id} currData = {currData} />
        })}
      </ul>
      </section>
    </div>
  )
}

export default Country
