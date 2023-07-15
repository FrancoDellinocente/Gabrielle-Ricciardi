import './Wines.css'
import Winx from '../../assets/img/Winx_Club.png';
import Wine_Rhodochrosite from '../../assets/img/Wines/Wine_Rhodochrosite.png';
import Wine_Sapphire from '../../assets/img/Wines/Wine_Sapphire.png';
import Wine_Emerald from '../../assets/img/Wines/Wine_Emerald.png';
import Wine_Amethyst from '../../assets/img/Wines/Wine_Amethyst.png';
import Wine_Onyx from '../../assets/img/Wines/Wine_Onyx.png';
import Wine_Diamond from '../../assets/img/Wines/Wine_Diamond.png';
import Wine_Ruby from '../../assets/img/Wines/Wine_Ruby.png';
import Wine_Topaz from '../../assets/img/Wines/Wine_Topaz.png';
import CardWine from '../CardWine/CardWine';

const Wines = () => {
  
  // eslint-disable-next-line no-unused-vars
  const ListWines = [
    {
        id:1,
        name:'Rhodochrosite',
        img: Wine_Rhodochrosite,
    },  
    {
        id:2,
        name:'Sapphire',
        img: Wine_Sapphire,
    }, 
    {
        id:3,
        name:'Emerald',
        img: Wine_Emerald,
    }, 
    {
        id:4,
        name:'Amethyst',
        img: Wine_Amethyst,
    }, 
    {
        id:5,
        name:'Onyx',
        img: Wine_Onyx,
    }, 
    {
        id:6,
        name:'Diamond',
        img: Wine_Diamond,
    }, 
    {
        id:7,
        name:'Ruby',
        img: Wine_Ruby,
    }, 
    {
        id:8,
        name:'Topaz',
        img: Wine_Topaz,
    },   
  ]


  return (
    <div className='wines'>
        <div className='wines__bannerprom'>
            <div className='bannerprom__containerimag'>
                <a href="">
                    <img src={Winx} alt="" className='bannerprom__imag'/>
                </a>
            </div>
            <div className='bannerprom__info'>
                <h1 className='bannerprom__text'>Discover the best of our exclusive wine club</h1>
                <a className='bannerprom__link' href='#'>Click here</a>
            </div>
        </div>
        <div className='wines__ourwinessection'>
            <h1 className='ourwinessection__title'>Our Wines</h1>
            <div className='wines__wrapwines'>
                {ListWines.map((aux)=>(
                    <div key={aux.id} className='wines__cardwines'>
                        <CardWine Info={aux}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Wines;