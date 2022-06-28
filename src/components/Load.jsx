import React from 'react'
import {Spinner}  from "react-bootstrap"
function Load({size=80}) {
  return (
    <div
    style={
      {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"100%",
        height:"100%",
      }
    }
    >
      <Spinner
      style={{
        width:size,
        height:size,
        color:"red"

      }}
      animation="border"
      />
      </div>
  )
}

export default Load
