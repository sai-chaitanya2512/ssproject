import React from 'react'
import style from "../../../styles/banner/navbarmenu/myaccount.module.scss";
import Footerpart2 from '../../footer/footerpart2';
import Navsticky from '../../navsticky';

const MyAccount = () => {
    return (
        <div className={style.whole}>
            <Navsticky />
            <form>
                <h3>Already Member? Login Here</h3>

                <input placeholder='Email/Mobile*' />
                <input placeholder='Password*' />

                <div><input type="checkbox" />  Remember Me</div>

                <a href="#">Forgot Me</a>

                <button className={style.loginbtn}>Login</button>


                <div className={style.lines}> <div /> OR <div /> </div>

            <span>New user? <a href='#'>Register Now</a></span>
            </form>



            <Footerpart2 />
        </div>
    )
}

export default MyAccount