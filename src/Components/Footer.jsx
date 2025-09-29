import footerData from '../api/footerApi.json'
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";

import './Css/footer.css'
const Footer = () => {
  const selectIcons = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  }
  return (
    <footer className='footer'>
      <div className="grid-component container">
        {footerData.map((currData, index) => {
          const { icon, title, details } = currData;
          return (
            <div className="footer-content" key={index}>
              <div className="icon">
                {selectIcons[icon]}
              </div>
              <div className="footer-text">
                <h1>{title}</h1>
                <h2>{details}</h2>
              </div>
            </div>
          )
        })}
      </div>

      <div className="copy-right">
            <div className="container">
                <div className="grid-template1">
                    <div className="reserved-right">
                        <NavLink to="/Contact">Copyright @ 2025. All Right Reserved <span className='name'>Love Kumar</span></NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="https://github.com/LoveKumar7142" target='_blank'><FaGithub /></NavLink>
                            </li>
                            <li>
                                <NavLink to="https://www.linkedin.com/in/love-kumar-327299212/" target='_blank'><FaLinkedin /></NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="https://leetcode.com/problemset/" target='_blank'><SiLeetcode /></NavLink>
                            </li>
                            <li>
                                <NavLink to="https://www.naukri.com/code360/profile/70dbbc55-c58f-45d9-9722-0da9a0d421cb" target='_blank'><SiCodingninjas /></NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
      </div>
    </footer>
  )
}

export default Footer
