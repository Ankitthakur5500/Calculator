"use client"
import React from 'react'
import { Provider, useSelector } from 'react-redux'
import store from '../store'
import Trial from '../components/Trial'


export default function page() {
  //const dispatch
 
  return (
    <Provider store={store}>
      <Trial/>
    </Provider>
  )
}
