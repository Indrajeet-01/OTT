import React, { useEffect, useMemo, useState } from 'react'
import "./home.css"
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import {userData} from "../../dummyData"
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import axios from 'axios'


export default function Home() {

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([])

  useEffect(() => {
    const getStats =  async () =>{
      try{
        const res = await axios.get("/users/stats",{
          headers: {
            token: "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY4ZmFjNWY5NjlmYTMwMTQzNDI1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjQ4NTE3MCwiZXhwIjoxNjgyOTE3MTcwfQ.BmoHYmPlL-Pt9MS_8SR-IojuOLrVpSzUmXOGMIIHKRs"
          },
        })
        res.data.map((item) =>
        setUserStats((prev) => [
          ...prev, {name:MONTHS[item._id - 1], "New User":item.total},
          ])
        )
      }catch(err){
          console.log(err)
      }
    }
    getStats()
  },[MONTHS])
  console.log(userStats)

  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title="Users Analytics" datakey="uv" grid />
        <div className='homeWidgets'>
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}
