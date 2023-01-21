import React from 'react'
import style from "../../styles/footer/footerpart2.module.scss";
import { FacebookFilled, TwitterOutlined, GooglePlusOutlined, YoutubeFilled } from "@ant-design/icons"
const Footerpart2 = () => {
    return (
        <>
            <div className={style.whole}>

                <ul type="none">
                    <h3>SS Profiles</h3>

                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Feedback</li>
                    <li>FAQs</li>
                    <li>Careers</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>

                <ul type="none">
                    <h3>Business</h3>

                    <li>Add your business</li>
                    <li>Advertise with us</li>
                </ul>


                <ul type="none">
                    <h3>Quick Links</h3>
                    <li>Browse category</li>
                    <li>Search business</li>
                    <li>Login to your account</li>
                </ul>

                <div>
                    <h3>Mobile & Social</h3>

                    <FacebookFilled className={style.icon} />
                    <TwitterOutlined className={style.icon} />
                    <GooglePlusOutlined className={style.icon} />
                    <YoutubeFilled className={style.icon} />

                </div>
            </div>
            <div className={style.ender}>
                <p>Copyright © 2023, ssprofiles.in All rights reserved.</p>
            </div>
        </>
    )
}

export default Footerpart2