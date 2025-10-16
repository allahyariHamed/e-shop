'use client'
import Image from 'next/image';
import React, { FC } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type SlideProps = {
    description: string;
    image: string;
};

const Slide: FC<SlideProps> = ({ description, image }) => (
    <div className='p-1 text-center border border-violet-200 rounded shadow mx-1 lg:mx-2'>
        <Image src={image} alt={description} width={500} height={500} className='w-full rounded shadow h-full aspect-[4/5]' draggable="false" />
        <p className='text-xs px-2 py-1'>{description}</p>
    </div>
);

const CarouselComponent: FC = () => {
    return (

        <>
            <div className='font-bold text-xl py-10 text-center'>
                <span className='bg-black text-white px-5 py-1 rounded-full'>
                    New of the week
                </span>
            </div>

            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay={true}
                autoPlaySpeed={4000}
                centerMode={false}
                className="mx-auto"
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={true}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    xs: {
                        breakpoint: {
                            max: 449,
                            min: 0
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    sm: {
                        breakpoint: {
                            max: 767,
                            min: 450
                        },
                        items: 3,
                        partialVisibilityGutter: 30
                    },
                    md: {
                        breakpoint: {
                            max: 1023,
                            min: 768
                        },
                        items: 4,
                        partialVisibilityGutter: 30
                    },
                    lg: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 5,
                        partialVisibilityGutter: 40
                    },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >
                <Slide
                    description="React Carousel with Server Side Rendering Support – Part 2"
                    image="/assets/p1.jfif"
                />
                <Slide
                    description="React Carousel with Server Side Rendering Support – Part 1"
                    image="/assets/p3.jfif"
                />
                <Slide
                    description="React Carousel with Server Side Rendering Support – Part 1"
                    image="/assets/p4.jfif"
                />
                <Slide
                    description="React Carousel with Server Side Rendering Support – Part 1"
                    image="/assets/p5.jpg"
                />
                <Slide
                    description="React Carousel with Server Side Rendering Support – Part 1"
                    image="/assets/p6.jpg"
                />
                <Slide
                    description="React Carousel with Server Side Rendering Support – Part 1"
                    image="/assets/p7.jpg"
                />
                <Slide
                    description="React Carousel with Server Side Rendering Support – Part 1"
                    image="/assets/p8.jfif"
                />
                <Slide
                    description="React Carousel with Server Side Rendering Support – Part 1"
                    image="/assets/p9.jpg"
                />
            </Carousel>
        </>
    )
}

export default CarouselComponent