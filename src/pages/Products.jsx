import React from 'react'
import "../styles/Products.css"
import { Card } from '../components/Card'
import { useContext } from 'react'
import { CartItems } from '../context/CartItems'

export const Products = () => {

  let {data}=useContext(CartItems)
  
  return (
    <div id='products'>
      {
        data.map((item)=>{return <Card Item={item} />})
      }
    </div>
  )
}
