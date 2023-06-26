/* eslint-disable react/no-unescaped-entities */
import './OurStory.css'
import Family_1 from '../../assets/img/Family_1.png'; 
import Verona from '../../assets/img/Verona_1.jpg'; 
import CardTimeLine from '../CardTimeLine/CardTimeLine';

const OurStory = () => {
  
  const TimeLine = [
    {
        id:1,
        img:Verona,
        year: 1625,
        title:'Fundación de la Bodega',
        paragraph:'Giovanni Ricciardi, apasionado enólogo, establece los viñedos de Gabrielle Ricciardi en la pintoresca provincia de Verona, Italia. Es el inicio de una larga tradición vinícola familiar.', 
    },
    {
        id:2,
        img:Verona,
        year: 1650,
        title:'Primer Amarone',
        paragraph:'Gabrielle Ricciardi elabora su primer Amarone, un vino de cuerpo completo y sabores intensos, utilizando una selección especial de uvas Corvina, Rondinella y Molinara. El Amarone se convierte en el emblema de la bodega y marca el comienzo de su renombre internacional.', 
    },
    {
        id:3,
        img:Verona,
        year: 1675,
        title:'Reconocimiento Real',
        paragraph:'Los vinos de Gabrielle Ricciardi son reconocidos por la realeza, y la bodega recibe su primera distinción real como proveedor oficial de vinos de la corte. El prestigio de la marca se afianza aún más', 
    },
    {
        id:4,
        img:Verona,
        year: 1700,
        title:'Expansión a Nuevos Mercados',
        paragraph:'Gabrielle Ricciardi expande su alcance y comienza a exportar sus vinos a países vecinos, incluyendo Francia y Alemania. La calidad y la elegancia de los vinos conquistan los paladares internacionales.', 
    },
    {
        id:5,
        img:Verona,
        year: 1725,
        title:'Innovación en el Proceso de Vinificación',
        paragraph:'Gabrielle Ricciardi introduce técnicas de vinificación innovadoras, como la crianza en barricas de roble francés, que aportan complejidad y sutileza a sus vinos. El uso de nuevas tecnologías impulsa la excelencia en la producción.', 
    }
  ]
  
  return (
    <div className='ourstory'>
      <img className='ourstory__firstimg' src={Verona}></img>
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
              <div className='timeline__line'></div>
              <CardTimeLine className='timeline__block' Info={aux}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStory;