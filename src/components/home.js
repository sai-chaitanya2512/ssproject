import React from 'react'
import Banner from './banner/Banner';
import Footer from './footer/footer.js';
import Corousel from './corousel';
import Weekpopular from './weekpopular';

const Home = () => {
    return (
        <div>
            <Banner />
            <Corousel />
            {/* <h1>Popular this week</h1> */}
            <Weekpopular heading="Popular this week" />
            <Footer />
        </div>
    )
}

export default Home