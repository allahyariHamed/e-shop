'use client'
import React, { useEffect, useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const itemData = [
    {
        img: '/assets/download.jfif',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: '/assets/download1.jfif',
        title: 'Breakfast',
        rows: 1,
        cols: 1,
    },
    {
        img: '/assets/download2.jfif',
        title: 'Breakfast',
        rows: 1,
        cols: 1,
    },
    {
        img: '/assets/images.jfif',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: '/assets/images1.jfif',
        title: 'Breakfast',
        rows: 1,
        cols: 2,
    },
    {
        img: '/assets/images2.jfif',
        title: 'Breakfast',
        rows: 1,
        cols: 2,
    },
];


const ImageSlider = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className='px-2'>
            <ImageList variant="quilted" cols={4} rowHeight={121}>
                {
                    itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item?.cols ?? 1} rows={item.rows ?? 1}>
                            <Image
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                                fill
                                className='rounded'
                            />
                        </ImageListItem>
                    ))
                }
            </ImageList>
        </div>
    )
}
export default ImageSlider