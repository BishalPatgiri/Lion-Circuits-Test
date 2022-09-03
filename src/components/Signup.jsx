//import axios from 'axios'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { saveLocalData } from './utils/localStorage'

export const Signup = () => {
    // const [local,setLocal]=useState({})

    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [name,setName]=useState("")
    const [mobile,setMobile]=useState("")
    const [address,setAddress]=useState("")
    const navigate=useNavigate()

    // useEffect(()=>{
    //     setLocal(data)
    // },[data])

    const handleStore=(e)=>{
        e.preventDefault()
        axios.patch("https://lion-project-data.herokuapp.com/userDetail/1",{name:name})
        axios.post(`https://lion-project-data.herokuapp.com/address`,{place:address})
        axios.post(`https://lion-project-data.herokuapp.com/mobile`,{number:mobile})
        saveLocalData("email",email)
        saveLocalData("pass",pass)
        navigate("/")
    }

  return (
    <div>
        <div>
        <form style={{width:"30%",padding:"2% 4%",margin:"auto",marginTop:"30px",borderRadius:"15px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} action="">
            <h2 style={{textAlign:"center",marginBottom:"15px"}}>Sign-Up</h2>
            <div>
                <label htmlFor="">Name</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} style={{width:"100%",height:"32px",marginBottom:"20px",paddingLeft:"10px"}} type="text" name=""/>
            </div>
            <div>
                <label htmlFor="">Email Id</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} style={{width:"100%",height:"32px",marginBottom:"20px",paddingLeft:"10px"}} type="email" name=""/>
            </div>
            <div>
                <label htmlFor="">Mobile No</label>
                <input value={mobile} onChange={(e)=>setMobile(e.target.value)} style={{width:"100%",height:"32px",marginBottom:"20px",paddingLeft:"10px"}} type="number" name=""/>
            </div>
            <div>
                <label htmlFor="">Address</label>
                <input value={address} onChange={(e)=>setAddress(e.target.value)} style={{width:"100%",height:"32px",marginBottom:"20px",paddingLeft:"10px"}} type="text" maxLength={100} name=""/>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} style={{width:"100%",height:"32px",marginBottom:"20px",paddingLeft:"10px"}} type="password" name="" minLength={5}/>
            </div>
            <button onClick={handleStore} style={{padding:"10px",border:"0",backgroundColor:"#2475C7",color:"white",cursor:"pointer"}}>Submit</button>
        </form>
        </div>
    </div>
  )
}
