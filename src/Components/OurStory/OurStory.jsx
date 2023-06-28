/* eslint-disable react/no-unescaped-entities */
import './OurStory.css'
import CardTimeLine from '../CardTimeLine/CardTimeLine';
import Family_1 from '../../assets/img/Family_1.png'; 
import Verona from '../../assets/img/Verona_1.jpg'; 
import i1623 from '../../assets/img/Timeline/1623.jpg';
import i1645 from '../../assets/img/Timeline/1645.jpg';
import i1692 from '../../assets/img/Timeline/1692.jpg';
import i1740 from '../../assets/img/Timeline/1740.jpg';
import i1764 from '../../assets/img/Timeline/1764.jpg';
import i1801 from '../../assets/img/Timeline/1801.png';
import i1870 from '../../assets/img/Timeline/1870.jpg';
import i1890 from '../../assets/img/Timeline/1890.jpg';
import i1920 from '../../assets/img/Timeline/1920.jpg';
import i1957 from '../../assets/img/Timeline/1957.jpg';
import i2002 from '../../assets/img/Timeline/2002.jpg';
import i2010 from '../../assets/img/Timeline/2010.jpg';
import i2023 from '../../assets/img/Timeline/2023.jpg';

const OurStory = () => {
  
  const TimeLine = [
    {
        id:1,
        img:i1623,
        year: 1623,
        title:'Winery Foundation',
        paragraph:'Giovanni Ricciardi, a passionate winemaker, establishes the vineyards of Gabrielle Ricciardi in the picturesque province of Verona, Italy. It marks the beginning of a long family winemaking tradition.', 
    },
    {
        id:2,
        img:i1645,
        year: 1645,
        title:'First Amarone',
        paragraph:'Gabrielle Ricciardi crafts its first Amarone under the meticulous guidance of Giovanni Ricciardi. This bold and complex wine becomes a testament to their dedication and sets the standard for future vintages.', 
    },
    {
        id:3,
        img:i1692,
        year: 1692,
        title:'Royal Recognition',
        paragraph:'Gabrielle Ricciardi receives royal recognition as the official wine supplier to the court, solidifying their reputation for producing exceptional wines of elegance and refinement.', 
    },
    {
        id:4,
        img:i1740,
        year: 1740,
        title:'Expansion to New Markets',
        paragraph:'Gabrielle Ricciardi embarks on a journey to expand its presence in new markets, introducing their wines to discerning enthusiasts around the world, captivating palates far and wide.', 
    },
    {
        id:5,
        img:i1764,
        year: 1764,
        title:'Innovation in Winemaking Process',
        paragraph:'Gabrielle Ricciardi embraces innovation, combining traditional winemaking methods with groundbreaking techniques, resulting in wines of unparalleled quality and character.', 
    },
    {
      id:6,
      img:i1801,
      year: 1801,
      title:'The Legendary Vintage',
      paragraph:'Gabrielle Ricciardi unveils a legendary vintage that captures the essence of their terroir and craftsmanship. This exceptional wine becomes an emblem of their unwavering commitment to excellence.', 
    },
    {
      id:7,
      img:i1870,
      year: 1870,
      title:'Vineyard Expansion',
      paragraph:'Gabrielle Ricciardi acquires additional vineyard plots, expanding their domain and preserving the heritage of the Verona region, ensuring a continued legacy of exceptional winemaking.', 
    },
    {
      id:8,
      img:i1890,
      year: 1890,
      title:'Sustainability and Conservation',
      paragraph:'Gabrielle Ricciardi pioneers sustainable practices in viticulture and winemaking, prioritizing environmental stewardship to preserve the natural beauty of their vineyards for generations to come.', 
    },
    {
      id:9,
      img:i1920,
      year: 1920,
      title:'International Expansion',
      paragraph:'Gabrielle Ricciardi ventures into new international markets, captivating wine lovers worldwide with their expressive wines, showcasing the distinct character of Verona´s vineyards.', 
    },
    {
      id:10,
      img:i1957,
      year: 1957,
      title:'Innovation and Technology',
      paragraph:'Gabrielle Ricciardi embraces innovation and cutting-edge technology in their winemaking process, marrying tradition with modern advancements to achieve wines of utmost precision and quality', 
    },
    {
      id:11,
      img:i2002,
      year: 2002,
      title:'Fundación de la Bodega',
      paragraph:'Giovanni Ricciardi, apasionado enólogo, establece los viñedos de Gabrielle Ricciardi en la pintoresca provincia de Verona, Italia. Es el inicio de una larga tradición vinícola familiar.', 
    },
    {
      id:12,
      img:i2010,
      year: 2010,
      title:'Worldwide Acclaim',
      paragraph:'Gabrielle Ricciardi´s wines garner worldwide acclaim, earning prestigious awards and accolades, solidifying their position as a revered and sought-after winery globally.', 
    },
    {
      id:13,
      img:i2023,
      year: 2023,
      title:'Celebrating 400 Years of Excellence',
      paragraph:'Gabrielle Ricciardi celebrates its 400th anniversary as one of Italy´s oldest and most prestigious wineries. A series of special events and limited-edition commemorative wines pay tribute to the rich history and passion that has driven the winery throughout the centuries', 
    },
  ]
  
  return (
    <div className='ourstory'>
      <div className='ourstory__firstimg'>
        <img className='firstimg__img' src={Verona}></img>
      </div>
      <div className='ourstory__banner'>
        <div className='banner__containerimg'>
          <img className='banner__img' src={Family_1}></img>
        </div>
        <div className='banner__text'>
          <h1 className='banner__title'>
            Our Story
          </h1>
          <div className='banner__wrapparagraphs'>
            <p className='wrapparagraphs__paragraph'>
              In the picturesque province of Verona, amidst rolling hills and sun-kissed vineyards, lies the legendary estate of Gabrielle Ricciardi. For centuries, this revered winery has produced exceptional wines, captivating the hearts and palates of wine connoisseurs worldwide.
            </p>
            <p className='wrapparagraphs__paragraph'>
              The story of Gabrielle Ricciardi dates back to the 17th century when Giovanni Ricciardi, a passionate winemaker, established the vineyards in the idyllic Veronese countryside. Inspired by his daughter Gabrielle, a spirited and refined young woman, Giovanni decided to honor her by naming the brand after her. Since then, Gabrielle Ricciardi has become synonymous with elegance, tradition, and excellence in wine production.
            </p>
            <p className='wrapparagraphs__paragraph'>
              Specializing in the production of captivating Amarone, Gabrielle Ricciardi has forged an impeccable reputation in the Verona region. Using carefully selected Corvina, Rondinella, and Molinara grapes, the winery creates rich and seductive Amarone wines, characterized by their intense flavors, complexity, and aging potential. These exceptional wines have received prestigious recognition and awards, such as the "Gold Medal" at the Verona Wine Competition in 2019 and the title of "Best Amarone" at the International Wine Awards in 2021.
            </p>
            <p className='wrapparagraphs__paragraph'>
              The vineyards of Gabrielle Ricciardi, located on the fertile soil of Verona and caressed by gentle Mediterranean breezes, form the foundation of the quality and distinctive character of their wines. With unwavering dedication to winemaking craftsmanship, the winery combines traditional methods with innovative techniques to highlight the unique expression of each grape and the region's terroir.
            </p>
            <p className='wrapparagraphs__paragraph'>
              Each bottle of Gabrielle Ricciardi tells a story of passion, dedication, and the family heritage passed down through generations. The wines carry the legacy of Giovanni, Gabrielle, and their daughter, Gabrielle Ricciardi, embodying the spirit and vision of a family that has left an indelible mark on Verona's winemaking history. With every sip, a sensory experience unfolds, capturing the magic and beauty of northern Italy and paying homage to a winemaking tradition that has withstood the test of time.
            </p>
          </div>
        </div>

      
      </div>
      <div className='ourstory__wraptimeline'>
        <h1 className='wraptimeline__title'>Time Line</h1>
        <div className='wraptimeline__timeline'>
          {TimeLine.map((aux)=>(
            <div key={aux.id} className='timeline__section'>
              <h1 className='timeline__year'>{aux.year}</h1>
              <CardTimeLine Info={aux}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStory;