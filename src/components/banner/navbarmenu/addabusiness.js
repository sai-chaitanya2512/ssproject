import React from 'react'
import style from "../../../styles/banner/navbarmenu/addabusiness.module.scss"
import Navsticky from "../../navsticky"
import Footerpart2 from '../../footer/footerpart2'
const AddaBusiness = () => {
    return (
        <div className={style.whole}>
            <Navsticky />
            <div className={style.middle}>

                <div className={style.heading}>
                    <h3>Market your business</h3>
                    <h5>Get listed and Grow</h5>
                </div>

                <div className={style.businessfeatures}>

                    <p>List your business phone, mobile and other contact information, directions, Business offers and other relevant information to have wide and varied customer base.</p>


                    <div className={style.posters}>
                        <div className={style.poster1}>
                            <h4>Get overview</h4>
                            <div></div>
                        </div>
                        <div className={style.poster2}>
                            <h4>Provide Info</h4>
                            <div></div>
                        </div>
                        <div className={style.poster3}>
                            <h4>Add Business</h4>
                            <div></div>
                        </div>
                    </div>

                    <button className={style.listedbtn}>Get listed now</button>
                </div>


                <div className={style.heading1}>
                    <h4>Benefits of listing with us</h4>
                    <p>You would get wide variety of features and facilities to easy out your business hiccups and to reach maximum customers. You would get an end-to-end solution which includes listing, getting leads, managing business, and users.</p>
                </div>

                <div className={style.facility}>

                    <div>
                        <h4>360<sup>o</sup> vr VIDEO</h4>
                        <p>360 VR video is for providing your customer and overview of your business premises even before they visit business premise</p>
                    </div>

                    <div>
                        <h4>Merchant Pannel</h4>
                        <p>Merchant panel to manage business infor, offers, coupons, check reports etc.</p>
                    </div>

                    <div>
                        <h4>Video</h4>
                        <p>Video reviews from real customers to establish trust amoung users and to provide authentic information to users</p>
                    </div>

                    <div>
                        <h4>Personalised page</h4>
                        <p>Personalised page to maintain your company related info, jobs etc.</p>
                    </div>


                </div>
                <button className={style.listedbtn} style={{marginBottom:"2rem"}}>Get listed now</button>


            </div>

            <Footerpart2 />



        </div>
    )
}

export default AddaBusiness