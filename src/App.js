import './App.css';
import { Route, Routes } from "react-router-dom"
import Weekpopular from './components/weekpopular';
import Apparels from './components/apparels';
import Food from './components/food';
import Home from './components/home';
import Beauty from './components/beauty';
import Education from './components/education';
import Health from './components/health';
import Wedding from './components/wedding';
import Logistics from './components/logistics';
import Printing from './components/printing';
import style from "./App.module.scss"
import { StarFilled, StarOutlined, PhoneFilled, ClockCircleOutlined } from "@ant-design/icons"
import AddaBusiness from './components/banner/navbarmenu/addabusiness';
import MyAccount from './components/banner/navbarmenu/myaccount';
import Category from './components/banner/navbarmenu/category';


function App() {

  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="apparels" element={<Apparels />} />
        <Route path="food" element={<Food />} />
        <Route path="beauty" element={<Beauty />} />
        <Route path="education" element={<Education />} />
        <Route path="health" element={<Health />} />
        <Route path="wedding" element={<Wedding />} />
        <Route path="logistics" element={<Logistics />} />
        <Route path="printing" element={<Printing />} />
        <Route path="addbusiness" element={<AddaBusiness />} />
        <Route path="category" element={<Category />} />
        <Route path="myaccount" element={<MyAccount />} />

      </Routes>




      {/* <div className={style.verticalholder}>

        {stores.map((e) => {
          return (
            <div className={style.vertical}>

              <img src="http://www.yellowpages.in/assets/business/475544375/f-475544375-t.jpg" />

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

      </div>
 */}





    </div>
  );
}

export default App;
