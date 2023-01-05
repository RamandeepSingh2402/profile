import './index.scss';
import LogoR from '../../assets/images/logoR.png';
import {Link, NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {

    return(<div className='nav-bar'>
            <Link className = 'logo' to="/">
                <img src={LogoR} alt="logo"></img>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon = {faHome} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
                    <FontAwesomeIcon icon = {faUser} color='#4d4d4e'/>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className='contact-link' to="/contact">
                    <FontAwesomeIcon icon = {faEnvelope} color='#4d4d4e'/>
                </NavLink>

            </nav>
            <ul>
                <li>
                    <a 
                        target="_blank" 
                        rel='noreferrer' 
                        href='https://www.linkedin.com/in/ramandeep-singh-915a91173'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>

                <li>
                    <a 
                        target="_blank" 
                        rel='noreferrer' 
                        href='https://github.com/RamandeepSingh2402'
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                
                <li>
                    <a 
                        target="_blank" 
                        rel='noreferrer' 
                        href='https://instagram.com/ramandeepsingh___'
                    >
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                    </a>
                </li>
                

            </ul>

    </div>
    )
}

export default Sidebar;