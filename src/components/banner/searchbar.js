import React from 'react'
import { SearchOutlined } from "@ant-design/icons"
import style from "../../styles/banner/searchbar.module.scss"
const Searchbar = () => {


    return (
        <div className={style.whole}>
            <h1>#1 STOP SOLUTIONS FOR ALL YOUR NEEDS</h1>



            {/* <div className={style.center}>

                <input placeholder='Search local bussiness in India' />

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
                    <SearchOutlined className={style.searcher}/>
                </div>


            </div> */}




        </div>
    )
}

export default Searchbar