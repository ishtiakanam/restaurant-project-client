const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-12 rounded-2xl mt-12 px-2">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        {/* <button className="btn btn-primary">Add to cart</button> */}
                        <button className="btn btn-outline bg-slate-100  border-0 border-b-4 border-orange-400 text-black">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;