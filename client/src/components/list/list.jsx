import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import "./list.scss"
import ListItem from '../listItem/ListItem'
import { useRef, useState } from 'react'


function List({list}) {
    const [isMoved, setIsMoved] = useState(false)
    const [slideNumber, setSlideNumber] = useState(0)
    const listRef = useRef()

    const handleClick = (direction) =>{
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x -58
        if(direction === "left" && slideNumber>0){
            setSlideNumber(slideNumber-1)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
        }
        if(direction === "right" && slideNumber<6){
            setSlideNumber(slideNumber+1)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
        }
        console.log(distance)
    }
  return (
    <div className='list'>
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className='sliderArrow left' onClick={() => handleClick("left")} style={{display: !isMoved && "none"} }/>
            <div className="container" ref={listRef}>
                {
                    list.content.map((item,i)=>(
                        <ListItem index={i} item = {item}/>
                    ))
                }
            </div>
            <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")}/>
        </div>
    </div>
  )
}

export default List