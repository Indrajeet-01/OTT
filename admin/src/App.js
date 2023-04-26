import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useState } from "react";
import axios from "axios"
import { useEffect } from "react";


function App() {
  const MONTHS =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

  const [userStats, setUserStats] = useState([])

  useEffect(() => {
    const getStats =  async () =>{
      try{
        const res = await axios.get("/users/stats",{
          headers: {
            token: "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY4ZmFjNWY5NjlmYTMwMTQzNDI1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjQ4NTE3MCwiZXhwIjoxNjgyOTE3MTcwfQ.BmoHYmPlL-Pt9MS_8SR-IojuOLrVpSzUmXOGMIIHKRs"
          },
        })
        setUserStats(res.data)

      }catch(err){
          console.log(err)
      }
    }
    getStats()
  },[])
  console.log(userStats)

  return (
    <Router>
     
      <Topbar/>
      <div className="container">
        <Sidebar/>
        
      
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/users" element={<UserList/>} />
        <Route path="/user/:userId" element={<User/>} />
        <Route path="/newUser" element={<NewUser/>} />

        <Route path="/products" element={<ProductList/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/newProduct" element={<NewProduct/>} />

      </Routes>
      </div>
    </Router>
  );
}

export default App;
