import React from 'react'
// import style from "../styles/apparels.module.scss"
import Navsticky from './navsticky'
import Weekpopular from "../components/weekpopular";
import Footerpart2 from './footer/footerpart2';

const Printing = () => {
    return (
        <div className="whole">
            <Navsticky placeholder='Printing and Stationaries' />
            <Weekpopular heading="Best results of Printing and Stationaries near Hyderabad" />
            <Footerpart2 />


        </div>
    )
}

export default Printing  