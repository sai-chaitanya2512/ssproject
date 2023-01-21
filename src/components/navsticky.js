import React from 'react'
import style from "../styles/navsticky.module.scss"
import { SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Navsticky = (prop) => {
    return (
        <div className={style.whole}>

            <div className={style.start}>
                <Link to="/"><img className={style.sslogo} src='https://res.cloudinary.com/dli6rliuj/image/upload/v1674120140/SS_Logo_1Png_azyohq.png' /></Link>
            </div>

            <div className={style.center}>

                <input placeholder={prop.placeholder} />

                <div>
                    <img className={style.locationimg} src='http://yellowpages.in/images/location.png' />
                    <select>
                        <option>Visakhapatnam</option>
                        <option>hyderabad</option>
                        <option>hyderabad</option>
                        <option>hyderabad</option>
                        <option>hyderabad</option>
                        <option>hyderabad</option>
                        <option>hyderabad</option>
                    </select>
                    <SearchOutlined className={style.searcher} />
                </div>
            </div>

            <div className={style.end}>
                <Link to="/addbusiness">Add a Business</Link>
                <Link to="/category">Categories</Link>
                {/* <Link to="/myaccount">My Account</Link> */}

            </div>



        </div>
    )
}

export default Navsticky