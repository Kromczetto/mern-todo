import React from 'react'

const Delete = ({todo}) => {

    const deleteClick =(id)=>{
        console.log(id)
    }
  return (
    <div
        onClick={()=>deleteClick(todo._id)}
    >x</div>
  )
}

export default Delete