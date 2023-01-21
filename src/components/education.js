import React from 'react'
// import style from "../styles/apparels.module.scss"
import Navsticky from './navsticky'
import Weekpopular from "../components/weekpopular";
import Footerpart2 from './footer/footerpart2';

const Education = () => {
    return (
        <div className="whole">
            <Navsticky placeholder='Education' />
            <Weekpopular heading="Best results of Education near Hyderabad"/>
            <Footerpart2 />


        </div>
    )
}

export default Education