import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Pagination } from "swiper";
import ChefCard from './ChefCard';

const AllChefSlider = () => {

    const [allChef, setAllChef] = useState([]);

    useEffect(()=>{

        fetch('https://awesome-chef-recipe-server.vercel.app/all-chef')
        .then(res => res.json())
        .then(data => setAllChef(data))


    }, [])

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={90}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    allChef.length === 0? 
                    <button className="btn loading bg-orange-500 m-8">loading</button> 
                    :
                    

                    allChef.map(chef=> <SwiperSlide  key={chef.id}><ChefCard chef={chef}></ChefCard></SwiperSlide>)
                }
            </Swiper>
            
        </div>
    );
};

export default AllChefSlider;