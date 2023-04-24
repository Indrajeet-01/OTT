import Featured from "../../components/featured/Featured"
import List from "../../components/list/list"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Featured />
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home