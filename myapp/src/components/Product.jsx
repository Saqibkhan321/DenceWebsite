import React from 'react'
import  {useParams} from "react-router-dom"

function Product(){
    const Params= useParams() 
  return (
    <div>
        <h1>#{Params.id}</h1>
    </div>
  )
}

export default Product