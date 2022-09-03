import React from 'react'
import { Navbar } from './Navbar'
import { useState,useEffect} from 'react'
import { getLocalData, saveLocalData } from './utils/localStorage'

export const HomePage = () => {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [name,setName]=useState("")

    useEffect(() => {
        let inpu=getLocalData("auth")
        if(inpu)
        {
            let name=inpu.name
            setName(name)
        }
      }, [name])
    

    const handleCheck=()=>{
        const localemail=getLocalData("email")
        const localpass=getLocalData("pass")
        if(localemail&&localpass){
            if(localemail===email && localpass===pass)
            {
                saveLocalData("auth",true)
                alert("Login Successful")
            }
            else{
                alert("Give Correct Credentials")
            }
        }
        else{
            alert("Please SignUp First")
        }
    }
  return (
    <div>
        <Navbar/>
        <div>
        <form style={{width:"30%",padding:"2% 4%",margin:"auto",marginTop:"30px",borderRadius:"15px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} action="">
        <h2 style={{textAlign:"center",marginBottom:"15px"}}>Log-In</h2>
            <div>
                <label htmlFor="">Email Id</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} style={{width:"100%",height:"32px",marginBottom:"20px",paddingLeft:"10px"}} type="email" name="" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} style={{width:"100%",height:"32px",marginBottom:"20px",paddingLeft:"10px"}} type="password" name="" minLength={5}/>
            </div>
            <button onClick={handleCheck} style={{padding:"10px",border:"0",backgroundColor:"#2475C7",color:"white",cursor:"pointer"}}>{name? name:"Signin"}</button>
        </form>
    </div>
        
    </div>
  )
}
