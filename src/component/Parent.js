import React, { useState,useEffect} from "react";

const Parent=()=>{
 
   
     const [name,setName]=useState('');
     const [data,setData]=useState([]);

     useEffect(()=>{
           fetch('https://jsonplaceholder.typicode.com/users')
           .then((res)=>res.json())
           .then((val)=>setData(val));
     },[]);


     
   return(
            <div>
                   <h3>Enter your FirstName </h3>
                    <div>
                           <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>

                    <div style={{marginLeft:'250px'}}>
                           {
                              data.filter(users=>users.name.toLowerCase().includes(name.toLowerCase())).map((item,index)=>{
                                  return (
                                           <div key={index} style={{border:'1px solid black',padding:'10px',margin:'10px',maxWidth:'70%'}}>
                                                 {item.name}
                                           </div>
                                  )
                              })
                           }
                    </div>
            </div>
   )
}

export default Parent;


