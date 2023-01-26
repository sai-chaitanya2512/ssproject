import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "../../styles/banner/nav.module.scss"
import "../../styles/navsticky.css"
import "../banner/bannerfooter"

const Navbar = () => {


    // const [show, setshow] = useState(false)

    localStorage.setItem("key", "false")


    const sample = localStorage.getItem("key")


    const oncli = () => {



        if (sample == "false") {
            setTimeout(() => {

                localStorage.setItem("key", "true")

            }, 3000);
        }


        setTimeout(() => {
            localStorage.setItem("key", "false")

        }, 2000);


    }

    return (
        <>
            <div className={style.whole}>

                <a className={style.imageoutter} href="/"><img className={style.sslogo} src='https://res.cloudinary.com/dli6rliuj/image/upload/v1674120140/SS_Logo_1Png_azyohq.png' /></a>


                <div className={style.end}>
                    <Link to="/addbusiness">Add a Business</Link>
                    <Link onClick={oncli}>Categories</Link>
                    {/* <Link to="n/">Categories</Link> */}
                    {/* <Link to="/myaccount">My Account</Link> */}
                    <a href='#contact' >Enquiry</a>

                </div>

            </div>

        </>


    )
}

export default Navbar