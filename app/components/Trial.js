// "use client"
// import React from 'react'
import {useSelector} from 'react-redux'


export default function Trial() {
    const abc = useSelector((state)=>state.user)
    console.log(abc.user)
  return (
    <div className="user__name">
     Hello your Calculation is :
     <span>{abc.user}</span>
    </div>
  )
}
