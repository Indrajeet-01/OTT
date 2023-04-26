import React, { useEffect, useState } from 'react'
import "./widgetSm.css"
import { Visibility } from '@material-ui/icons'
import axios from "axios"

export default function WidgetSm() {

  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUser = async () => {
      try{
        const res = await axios.get("/users?new=true", {
          headers: {
            token: "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY4ZmFjNWY5NjlmYTMwMTQzNDI1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjQ4NTE3MCwiZXhwIjoxNjgyOTE3MTcwfQ.BmoHYmPlL-Pt9MS_8SR-IojuOLrVpSzUmXOGMIIHKRs"
          },
        })
          setNewUsers(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getNewUser()
  },[])
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (

        
        <li className="widgetSmListItem">
          <img src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              } alt='' className="widgetSmImg"/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            
          </div>
          <button className="widgetSmButton">
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        )
       )}
      </ul>
    </div>
  )
}
