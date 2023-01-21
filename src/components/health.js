import React from 'react'
// import style from "../styles/apparels.module.scss"
import Navsticky from './navsticky'
import Weekpopular from "../components/weekpopular";
import Footerpart2 from './footer/footerpart2';

const Health = () => {
    return (
        <div className="whole">
            <Navsticky placeholder='Health' />
            <Weekpopular heading="Best results of Health near Hyderabad" />
            <Footerpart2 />


        </div>
    )
}

export default Health