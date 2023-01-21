import React from 'react'
// import style from "../styles/apparels.module.scss"
import Navsticky from './navsticky'
import Weekpopular from "../components/weekpopular";
import Footerpart2 from './footer/footerpart2';

const Beauty = () => {
    return (
        <div className="whole">
            <Navsticky placeholder='Beauty and Wellness' />
            <Weekpopular heading="Best results of Beauty and Wellness near Hyderabad"/>
            <Footerpart2 />


        </div>
    )
}

export default Beauty