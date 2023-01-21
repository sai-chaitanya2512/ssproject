import React from 'react'
// import style from "../styles/apparels.module.scss"
import Navsticky from './navsticky'
import Weekpopular from "../components/weekpopular";
import Footerpart2 from './footer/footerpart2';

const Logistics = () => {
    return (
        <div className="whole">
            <Navsticky placeholder='Logistics Services' />
            <Weekpopular heading="Best results of Logistics Services near Hyderabad"/>
            <Footerpart2 />


        </div>
    )
}

export default Logistics 