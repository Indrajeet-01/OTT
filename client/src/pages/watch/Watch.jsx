import { ArrowBackOutlined } from '@material-ui/icons'
import "./watch.scss"

function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video className='video' autoplay progress controls src="https://dsqqu7oxq6o1v.cloudfront.net/motion-array-1296744-Tourist_Jordan_17-high.mp4"  />
    </div>
  )
}

export default Watch