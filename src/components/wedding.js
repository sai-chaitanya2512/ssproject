import React from 'react'
// import style from "../styles/apparels.module.scss"
import Navsticky from './navsticky'
import Weekpopular from "../components/weekpopular";
import Footerpart2 from './footer/footerpart2';

const Wedding = () => {
    return (
        <div className="whole">
            <Navsticky placeholder='Wedding and Events' />
            <Weekpopular heading="Best results of Wedding and Events near Hyderabad"/>
            <Footerpart2 />


        </div>
    )
}

export default Wedding  