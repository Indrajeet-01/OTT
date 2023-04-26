import { useEffect, useState } from "react"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/list"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"
import axios from "axios"


const Home = ({type}) => {
  const [lists,setLists] = useState([])
  const [genre,setGenre] = useState(null)


  useEffect(()=>{
    const getRandomLists = async ()=>{
      try{
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
          {
            headers:{
              token: "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY4ZmFjNWY5NjlmYTMwMTQzNDI1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjQ4NTE3MCwiZXhwIjoxNjgyOTE3MTcwfQ.BmoHYmPlL-Pt9MS_8SR-IojuOLrVpSzUmXOGMIIHKRs"
            }
          }
        )
        //console.log(res)
        setLists(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getRandomLists()
  },[type,genre])
  return (
    <div className='home'>
      <Navbar/>
      <Featured type={type} />
      {lists.map((list)=>(
        <List list={list} />
      ))}
     
      
    </div>
  )
}

export default Home