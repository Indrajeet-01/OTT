import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"
import { useState } from "react"

const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false)
   window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false :true)
    return () => (window.onscroll = null)
   }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt=""
                />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <div className="profile">
                    <ArrowDropDown className="icon"/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Navbar