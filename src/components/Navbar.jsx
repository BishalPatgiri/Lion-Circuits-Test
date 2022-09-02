import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"#D2E2F2",padding:"10px 20%",fontSize:"20px",fontWeight:"bold"}}>
        <div style={{display:"flex",gap:"40px"}}>
        <NavLink style={{textDecoration:"none"}} to={"/products"}>Product Page</NavLink>
        <NavLink style={{textDecoration:"none"}} to={"/"}>Log-in Page</NavLink>
        </div>
        <button onClick={()=>navigate("/userDetail")} style={{border:"0",borderRadius:"50%",backgroundColor:"#2475C7",color:"white",cursor:"pointer"}}>
          <img style={{width:"50px",height:"50px",borderRadius:"50%"}} src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" alt="" />
        </button>
    </div>
  )
}
