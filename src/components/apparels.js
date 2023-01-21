import React from 'react'
// import style from "../styles/apparels.module.scss"
import Navsticky from './navsticky'
import Weekpopular from "../components/weekpopular";
import Footerpart2 from './footer/footerpart2';

const Apparels = () => {
    return (
        <div className="whole">
            <Navsticky placeholder='Apparels & Accessories' />
            <Weekpopular heading="Best results of Apparels & Accessories near Hyderabad"/>
            <Footerpart2 />


        </div>
    )
}

export default Apparels