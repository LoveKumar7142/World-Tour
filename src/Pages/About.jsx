import "./Css/About.css"
import currentData from '../api/countryData.json'
import CountryFactCard from '../Components/CountryFactCard'

const About = () => {

  return (
    <div className="container">
      <div className="about-heading">
        <h1>
          Here are the Intresting Fact&apos;s
          <br />
          we&apos;re proud of
        </h1>
      </div>
      <ul className="cards-list">
        {currentData.map((currData) => {
          return <CountryFactCard key= {currData.id} currData = {currData} />
        })}

      </ul>

    </div>
  )
}

export default About