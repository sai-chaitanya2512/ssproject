import React from 'react'
import style from "../styles/corousel.module.scss"
import { StarOutlined,StarFilled, CheckOutlined } from "@ant-design/icons"
import "../styles/courosal.css"
const Corousel = () => {

    const shops = [
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674131014/chandusweets_mlerjk.avif",
            storename: "Chandu sweets",
            location: "nad kotha road, Visakhapatnam"
        },
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674131015/sriram_oj4yay.jpg",
            storename: "Sri ram chit funds",
            location: "nad kotha road, Visakhapatnam"
        },
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674131076/crownba_wapjvg.avif",
            storename: "crown bakery",
            location: "nad kotha road, Visakhapatnam"
        },
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674559657/IMG_Khadim_Logo_xglxlk.jpg",
            storename: "Khadims Foot wear",
            location: "baji junction, Visakhapatnam"
        },
        {
            img: "https://images.jdmagicbox.com/comp/visakhapatnam/z7/0891px891.x891.181114100320.y3z7/catalogue/lucky-shopping-mall-gopalapatnam-visakhapatnam-7lyuxyge2x-250.jpg?temp=1",
            storename: "lucky shopping mall",
            location: "gopalapatnam, Visakhapatnam"
        },
    ]


    return (
        <div className={style.whole}>

            <h1>Featured businesses</h1>

            <div className={style.inner}>
                {shops.map((e) => {

                    return (
                        <>
                            <div className={style.single}>
                                <img className={style.imager} src={e.img} />
                                <CheckOutlined className={style.tick} />
                                <a href=''>{e.storename}</a>
                                <div >
                                    <StarFilled className={style.filledstar}/>
                                    <StarFilled className={style.filledstar}/>
                                    <StarFilled className={style.filledstar}/>
                                    <StarOutlined className={style.outlinedstar}/>
                                    <StarOutlined className={style.outlinedstar}/>
                                    chat reviews
                                </div>
                                <p>{e.location} </p>
                            </div>
                        </>
                    )

                })}


            </div>

        </div>
    )
}

export default Corousel