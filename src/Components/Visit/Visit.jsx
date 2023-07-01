import './Visit.css'
import Carousel from '../Carousel/Carousel';
import PriceCard from '../PriceCard/PriceCard';
const Visit = () => {
  
  const Services = [
    {
        id:1,
        name:'Starter',
        price:200,
        paragraph:[
            'lalalal',
            'akakaka',
            'Auefef',
        ], 
    },
    {
        id:2,
        name:'PRO',
        price:400,
        paragraph:[
            'lalalaafsfasfasfafaaaaal',
            'akasafafafkaka',
            'Auesssssfef',
        ], 
    },
    {
        id:3,
        name:'Master',
        price:600,
        paragraph:[
            'lalffffffffffffffffffffalal',
            'asssssssssssssfffffffffkakaka',
            'Aufffffffffffffffffffffefef',
        ], 
    },
    
  ]

  const images = [
    'https://cdn.shopify.com/s/files/1/0577/5550/0600/files/que-beneficios-tienen-vinos-sin-alcohol_600x600.jpg?v=1650455364',
    'https://noadrinks.com/cdn/shop/articles/los-beneficios-vinos-sin-alcohol.jpg?crop=center&height=1280&v=1674154866&width=1280',
    'https://noadrinks.com/cdn/shop/articles/Osco.jpg?crop=center&height=640&v=1648026072&width=640',
    // imagen de ejemplo para ir viendo si funciona
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