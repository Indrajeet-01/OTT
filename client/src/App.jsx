import { useContext } from "react";
import "./app.scss"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import {AuthContext} from "./authContext/AuthContext"

const App = () => {
  const {user} = useContext(AuthContext)
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register/>} />
          
        <Route path="/register" element={!user ? <Register /> : <Home/>} />
        <Route path="/login" element={!user ? <Login /> : <Home/>} />
        {user && (
          <>
        <Route path="/movies" element={<Home type="movie" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/watch" element={<Watch />} />
          </>
        )}
        
          
       
      </Routes>
    </Router>
  )
}

export default App;
