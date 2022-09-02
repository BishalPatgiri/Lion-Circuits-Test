import React from 'react'
import {Routes,Route} from "react-router-dom"
import { HomePage } from '../HomePage'
import { Product } from '../Product'
import { Signup } from '../Signup'

export const AllRotes= () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/userDetail' element={<Signup/>}></Route>
            <Route path='/products' element={<Product/>}></Route>
        </Routes>
    </div>
  )
}
