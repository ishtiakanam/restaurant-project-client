import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import UseMenu from '../../Components/UseMenu';
import SectionTitle from '../Shared/SectionTitle';
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu] = UseMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu" />
            <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} title={"Dessert"} img={dessertImg} />
            <MenuCategory items={pizza} title={"Pizza"} img={pizzaImg} />
            <MenuCategory items={soup} title={"Soup"} img={soupImg} />
            <MenuCategory items={salad} title={"Salad"} img={saladImg} />
        </div>
    );
};

export default Menu;