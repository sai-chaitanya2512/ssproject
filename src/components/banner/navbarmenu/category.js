import React from 'react'
import { useState } from 'react'
import Footerpart2 from '../../footer/footerpart2'
import Navsticky from '../../navsticky'
import objectarray from "../../../components/categoryobjects"
import style from "../../../styles/banner/navbarmenu/category.module.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Slider from "react-slick";


const Category = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    const [filtered, setfiltered] = useState(objectarray);

    console.log(filtered);

    const singleselect = (event) => {
        const { name } = objectarray;
        const fil = filtered.filter(() => {
            return name.slice(0, 1) == event.target.name
        })
    }





    return (
        <div className={style.whole}>
            <Navsticky />
            <div className={style.inner}>
                <div className={style.filter}>
                    <h3>Categories</h3>

                    <ul>
                        <li><a href='#'><span>All</span></a></li>
                        <li><a name="A" href="#">A</a></li>
                        <li><a href="#">B</a></li>
                        <li><a href="#">C</a></li>
                        <li><a href="#">D</a></li>
                        <li><a href="#">E</a></li>
                        <li><a href="#">F</a></li>
                        <li><a href="#">G</a></li>
                        <li><a href="#">H</a></li>
                        <li><a href="#">I</a></li>
                        <li><a href="#">J</a></li>
                        <li><a href="#">K</a></li>
                        <li><a href="#">L</a></li>
                        <li><a href="#">M</a></li>
                        <li><a href="#">N</a></li>
                        <li><a href="#">O</a></li>
                        <li><a href="#">P</a></li>
                        <li><a href="#">Q</a></li>
                        <li><a href="#">R</a></li>
                        <li><a href="#">S</a></li>
                        <li><a href="#">T</a></li>
                        <li><a href="#">U</a></li>
                        <li><a href="#">V</a></li>
                        <li><a href="#">W</a></li>
                        <li><a href="#">X</a></li>
                        <li><a href="#">Y</a></li>
                        <li><a href="#">Z</a></li>
                    </ul>


                </div>


                <div className={style.centered}>

                    {filtered.map((e) => {
                        return (
                            <div className={style.bar}>{e.name}</div>
                        )


                    })}


                </div>

            </div>

            <Footerpart2 />

            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>


        </div>
    )
}

export default Category