
"use client"
import React from 'react';
import { ReactDOM } from 'react';
import App from "./app"
import { Provider, useSelector } from 'react-redux';
import store from './store';
import { selectUser } from './userSlice';

export default function Home() { 
   //const user = useSelector(selectUser);
  
  return (
    <Provider store={store}>
    <App/>
    </Provider>
  )
}
