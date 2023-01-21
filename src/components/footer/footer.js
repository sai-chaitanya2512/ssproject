import React from 'react'
import style from "../../styles/footer/footer.module.scss"
import Footerpart1 from './footerpart1'
import Footerpart2 from './footerpart2'

const Footer = () => {
    return (
        <div className={style.whole}>

            <Footerpart1 />
            <Footerpart2/>

        </div>
    )
}

export default Footer