import React, { useState } from 'react'
import './uste.css'

const UseState = () => {
    const [count,setCount] = useState(0)
    const handle = () =>{
        console.log("hel");
        setCount(count+1)
        
    }
    return (
        <div style=
        {{display:'flex',
        flexDirection:'column',
        width:"100px",
        height:"200px",
        margin:"auto",
        marginTop:"200px",
        justifyContent:'center',
        alignItems:"center",


        }}>
            <h1>{count}</h1>
            <button className="classes"
            style={{backgroundColor:"blue",padding:"20px",color:"white",border:"none"}}
            onClick={handle}>click</button>
        </div>
    )
}

export default UseState
