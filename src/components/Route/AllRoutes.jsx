import React from 'react'
import {Routes,Route} from "react-router-dom"
import { EditScreen } from '../EditScreen'
import { HomePage } from '../HomePage'
import { Product } from '../Product'
import { Signup } from '../Signup'
import { PrivateRoute } from './PrivateRoute'

export const AllRotes= () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/userDetail' element={<Signup/>}></Route>
            <Route path='/products' element={
              <PrivateRoute>
                 <Product/>
              </PrivateRoute>
            }></Route>
            <Route path='/edit' element={<EditScreen/>}></Route>
        </Routes>
    </div>
  )
}
