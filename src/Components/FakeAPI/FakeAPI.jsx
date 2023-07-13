import Wine_Rhodochrosite from '../../assets/img/Wines/Wine_Rhodochrosite.png';
import Wine_Sapphire from '../../assets/img/Wines/Wine_Sapphire.png';
import Wine_Emerald from '../../assets/img/Wines/Wine_Emerald.png';
import Wine_Amethyst from '../../assets/img/Wines/Wine_Amethyst.png';
import Wine_Onyx from '../../assets/img/Wines/Wine_Onyx.png';
import Wine_Diamond from '../../assets/img/Wines/Wine_Diamond.png';
import Wine_Ruby from '../../assets/img/Wines/Wine_Ruby.png';
import Wine_Topaz from '../../assets/img/Wines/Wine_Rhodochrosite.png';
//rock
import Rhodochrosite from '../../assets/img/Rocks/Rhodochrosite.png';
import Sapphire from '../../assets/img/Rocks/Sapphire.png';
import Emerald from '../../assets/img/Rocks/Emerald.png';
import Amethyst from '../../assets/img/Rocks/Amethyst.png';
import Onyx from '../../assets/img/Rocks/Onyx.png';
import Diamond from '../../assets/img/Rocks/Diamond.png';
import Ruby from '../../assets/img/Rocks/Ruby.png';
import Topaz from '../../assets/img/Rocks/Rhodochrosite.png';

// eslint-disable-next-line react-refresh/only-export-components
const  ListWinesDetail = [
    {
        id:1,
        name:'Rhodochrosite',
        wine: Wine_Rhodochrosite,
        rock:Rhodochrosite,
        description:"Discover the unparalleled elegance of Rhodochrosite, a red wine of profound character. Its seductive notes of dark fruits and exotic spices intertwine like a passionate dance, while its smooth structure and lingering finish delight the palate with every sip. This wine pays homage to the gemstone of the same name, evoking its rare beauty and magnetic charm.",
    },  
    {
        id:2,
        name:'Sapphire',
        wine: Wine_Sapphire,
        rock:Sapphire,
        description:"Immerse yourself in the splendid world of Sapphire, a red wine that shines with deep blue brilliance. Its exquisite complexity, like the mysteries hidden at the heart of a gemstone, captivates you with seductive aromas and lush flavors. With each sip, Sapphire reveals its nobility, majestic character, and the ability to transport you to a realm of sensations.",
    }, 
    {
        id:3,
        name:'Emerald',
        wine: Wine_Emerald,
        rock:Emerald,
        description:"Delve into unparalleled luxury with Emerald, a red wine that glows with intense green radiance. Like a secret garden guarded by nature, this wine unfolds a profusion of fresh and vibrant flavors. Its enveloping aromas and elegant structure invite you on a journey filled with sophistication and delight. Emerald is a bottled treasure, a jewel that awakens the senses.",
    }, 
    {
        id:4,
        name:'Amethyst',
        wine: Wine_Amethyst,
        rock:Amethyst,
        description:"Discover serenity and charm in every sip of Amethyst, an unmatched beauty among red wines. Its deep purple tones evoke the majesty of the gemstone that bears its name. With its exquisite harmony of fruity flavors and subtle spicy notes, Amethyst captivates the senses and transports you to a state of relaxation and fascination.",
    }, 
    {
        id:5,
        name:'Onyx',
        wine: Wine_Onyx,
        rock:Onyx,
        description:"Immerse yourself in the mysterious allure of Onyx, a black-glowing red wine. Like a starlit night that ignites the imagination, this wine envelops you in a fusion of intense flavors and earthy undertones. Its deep character and solid structure awaken an indomitable passion with every drop, inviting you to explore the most enigmatic corners of your palate.",
    }, 
    {
        id:6,
        name:'Diamond',
        wine: Wine_Diamond,
        rock:Diamond,
        description:"Experience perfection in every sip of Diamond, a red wine with dazzling brilliance and impeccable cuts. Like a meticulously polished rough diamond, this wine displays brilliant complexity and an imposing structure. Its intense flavors and silky texture intertwine in a sublime dance, delivering an unparalleled delight and confirming its position at the pinnacle of prestigious wines.",
    }, 
    {
        id:7,
        name:'Ruby',
        wine: Wine_Ruby,
        rock:Ruby,
        description:"Immerse yourself in the passionate ardor of Ruby, a red wine that dazzles with its crimson intensity. Its juicy flavors of ripe red fruits and spicy notes captivate the palate, while its elegant structure and lingering finish reveal its seductive character. Like a fiery and precious gem, Ruby stands out in the firmament of the most exquisite wines, inviting you to live a memorable experience.",
    }, 
    {
        id:8,
        name:'Topaz',
        wine: Wine_Topaz,
        rock:Topaz,
        description:"Discover the golden luminosity of Topaz, a red wine that shines with captivating intensity. Its exotic aromas and complex character evoke the richness of the gemstone that bears its name. With each sip, Topaz unveils a perfect balance of fruity flavors, spicy undertones, and a sophisticated structure. This wine is a treasure in itself, capable of illuminating the most special moments with its unmatched splendor.",
    },   
  ]


export const getWineById = (id) => {
    const parsedId = parseInt(id);
    return ListWinesDetail.find((wine) => wine.id === parsedId);
};

