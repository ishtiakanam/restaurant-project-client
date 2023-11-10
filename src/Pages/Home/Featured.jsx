import SectionTitle from "../Shared/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="text-white pt-8 my-20 bg-fixed" style={{ backgroundImage: `url(${featuredImg})` }}>
            {/* <div className="featured-item"> */}
            <SectionTitle
                subHeading="---Check it out---"
                heading="FEATURED HOME"
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center py-20 px-36 gap-5">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div >
                    <p className="uppercase">March 20, 2023 </p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-black">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;