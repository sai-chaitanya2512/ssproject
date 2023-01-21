import React from 'react'
// import style from "../styles/apparels.module.scss"
import Navsticky from './navsticky'
import Weekpopular from "../components/weekpopular";
import Footerpart2 from './footer/footerpart2';

const Food = () => {
    return (
        <div className="whole">
            <Navsticky placeholder='Food and Beverage' />
            <Weekpopular heading="Best results of Food and Beverage near Hyderabad"/>
            <Footerpart2 />


        </div>
    )
}

export default Food