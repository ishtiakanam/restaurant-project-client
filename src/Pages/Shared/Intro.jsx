import introLogo from '../../assets/home/chef-service.jpg'
const Intro = () => {
    return (
        <div className="hero h-[60vh] mb-10 " style={{ backgroundImage: `url(${introLogo})` }}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className=" bg-white text-black max-w-4xl mx-auto p-20">
                    <h1 className="mb-5 text-4xl ">Bistro Boss</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Intro;