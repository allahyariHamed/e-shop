'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import { Autoplay, EffectFade } from 'swiper/modules';

const Slider = () => {
    const slides = ["bg1", "bg2", "bg3"];
    return (
        <Swiper
            // modules={[EffectFade, Autoplay]}
            // effect="fade"
            // spaceBetween={50}
            // slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className='fixed top-0 left-0 bg-amber-400 w-full'
            autoplay={{ delay: 1000 }}
            loop
        >
            {slides.map((src, i) => (
                <SwiperSlide key={i}>
                    <span>{src}</span>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
export default Slider;