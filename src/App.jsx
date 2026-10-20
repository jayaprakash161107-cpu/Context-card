import React, { useState } from 'react'
import { Card } from './component/Card'
import Context from "./component/Context"
export const App = () => {
    const[count,setcount]=useState(0)
  return (
    <>
    <Context.Provider value={{count,setcount}}>
        <h1>{count}</h1>
         <div className='app-container'>
        <Card name="Jayaprakash" email="jpro@gmail.com" button="Btn1" />
        <Card name="Sakthivel" email="sakthiko@gmail.com" button="Btn2" />
        <Card name="Kavi" email="kavihp@gmail.com" button="Btn3" />
      </div>
    </Context.Provider>
    </>
  )
}
export default App