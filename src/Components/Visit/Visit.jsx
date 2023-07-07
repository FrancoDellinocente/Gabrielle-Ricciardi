import './Visit.css'
import Carousel from '../Carousel/Carousel';
import PriceCard from '../PriceCard/PriceCard';
import carou_restaurant  from '../../assets/img/Visit/Restaurant.jpg';
import carou_picnic  from '../../assets/img/Visit/Picnic.jpg';
import carou_cantante  from '../../assets/img/Visit/Cantante.png';
import carou_paseo  from '../../assets/img/Visit/Paseo.jpg';
import carou_degustacion  from '../../assets/img/Visit/Degustacion.jpg';
import carou_bicicleta  from '../../assets/img/Visit/Bicicleta.png';


const Visit = () => {
  
  const Services = [
    {
        id:1,
        name:'Starter pack',
        price:200,
        paragraph:[
            'Access to restaurant.',
            'Access to visit vineyards.',
            '4-course daily menu.',
            'Possibility to have a picnic.',
        ], 
    },
    {
        id:2,
        name:'Gabrielle Pack',
        price:300,
        paragraph:[
            'Access to restaurant.',
            'Access to visit vineyards.',
            '4-course daily menu.',
            'Guided tour of the facilities.',
            'Tasting of our entry-level and mid-level wines.',
        ], 
    },
    {
        id:3,
        name:'Giovanni Pack',
        price:400,
        paragraph:[
            'Access to restaurant.',
            'Access to visit vineyards.',
            '4-course daily menu.',
            'Guided tour of the facilities.',
            'Tasting of our mid-level and high-level wines.',
            'Enjoy a live show by renowned artists.',
        ], 
    },
    
  ]

  const images = [
    carou_restaurant,
    carou_picnic,
    carou_degustacion,
    carou_paseo,
    carou_cantante,
    carou_bicicleta
  ];

  return (
    <div className='visit'>
        <div className='visit__bannerv'>
            <h1 className='bannerv__title'>LIVE THE RICCIARDI EXPERIENCE</h1>
            <h2 className='bannerv__subtitle'>Everyone is welcome here</h2>
        </div>
        <div className='visit__introduction'>
            <h1 className='introduction__title'>Welcome to Immerse Yourself</h1>
            <p className='introduction__paragraph'>Deep within our winery, we treasure decades of experience that have shaped our craft. Each bottle is a living testament to the years we have spent refining our art, exploring new flavors, and learning from every harvest. We are honored to welcome those who seek to immerse themselves in this tapestry of experience, extending an invitation to delve into our world of wine.</p>
            <p className='introduction__paragraph'>Here, amidst our vineyards stretching as far as the eye can see, time dissolves and merges with the aromas and flavors of our wines. Each carefully cultivated grape variety carries with it the story of the sun, the soil, and the skilled hands that have nurtured it. In every sip, our visitors can taste not only the richness of the fruits but also the passion and knowledge passed down through generations.</p>
            <p className='introduction__paragraph'>We take pride in providing a space where enjoyment and contemplation converge in every glass. Our team of winemakers, sommeliers, and wine enthusiasts is dedicated to guiding our visitors on a sensory journey, unveiling the secrets of each bottle and creating memorable experiences. Within our premises, the past and present, tradition and innovation blend together to offer a unique wine experience. So, with a smile on our faces and a glass in hand, we warmly welcome you to our oasis of flavors and emotions.</p>      
        </div>
        <div className='visit__carousel'>
            <div className='carousel__container'>
                <Carousel images={images} interval={50000} />
            </div>
        </div>
        <div className='visit__wrapcards'>
            {Services.map((aux)=>(
                <div className='wrapcards__card' key={aux.id}>
                    <PriceCard  Info={aux}/>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Visit;