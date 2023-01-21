import React from 'react'
import style from "../styles/weekpopular.module.scss"
import { StarFilled, StarOutlined, PhoneFilled, ClockCircleOutlined } from "@ant-design/icons"
import "../styles/weekpopular.css"

const Weekpopular = (pro) => {

    const usersreviews = [
        {
            username: "naveen",
            reviedon: "05/12/22",
            time: "00:00",
            talk: "nice"
        },
        {
            username: "naveen",
            reviedon: "05/12/22",
            time: "00:00",
            talk: "nice"
        },
        {
            username: "naveen",
            reviedon: "05/12/22",
            time: "00:00",
            talk: "nice"
        },
        {
            username: "naveen",
            reviedon: "05/12/22",
            time: "00:00",
            talk: "nice"
        },
        {
            username: "naveen",
            reviedon: "05/12/22",
            time: "00:00",
            talk: "nice"
        },
        {
            username: "naveen",
            reviedon: "05/12/22",
            time: "00:00",
            talk: "nice"
        },
    ]

    const stores = [
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674131014/chandusweets_mlerjk.avif",
            name: "chandu sweets",
            typeofstore: "sweets and bakery",
            phone: "+" + 919428335185,
            place: "Nad",
            city: "visakhapatnam",
            branches: 1,
            reviews: 3,
            email: "email@gmail.com",
            website: "http://www.chandu-sweets.business.site/",
            timmings: " 08:30 AM - 10:00 PM ",
        },
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674131015/sriram_oj4yay.jpg",
            name: "Sri Ram Chit Funds",
            typeofstore: "Finance",
            phone: 18001026688,
            place: "Nad",
            city: "visakhapatnam",
            branches: 1,
            reviews: 3,
            email: "email@gmail.com",
            website: "https://www.shriramchits.in/",
            timmings: " 00:00 - 24:00 ",
        },
        {
            img: "https://res.cloudinary.com/dli6rliuj/image/upload/v1674131076/crownba_wapjvg.avif",
            name: "crown bakery",
            typeofstore: "sweets and bakery",
            phone: "+" + 919410236646,
            place: "Nad",
            city: "visakhapatnam",
            branches: 1,
            reviews: 3,
            email: "email@gmail.com",
            website: "https://www.crownbakery.in/",
            timmings: " 09:00 AM - 10:00 PM ",
        },

    ]

    return (
        <div className={style.whole}>

            <h2>{pro.heading}</h2>

            <div className={style.storesnreviews}>

                <div className={style.stores}>
                    <>
                        {stores.map(e => {
                            return (
                                <div className={style.longdiv}>
                                    <div className={style.left}>

                                        <img className={style.revstorephoto} src={e.img} />

                                        <div className={style.matter}>
                                            <h3><a href="#">{e.name}</a></h3>
                                            <div className={style.stars}>
                                                <StarFilled className={style.filledstar} />
                                                <StarFilled className={style.filledstar} />
                                                <StarFilled className={style.filledstar} />
                                                <StarOutlined className={style.oulinedstar} />
                                                <StarOutlined className={style.oulinedstar} />
                                                <p>{e.reviews}</p>
                                            </div>
                                            <h5>{e.typeofstore}</h5>
                                            <div className={style.emailwebsite}><a className={style.matteremail} href="#">Email</a><a className={style.matterwebsite} href="#">Website</a></div>
                                        </div>
                                    </div>

                                    <div className={style.right}>
                                        <h3>{e.phone}</h3>
                                        <h5>{e.place}</h5>
                                        <h5>{e.city}</h5>
                                        <h3>{e.branches + " " + "Branches"}</h3>
                                    </div>
                                </div>
                            )
                        })}

                        {/* <div className={style.verticalholder}>

                            {stores.map((e) => {
                                return (
                                    <div className={style.vertical}>

                                        <img className={style.kalapic} src={e.img} />

                                        <h3>{e.name}</h3>

                                        <div className={style.stars}>
                                            <StarFilled className={style.filledstar} />
                                            <StarFilled className={style.filledstar} />
                                            <StarFilled className={style.filledstar} />
                                            <StarOutlined className={style.oulinedstar} />
                                            <StarOutlined className={style.oulinedstar} />
                                            <p>{e.reviews}</p>
                                        </div>

                                        <div className={style.mater}>

                                            <div>  <PhoneFilled className={style.phoneicon} /><h4>{e.phone}</h4></div>
                                            <div>  <ClockCircleOutlined />{e.timmings}</div>
                                            <div>
                                                <img src="http://yellowpages.in/images/location.png" />
                                                <p>{e.place}</p>
                                                <p>{e.city}</p>
                                            </div>
                                        </div>
                                        <button className={style.detailsbtn}>View more details</button>
                                    </div>
                                )

                            })

                            }

                        </div> */}



                    </>
                </div>



                <div className={style.reviews}>
                    <h4>RECENT REVIEWS</h4>


                    {usersreviews.map((e) => {
                        return (

                            <div className={style.singlereview}>

                                <div className={style.twins}>
                                    <img className={style.greyphoto} src='http://www.yellowpages.in/assets//u/nophoto.jpg' />

                                    <div className={style.revmatter}>

                                        <p><a href="">{e.username}</a></p>

                                        <div className={style.revstars}>

                                            <StarFilled className={style.filledstar} />
                                            <StarFilled className={style.filledstar} />
                                            <StarFilled className={style.filledstar} />
                                            <StarOutlined className={style.oulinedstar} />
                                            <StarOutlined className={style.oulinedstar} />

                                        </div>

                                        <p className={style.date}>{e.reviedon}+" "+{e.time}</p>

                                    </div>

                                </div>

                                <a href='#' className={style.storenamerev}>{e.reviedstore}</a>
                                <p className={style.talk}>{e.talk}</p>

                            </div>
                        )
                    })

                    }


                    <div className={style.last}>
                        <p>Have a business to list with us?</p>

                        <button className={style.button}>Add your Bussiness </button>

                    </div>


                </div>


            </div>

        </div>
    )
}

export default Weekpopular