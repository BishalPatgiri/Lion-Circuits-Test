import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './Redux/action'

export const Product = () => {
  const data=useSelector(pre=>pre.products)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getData())
  },[dispatch])
  // console.log(data)
  return (
    <div>
      <h1 style={{textAlign:"center",margin:"30px"}}>Product Details</h1>
    <div style={{width:"85%",margin:"auto",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"30px",rowGap:"50px"}}>
      {
        data.length>0 && data.map((ele=>(
          <div key={ele.id} style={{border:"0",borderRadius:"10px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"15px 20px",textAlign:"center",lineHeight:"32px"}}>
            <img width="90%" src={ele.image} height="200px" alt="" />
            <h3>{ele.title}</h3>
            <h2>₹{ele.price}</h2>

          </div>
        )))
      }

    </div>
    </div>
  )
}
