import { ArrowBackOutlined } from '@material-ui/icons'
import "./watch.scss"
import { Link, useLocation } from 'react-router-dom'

function Watch() {
  const location = useLocation()
  const movie = location.movie
  //console.log(location)
  return (
    <div className='watch'>
      <Link to="/">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
      </Link>  
        <video className="video" autoPlay={true} progress controls src={movie?.video} />
    </div>
  )
}

export default Watch