import React from 'react';
import "./deliverycollections.css";
import Slider from "react-slick";
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import DeliveryItem from './deliveryItem';

const deliveryItems = [
    {
        id: 1,
        title: "Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"

    },
    {
        id: 2,
        title: "Biryani",
        cover: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"

    },
    {
        id: 3,
        title: "Chicken",
        cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"

    },
    {
        id: 4,
        title: "Fried Rice",
        cover: "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png"

    },
    {
        id: 5,
        title: "Veg Meal",
        cover: "https://b.zmtcdn.com/data/dish_photos/bda/9cdab6d5f275b8d2532e3878134ddbda.jpg"

    },
    {
        id: 6,
        title: "Paratha",
        cover: "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"

    },
    {
        id: 7,
        title: "Cake",
        cover: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"

    },
    {
        id: 8,
        title: "North Indian",
        cover: "https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"

    },
    {
        id: 9,
        title: "Thali",
        cover: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"

    },
    {
        id: 10,
        title: "Noodles",
        cover: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"

    },
    {
        id: 11,
        title: "Dosa",
        cover: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"

    },
    {
        id: 12,
        title: "Chili Chicken",
        cover: "https://b.zmtcdn.com/data/dish_images/2de9197c25059c0d61efc8566c6919961615960350.png"

    },
]

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
};

const DeliveryCollections = () => {
    return (
        <div className='delivery-collections'>
            <div className='max-width'>
                <div className='collection-title'>Eat what makes you happy</div>
                <Slider {...settings}>
                    {
                        deliveryItems.map((item) => {
                            return <DeliveryItem item={item}/>
                        })
                    }
                </Slider>

            </div>

        </div>
    )
}

export default DeliveryCollections;
