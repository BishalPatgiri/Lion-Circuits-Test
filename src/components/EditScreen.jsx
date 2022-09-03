import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { getLocalData, saveLocalData } from './utils/localStorage'

export const EditScreen = () => {
    const [name,setName]=useState("")
    const [mobile,setMobile]=useState("")
    const [address,setAddress]=useState("")

    const [existName,setExistName]=useState("")
    const [existMobile,setExistMobile]=useState([])
    const [existAdd,setExistAdd]=useState([])

    const [showName,setShowName]=useState(false)
    const [showAddress,setShowAddress]=useState(false)
    const [showMobile,setShowMobile]=useState(false)
    const [showMain,setShowMain]=useState(true)

    const getData=()=>{
        axios.get("https://lion-project-data.herokuapp.com/userDetail/1").then(res=>setExistName(res.data.name))
        axios.get("https://lion-project-data.herokuapp.com/mobile").then(res=>setExistMobile(res.data))
        axios.get("https://lion-project-data.herokuapp.com/address").then(res=>setExistAdd(res.data))
    }

    useEffect(()=>{
        getData()
    },[])

    const handleEdit=(e)=>{
        e.preventDefault()
        if(mobile){
        const newMobile={number:mobile}
        // console.log(mobile)
        axios.post("https://lion-project-data.herokuapp.com/mobile",newMobile).then(res=>getData())
        }
        if(address)
        {
            const newAdd={place:address}
            axios.post("https://lion-project-data.herokuapp.com/address",newAdd).then(res=>getData())
        }

    }

    const showeditName=()=>{
        setShowName(!showName)
        setShowMain(!showMain)
    }

    const editName=()=>{
        axios.patch("https://lion-project-data.herokuapp.com/userDetail/1",{name:name}).then(res=>getData())
    }

    const showeditAddress=(id)=>{
        setShowAddress(!showAddress)
        setShowMain(!showMain)
        saveLocalData("id",id)
    }

    const editAddress=()=>{
        const id=getLocalData("id")
        axios.patch(`https://lion-project-data.herokuapp.com/address/${id}`,{place:address}).then(res=>getData())
    }

    const showeditMobile=(id)=>{
        setShowMobile(!showMobile)
        setShowMain(!showMain)
        saveLocalData("id",id)
    }

    const editMobile=()=>{
        const id=getLocalData("id")
        axios.patch(`https://lion-project-data.herokuapp.com/mobile/${id}`,{number:mobile}).then(res=>getData())
    }


  return (
    <div style={{display:"flex",marginTop:"120px"}}>
        <div style={{width:"22%",margin:"auto"}}>
            <h2 style={{marginBottom:"30px"}}>Already Existing Data</h2>
            <h3>Name :</h3>
            <div style={{display:"flex",justifyContent:"space-between",gap:"15px",border:"1px solid grey",padding:"10px",alignItems:"center"}}>
                <p>{existName}</p>
                <button onClick={()=>showeditName()} style={{color:"white",backgroundColor:"green",padding:"5px",border:"0"}}>Edit</button>
            </div>
            <h3 style={{marginTop:"10px"}}>Mobile No: </h3>
            <div>
            {
                existMobile.length>0 && existMobile.map((ele)=>(
                    <div key={ele.id} style={{display:"flex",justifyContent:"space-between",border:"1px solid grey",gap:"15px",padding:"10px",alignItems:"center"}}>
                        <p>{ele.number}</p>
                        <button onClick={()=>showeditMobile(ele.id)} style={{color:"white",backgroundColor:"green",padding:"5px",border:"0"}}>Edit</button>
                    </div>
                    ))
                }
            </div>
            <h3 style={{marginTop:"10px"}}>Address: {address}</h3>
            <div>
            {
                existAdd.length>0 && existAdd.map((ele)=>(
                    <div key={ele.id} style={{display:"flex",justifyContent:"space-between",border:"1px solid grey",gap:"15px",padding:"10px",alignItems:"center"}}>
                        <p>{ele.place}</p>
                        <button onClick={()=>showeditAddress(ele.id)} style={{color:"white",backgroundColor:"green",padding:"5px",border:"0"}}>Edit</button>
                    </div>
                    ))
                }
            </div>

        </div>
        <div style={{width:"33%",margin:"auto"}}>
            {
                showMain&&(
                    <form style={{width:"100%",padding:"4% 4%",marginTop:"30px",borderRadius:"15px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} action="">
                <h2 style={{textAlign:"center",marginBottom:"15px"}}>Add new User Data</h2>
                <div>
                    <label htmlFor="">Mobile No</label>
                    <input value={mobile} onChange={(e)=>setMobile(e.target.value)} style={{width:"100%",height:"32px",marginBottom:"20px",paddingLeft:"10px"}} type="number" name=""/>
                </div>
                <div>
                    <label htmlFor="">Address</label>
                    <input value={address} onChange={(e)=>setAddress(e.target.value)} style={{width:"100%",height:"32px",marginBottom:"20px",paddingLeft:"10px"}} type="text" maxLength={100} name=""/>
                </div>
                <button onClick={handleEdit} style={{padding:"10px",border:"0",backgroundColor:"#2475C7",color:"white",cursor:"pointer"}}>Add Data</button>
            </form>
                )
            }
            <div style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",padding:"2% 4%",borderRadius:"15px"}}>
            {
                    showName && (
                        <div style={{marginTop:"35px"}}>
                            <h2 style={{margin:"10px 0"}}>Edit Name</h2>
                            <div>
                                <input value={name} style={{width:"100%",height:"32px",marginBottom:"20px",paddingLeft:"10px"}} type="text" onChange={(e)=>setName(e.target.value)}/>
                            </div>
                            <button onClick={editName} style={{padding:"10px",border:"0",backgroundColor:"#2475C7",color:"white",cursor:"pointer"}}>Edit</button>
                        </div>
                                )
                }
            </div>
            <div style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",padding:"2% 4%",borderRadius:"15px"}}>
            {
                    showAddress && (
                        <div style={{marginTop:"35px"}}>
                            <h2 style={{margin:"10px 0"}}>Edit Address</h2>
                            <div>
                                <input value={address} style={{width:"100%",height:"32px",marginBottom:"20px",paddingLeft:"10px"}} type="text" onChange={(e)=>setAddress(e.target.value)}/>
                            </div>
                            <button onClick={editAddress} style={{padding:"10px",border:"0",backgroundColor:"#2475C7",color:"white",cursor:"pointer"}}>Edit</button>
                        </div>
                                )
                }
            </div>
            <div style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",padding:"2% 4%",borderRadius:"15px"}}>
            {
                    showMobile && (
                        <div style={{marginTop:"35px"}}>
                            <h2 style={{margin:"10px 0"}}>Edit Mobile Number</h2>
                            <div>
                                <input value={mobile} style={{width:"100%",height:"32px",marginBottom:"20px",paddingLeft:"10px"}} type="text" onChange={(e)=>setMobile(e.target.value)}/>
                            </div>
                            <button onClick={editMobile} style={{padding:"10px",border:"0",backgroundColor:"#2475C7",color:"white",cursor:"pointer"}}>Edit</button>
                        </div>
                                )
                }
            </div>
        </div>
        

    </div>

  )
}
