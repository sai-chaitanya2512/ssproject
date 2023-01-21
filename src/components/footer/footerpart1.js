import React from 'react'
import style from "../../styles/footer/footerpart1.module.scss"
import phonepic from "../../media/phonepic.png"
import playstore from "../../media/playstore.png"
import iphone from "../../media/iphone.png"
import { Button } from 'antd'

const Footerpart1 = () => {
    return (
        <div id='contact' className={style.whole}>

            <div className={style.sider}>

                <h1><span>SS Profiles</span> on the go</h1>
                <p>  Download our mobile application to search for any business on the go</p>

            </div>

            <div className={style.formdiv}>

                <h2>CONTACT US</h2>


                <form>
                    <div>
                        <div className={style.address} >


                            <img className={style.icons} src="https://res.cloudinary.com/dli6rliuj/image/upload/v1674198608/icons8-place-marker-50_b9ojoy.png" />

                            <p>4-25/5, F5 , BZone , Ramkrishnaplaza , Sujathanagar, Visakhapatnam-530051</p>

                        </div>
                        <br />
                        <div className={style.email} >


                            <img className={style.icons} src="https://res.cloudinary.com/dli6rliuj/image/upload/v1674198788/website_nvfmvv.png" />

                            <p>www.ssprofiles.in</p>

                        </div>
                        <br />
                        <div className={style.phonenumber} >


                            <img className={style.icons} src="https://res.cloudinary.com/dli6rliuj/image/upload/v1674198968/phone_cnuh6s.png" />

                            <div>
                                <p>+919182351013</p>  <p>+919392252575</p>  <p>+919182632215</p>
                            </div>

                        </div>
                    </div>

                    {/* <div className={style.rightdivoutter}> */}
                        <div className={style.rightdiv}>

                            <div className={style.namesidediv}>Name :-</div>
                            <div><input className={style.nameinp} /></div>
                            <div className={style.phonesidediv}>Phone No. :-</div>
                            <div><input className={style.phoneinp} /></div>
                            <div className={style.emailsidediv}>Email :-</div>
                            <div><input className={style.emailinp} /></div>
                            <div className={style.feedbacksidediv}>Feedback :-</div>
                            <div><input className={style.feedbackinp} /></div>
                            <div></div>
                        <button type="submit" className={style.sendbtn}>SUBMIT</button>
                            

                        </div>
                    {/* </div> */}



                </form>


            </div>

            {/* <img src={phonepic} /> */}

        </div>
    )
}

export default Footerpart1