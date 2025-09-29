import "./Css/HeroSection.css"

const HeroSection = ({handleScrollbtn}) => {
  return (
    <section className="home-front">
       <div className="image">
          <img src="/images/home.png" alt="/images/home.png" className="globe-spin"/>
        </div>
        <div className="home-text">
          <h1>Ecplore the World, One Country at a Time.</h1>
          <h2>Discover the beauty of the world, one unforgettable journey at a time.</h2>
          <button onClick={handleScrollbtn}>
            Start Exploring &rarr;
          </button>
          </div>
    </section>
  )
}

export default HeroSection
