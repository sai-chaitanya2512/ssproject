import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from "../../styles/banner/bannerfooter.module.scss";

const Bannerfooter = () => {

    const services = [
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674296787/apparels-and-accessories_qfxt53.png",
            name: "Apparels & Accessories",
            topath: "/apparels"
        },
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674296787/food-and-beverages_qdzmub.png",
            name: "Food & Beverages",
            topath: "/food"
        },
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674125510/manpower_esk7cx.png",
            name: "Man Power",
            topath: "/beauty"
        },
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674296787/education_vzai1f.png",
            name: "Education",
            topath: "/education"
        },
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674296787/health_kcgsc7.png",
            name: "Health",
            topath: "/health"
        },
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674296787/wedding-and-events_txlijv.png",
            name: "Wedding & Events",
            topath: "/wedding"
        },
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674296871/printing-and-stationaries_q58ytz.png",
            name: "Printing & Stationaries",
            topath: "/printing"
        },
    ]



    const check = localStorage.getItem("key")

    console.log(check);


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