import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import swipper1 from '../../assets/home/slide1.jpg';
import swipper2 from '../../assets/home/slide2.jpg';
import swipper3 from '../../assets/home/slide3.jpg';
import swipper4 from '../../assets/home/slide4.jpg';
import swipper5 from '../../assets/home/slide5.jpg';
import SectionTitle from '../Shared/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle subHeading={"---From 11:00am to 10:00pm---"} heading={"ORDER ONLINE"}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={swipper1} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-12'>Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={swipper2} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-12'>Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide><img src={swipper3} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-12'>Soups</h2>
                </SwiperSlide>
                <SwiperSlide><img src={swipper4} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-12'>Desserts</h2>
                </SwiperSlide>
                <SwiperSlide><img src={swipper5} alt="" />
                    <h2 className='text-4xl uppercase text-center -mt-12'>Salads</h2>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;