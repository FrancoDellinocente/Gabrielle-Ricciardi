import Wine_Rhodochrosite from '../../assets/img/Wines/Wine_Rhodochrosite.png';
import Wine_Sapphire from '../../assets/img/Wines/Wine_Sapphire.png';
import Wine_Emerald from '../../assets/img/Wines/Wine_Emerald.png';
import Wine_Amethyst from '../../assets/img/Wines/Wine_Amethyst.png';
import Wine_Onyx from '../../assets/img/Wines/Wine_Onyx.png';
import Wine_Diamond from '../../assets/img/Wines/Wine_Diamond.png';
import Wine_Ruby from '../../assets/img/Wines/Wine_Ruby.png';
import Wine_Topaz from '../../assets/img/Wines/Wine_Topaz.png';

// eslint-disable-next-line react-refresh/only-export-components
const  ListWinesDetail = [
    {
        id:1,
        name:'Rhodochrosite',
        wine: Wine_Rhodochrosite,
        description:"Discover the unparalleled elegance of Rhodochrosite, a red wine of profound character. Its seductive notes of dark fruits and exotic spices intertwine like a passionate dance, while its smooth structure and lingering finish delight the palate with every sip. This wine pays homage to the gemstone of the same name, evoking its rare beauty and magnetic charm.",
        varietal:"100% Malbec.",
        notes:"This distinguished wine showcases the full-bodied richness and velvety texture of the Malbec grape. With its deep purple color and complex flavors of black fruits, cocoa, and hints of violet, Rhodochrosite embodies the essence of prestige and refinement.",
    },  
    {
        id:2,
        name:'Sapphire',
        wine: Wine_Sapphire,
        description:"Immerse yourself in the splendid world of Sapphire, a red wine that shines with deep blue brilliance. Its exquisite complexity, like the mysteries hidden at the heart of a gemstone, captivates you with seductive aromas and lush flavors. With each sip, Sapphire reveals its nobility, majestic character, and the ability to transport you to a realm of sensations.",
        varietal:"80% Cabernet Sauvignon, 20% Merlot.",
        notes:"This captivating blend combines the power and structure of Cabernet Sauvignon with the elegance and smoothness of Merlot. Sapphire reveals deep layers of blackberry, cassis, and cedar, creating an enchanting experience that reflects its prestigious name.",
    }, 
    {
        id:3,
        name:'Emerald',
        wine: Wine_Emerald,
        description:"Delve into unparalleled luxury with Emerald, a red wine that glows with intense green radiance. Like a secret garden guarded by nature, this wine unfolds a profusion of fresh and vibrant flavors. Its enveloping aromas and elegant structure invite you on a journey filled with sophistication and delight. Emerald is a bottled treasure, a jewel that awakens the senses.",
        varietal:"100% Pinot Noir.",
        notes:"Delicate and nuanced, Emerald is a pure expression of the renowned Pinot Noir grape. With its vibrant red fruit aromas, subtle earthiness, and silky tannins, this wine embodies grace, sophistication, and the prestige associated with its name.", 
    }, 
    {
        id:4,
        name:'Amethyst',
        wine: Wine_Amethyst,
        description:"Discover serenity and charm in every sip of Amethyst, an unmatched beauty among red wines. Its deep purple tones evoke the majesty of the gemstone that bears its name. With its exquisite harmony of fruity flavors and subtle spicy notes, Amethyst captivates the senses and transports you to a state of relaxation and fascination.",
        varietal:"90% Syrah, 10% Grenache.",
        notes:"Amethyst showcases the boldness and depth of Syrah, while the touch of Grenache adds elegance and finesse. With its dark fruit flavors, pepper spice, and velvety texture, this wine exemplifies the allure and sophistication of its namesake gemstone.",
    }, 
    {
        id:5,
        name:'Onyx',
        wine: Wine_Onyx,
        description:"Immerse yourself in the mysterious allure of Onyx, a black-glowing red wine. Like a starlit night that ignites the imagination, this wine envelops you in a fusion of intense flavors and earthy undertones. Its deep character and solid structure awaken an indomitable passion with every drop, inviting you to explore the most enigmatic corners of your palate.",
        varietal:"100% Petite Sirah.",
        notes:"Onyx is a powerhouse of a wine, with intense flavors and a robust structure. The Petite Sirah grape contributes to its inky color, full-bodied profile, and rich notes of blackberry, black pepper, and dark chocolate. This wine is as captivating and mysterious as the gemstone it is named after.",
    }, 
    {
        id:6,
        name:'Diamond',
        wine: Wine_Diamond,
        description:"Experience perfection in every sip of Diamond, a red wine with dazzling brilliance and impeccable cuts. Like a meticulously polished rough diamond, this wine displays brilliant complexity and an imposing structure. Its intense flavors and silky texture intertwine in a sublime dance, delivering an unparalleled delight and confirming its position at the pinnacle of prestigious wines.",
        varietal:"100% Cabernet Franc.",
        notes:"Diamond showcases the elegance and finesse of Cabernet Franc. With its vibrant ruby color, aromatic bouquet of red berries, and refined tannins, this wine shines with precision and sophistication, just like a finely cut diamond.",
    }, 
    {
        id:7,
        name:'Ruby',
        wine: Wine_Ruby,
        description:"Immerse yourself in the passionate ardor of Ruby, a red wine that dazzles with its crimson intensity. Its juicy flavors of ripe red fruits and spicy notes captivate the palate, while its elegant structure and lingering finish reveal its seductive character. Like a fiery and precious gem, Ruby stands out in the firmament of the most exquisite wines, inviting you to live a memorable experience.",
        varietal:"70% Tempranillo, 30% Garnacha.",
        notes:"Ruby blends the classic Spanish varietals of Tempranillo and Garnacha to create a wine of exceptional character. It reveals layers of ripe red fruit, baking spices, and a touch of leather, embodying the passionate spirit and allure associated with rubies.",
    }, 
    {
        id:8,
        name:'Topaz',
        wine: Wine_Topaz,
        description:"Discover the golden luminosity of Topaz, a red wine that shines with captivating intensity. Its exotic aromas and complex character evoke the richness of the gemstone that bears its name. With each sip, Topaz unveils a perfect balance of fruity flavors, spicy undertones, and a sophisticated structure. This wine is a treasure in itself, capable of illuminating the most special moments with its unmatched splendor.",
        varietal:"100% Merlot.",
        notes:"Topaz is a pure expression of the luscious Merlot grape. With its deep garnet hue, velvety texture, and flavors of ripe plum, black cherry, and chocolate, this wine showcases the opulence and luxuriousness that its name implies.",
    },   
  ]


export const getWineById = (id) => {
    const parsedId = parseInt(id);
    return ListWinesDetail.find((wine) => wine.id === parsedId);
};

