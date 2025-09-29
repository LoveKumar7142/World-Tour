import "./Css/searchFilter.css"
const SearchFilter = ({search,setSearch,filter,setFilter,countries,setCountries}) => {
    const handleSearchText = (event) => {
        event.preventDefault();
        setSearch(event.target.value)
    }
    const handleSelectFilter = (event) =>{
      event.preventDefault();
      setFilter(event.target.value);
    }

    // ascending and decending
    const sortCountries = (value) => {
        const sortCountry = [...countries].sort((a,b)=>{
            return value === 'asc'
            ? a.name.common.localeCompare(b.name.common)
            : b.name.common.localeCompare(a.name.common)
        })
        setCountries(sortCountry);
    }
  return (
    <section className="section-searchFilter container">
     <div>
         <input type="text" placeholder="search" value={search} onChange={handleSearchText}/>
     </div>
     <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
     </div>
     <div>
        <button onClick={() => sortCountries("des")}>Des</button>
     </div>
      <div>
        <select name="countries-value" value={filter} onChange={handleSelectFilter} id="country-option" className="select-section">
            <option value="all" className="options">All</option>
            <option value="Africa" className="options">Africa</option>
            <option value="Americas" className="options">Americas</option>
            <option value="Asia" className="options">Asia</option>
            <option value="Europe" className="options">Europe</option>
            <option value="Oceania" className="options">Oceania</option>
        </select>
      </div>
    </section>
  )
}

export default SearchFilter
