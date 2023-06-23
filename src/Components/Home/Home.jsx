import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <div className='Home'>
        <div className='Home__texts'>
            <h1 className='Home__title'>Welcome to Gabrielle Ricciardi</h1>
            <h2 className='Home__slogan'>The Golden Dawn In Each Glass</h2>
            <Link className='Home__button' to='/visit'>Book a tour</Link>
        </div>
    </div>
  );
};

export default Home;