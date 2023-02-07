import CategoriesCard from "../CategoriesCard/CategoriesCard"
import Card from "../Card/Card"
import { Link } from "react-router-dom"



export const categories = [
    {
        id : 1,
        title : 'EVERYDAY VALUE',
        img : './assets/imgs/krunchBurger.jpg',
        link : 'category/everyday-value'
    },
    {
        id : 2,
        title : 'AL CARTE & COMBOS',
        img : './assets/imgs/alaCrateCombo.jpg'
    },
    {
        id : 3,
        title : 'SIGNATURE BOXES',
        img : './assets/imgs/duoBox.jpg'
    },
    {
        id : 4,
        title : 'SHARING',
        img : './assets/imgs/sharing.jpg'
    },
    {
        id:5,
        title : 'MIDNIGHT',
        img : './assets/imgs/midNight.jpg'
    },
    {
        id: 6,
        title : 'SNACKS AND BEVERAGES',
        img : './assets/imgs/ricenspice.jpg'
    }
    
]


export const cardContent = [
    {
        id: 1,
        title : 'Krunch Burger',
        price : 250,
        description : 'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
        img : './assets/imgs/krunchBurger.jpg'
    },
    {
        id: 2,
        title : 'Midnight Deal 3',
        price : 640,
        description : 'Mighty Zinger + regular drink',
        img : './assets/imgs/midNight.jpg'
    },
    {
        id: 3,
        title : 'Rice N Spice',
        price : 320,
        description : 'Spiced, buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce',
        img : './assets/imgs/ricenspice.jpg'
    },
    {
        id: 3,
        title : 'Krunch With Fries N Drink',
        price : 470,
        description : 'Krunch + 1 regular Fries + 1 regular Drink',
        img : './assets/imgs/alaCrateCombo.jpg'
    }

]

export const sectionContent = [
    {
        id: 1,
        title : 'Browse Categories',
        content : <CategoriesCard categories={categories} />
    },
    {
        id : 2,
        title : 'Top Selling',
        content : <Card cardContent={cardContent}/>
    }

]

export const sectionContentEveryday = [
    {
        id : 1,
        title : 'Everyday Value',
        content : <Card cardContent={cardContent}/>  
    }
]

export const mediaLogos = [
    {
        id : 1,
        img : './assets/imgs/youtube.png',
        link : "https://www.youtube.com/channel/UCg4hfdWApV0Uea6aFW7PZUg"
    },
    {
        id : 2,
        img : './assets/imgs/instagram.png',
        link : "https://www.instagram.com/kfcpakistanofficial/?hl=en"
    },
    {
        id : 3,
        img : './assets/imgs/facebook.png',
        link : "https://www.facebook.com/KFCPakistan/"
    }

]

export const footerTags = [
    {
        id: 1,
        title : 'Information',
        li : [
            <li><Link to='/'>About Us</Link></li>,
            <li><Link to='/'>Mitao Bhook</Link></li>,
            <li><Link to='/'>Mitao Bhook - Scholarship</Link></li>,
            <li><Link to='/'>Privacy Policy</Link></li>,
            <li><Link to='/'>Careers</Link></li>
        ]
    },
    {
        id: 1,
        title : 'Locations',
        li : [
            <li><Link to='/'>Contact Us</Link></li>
        ]
    },
    {
        id: 1,
        title : 'Get in Touch',
        li : [
            <li><Link to='/'>Terms & Conditions</Link></li>
        ]
    }

]

export const Tags =[
    {
        id : 1,
        title : 'Everyday Value'
    },
    {
        id : 2,
        title : 'Ala carte & Combos'
    },
    {
        id : 3 ,
        title : 'Signature Boxes'
    },
    {
        id : 4 ,
        title : 'Sharing'
    },
    {
        id : 5 ,
        title : 'Snacks & Beverages '
    },
    {
        id : 6,
        title : 'Midnight'
    }
    

]