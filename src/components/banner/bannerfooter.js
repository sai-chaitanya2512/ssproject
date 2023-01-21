import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from "../../styles/banner/bannerfooter.module.scss";

const Bannerfooter = () => {

    const services = [
        {
            img: "http://www.yellowpages.in/assets/category/apparels-and-accessories.png",
            name: "Apparels & Accessories",
            topath: "/apparels"
        },
        {
            img: "http://www.yellowpages.in/assets/category/food-and-beverages.png",
            name: "Food & Beverages",
            topath: "/food"
        },
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674125510/manpower_esk7cx.png",
            name: "Man Power",
            topath: "/beauty"
        },
        {
            img: "http://www.yellowpages.in/assets/category/education.png",
            name: "Education",
            topath: "/education"
        },
        {
            img: "http://www.yellowpages.in/assets/category/health.png",
            name: "Health",
            topath: "/health"
        },
        {
            img: "http://www.yellowpages.in/assets/category/wedding-and-events.png",
            name: "Wedding & Events",
            topath: "/wedding"
        },
        {
            img: "http://www.yellowpages.in/assets/category/printing-and-stationaries.png",
            name: "Printing & Stationaries",
            topath: "/printing"
        },
    ]



    const check = localStorage.getItem("key")
    // setInterval(() => {


    console.log(check);

    // }, 1000);

    useEffect(() => {

        if (check == "true") {
            console.log(12);
            const i = document.querySelectorAll("img")
            console.log(i);
        }
    }, [check])







    // function blink() {

    //     setTimeout(() => {

    //         const allimages = document.querySelectorAll(".img")
    //         allimages.forEach(element => {
    //             element.style.backgroundcolor = "skyblue"
    //         });

    //     }, 1000);
    // }

    return (
        <div className={style.whole}>

            <div className={style.inner}>
                {services.map((e) => {
                    return (
                        <Link className={style.link} to={e.topath}>
                            <div className={style.particular} >
                                <img className={style.img} src={e.img} width="90%" />
                                <p>{e.name}</p>
                            </div>
                        </Link>
                    )
                })

                }



            </div>


        </div>
    )
}

export default Bannerfooter