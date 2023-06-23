import { useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };


  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link href="/">
        </Link>
      </div>

      <button className="navbar__buttonmovile" onClick={toggleMenu}>
        <svg
          className="buttonmovile__svg"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>

      <ul className={`navbar__buttons ${menu ? 'isActive' : ''}`}>
        <li className="buttons__button">
          <Link className="button__link" onClick={toggleMenu} to="/story">
            OUR STORY
          </Link>
        </li>
        <li className="buttons__button">
          <Link className="button__link"  onClick={toggleMenu} to="/wines" >
            WINES
          </Link>
        </li>
        <li className="buttons__button">
          <Link className="button__link" onClick={toggleMenu} to="/visit" >
            VISIT
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Navbar;