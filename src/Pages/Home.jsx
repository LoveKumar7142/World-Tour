import { useRef } from "react"
import "./Css/Home.css"
import About from "./About";
import HeroSection from "../Components/HeroSection";

const Home = () => {
  const sectionRef = useRef(null);

  const handleScrollbtn = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="container" >
      <HeroSection handleScrollbtn={handleScrollbtn} />
      <section ref={sectionRef}>
        <About />
      </section>
    </div>
  )
}

export default Home