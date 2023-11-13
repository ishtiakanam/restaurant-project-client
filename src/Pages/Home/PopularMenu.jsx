import SectionTitle from "../Shared/SectionTitle";
import MenuItem from "../Shared/MenuItem";
import UseMenu from "../../Components/UseMenu";

const PopularMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section>
            <SectionTitle
                heading="FROM OUR MENU"
                subHeading="---Check it out---"
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 text-black">View Full Menu</button>

        </section>
    );
};

export default PopularMenu;