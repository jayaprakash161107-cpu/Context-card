import React, { useContext } from 'react'
import Context from './Context';
export const Button = ({name}) => {
         const data = useContext(Context);
       return (
         <button className='btn' onClick={()=> data.setcount (data.count+1)}>{name}</button>
   )
 }

 export default Button


