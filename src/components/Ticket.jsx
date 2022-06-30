

import React from 'react';
import { useState } from 'react'



export const Ticket = () => {

    const [data, setData] = useState("")
    const [num, setNum] = useState([])


    const handleTicket = (e) => {
        const value = e.target.value;
        if(data.length <=5) setData(data+value)
        else alert("enter only 6 Numbers")
        console.log(data)
    }

    const handleClear =() => {
        setData("")
    }
    const randomTicket =()=>{
        setData(Math.floor((Math.random()*1000000)+6))
      }
      const addData=()=>{
        setData("")
       num.length<5? setNum([...num,data]): alert("Ticket Limit Reached")
      }



    return (
        <div className='container'>
        <div className='box1'>
        <div>{data}</div>
        <div>enter 6 digits</div>
         
        <div className='left'>
        
           <button value="7" onClick={handleTicket}>7</button>
           <button value="8" onClick={handleTicket}>8</button>
           <button value="9" onClick={handleTicket}>9</button>
           <button value="4" onClick={handleTicket}>4</button>
           <button value="5" onClick={handleTicket}>5</button>
           <button value="6" onClick={handleTicket}>6</button>
           <button value="1" onClick={handleTicket}>1</button>
           <button value="2" onClick={handleTicket}>2</button>
           <button value="2" onClick={handleTicket}>3</button>
           <button onClick={handleClear}>Clear</button>
           <button value="0" onClick={handleTicket}>0</button>
           <button  onClick={handleClear}>Delete</button>
          
        </div>
        <div>
             <button onClick={()=>{ addData()}}  id='addticket' >  Add Ticket</button>
         </div>
        <div className='right'>
              <img onClick={randomTicket} src="https://github.com/mugilmalathi/INR-Assignment/blob/main/inr-assignment/src/wheel.png?raw=true" alt="" height="100%" width="100%" />
        </div>

        </div>
        <p className='p'>Your selected Tickets :</p>
        <div className='box'>
           {num.map((e)=>{
             return (
                 <div  >
                      <div className='mapdata'>{e}</div>
               </div>
             )
           })}
        </div>
     </div>
    );
}


