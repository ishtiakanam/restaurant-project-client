import img1 from '../../src/assets/home/slide1.jpg'
import img2 from '../../src/assets/home/slide2.jpg'
import img3 from '../../src/assets/home/slide3.jpg'
const RecomendCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img1} alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions">
                        <button className="btn text-yellow-300 bg-gray-500">Add to cart</button>
                    </div>
                </div>
            </div>

            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img2} alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions">
                        <button className="btn text-yellow-300 bg-gray-500">Add to cart</button>
                    </div>
                </div>
            </div>

            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img3} alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Caeser Salad</h2>
                    <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <div className="card-actions">
                        <button className="btn text-yellow-300 bg-gray-500">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecomendCard;