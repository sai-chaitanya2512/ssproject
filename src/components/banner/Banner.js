import React from 'react'
import stylebanner from "../../styles/banner/Banner.module.scss"
import Bannerfooter from './bannerfooter'
import Navbar from './navbar'
import Searchbar from './searchbar'
import { Carousel } from 'antd';

const Banner = () => {
    const contentStyle = {
        height: '52.2rem',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        // background: '',
        dots: false,
    };
    return (
        <>

            <Carousel className={stylebanner.courosal} autoplay dots={false}>
                <div>
                    <div className={stylebanner.contentdivs}  style={contentStyle}>
                        <img className={stylebanner.courosalimage} src="https://res.cloudinary.com/dli6rliuj/image/upload/v1674125882/pexels-pixabay-356036_tuqhgp.jpg" />
                    </div >
                </div>
                <div>
                    <div className={stylebanner.contentdivs}  style={contentStyle}>
                    <img className={stylebanner.courosalimage} src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2023/01/eshwar-4uedrhp2cwk-unsplash.jpg" />
                    </div >
                </div>
                <div>
                    <div className={stylebanner.contentdivs}  style={contentStyle}>
                    <img className={stylebanner.courosalimage} src="https://images.unsplash.com/photo-1595650317500-4305e341ebcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" />
                    </div >
                </div>
                <div>
                    <div className={stylebanner.contentdivs}  style={contentStyle}>
                    <img className={stylebanner.courosalimage} src="https://res.cloudinary.com/dli6rliuj/image/upload/v1674130507/juva-transformed_nvhiwz.jpg" />
                    </div >
                </div>
            </Carousel>


            <div className={stylebanner.whole}>

                <Navbar />
                <Searchbar />
                <Bannerfooter />


            </div>



        </>

    )
}

export default Banner