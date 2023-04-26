import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import "./listItem.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"

function ListItem({index,item}) {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})
  useEffect(()=>{
    const getMovie = async ()=>{
      try{
        const res = await axios.get("/movies/find/"+item,{
          headers:{
            token: "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY4ZmFjNWY5NjlmYTMwMTQzNDI1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjQ4NTE3MCwiZXhwIjoxNjgyOTE3MTcwfQ.BmoHYmPlL-Pt9MS_8SR-IojuOLrVpSzUmXOGMIIHKRs"
          }
        })
        setMovie(res.data)

      }catch(err){
        console.log(err)
      }
    }
    getMovie()
  },[item])
  
  return (
    <Link to={{pathname:"/watch", movie: movie}}>
    <div 
    className="listItem" 
    style={{left: isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}>
      <img src={movie.img} alt="" />
      {isHovered && (
        <>
      <video src={movie.trailer} autoPlay={true} loop />
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUpAltOutlined className="icon"/>
          <ThumbDownOutlined className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>{movie.duration}</span>
          <span className="limit">+{movie.limit}</span>
          <span>{movie.year}</span>
        </div>
        <div className="desc">
         {movie.title} 
        </div>
        <div className="desc">
         {movie.desc} 
        </div>
        <div className="genre">{movie.genre}</div>
      </div>
      </>
      )}
    </div>
    </Link>
  )
}

export default ListItem