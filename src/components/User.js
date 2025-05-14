import React, { useState } from 'react'

const User = (props) => {
  const { name, address } = props
  const [count] = useState(20)
  const [count2] = useState(20)

  return (
    <div className='user-card'>
      <h2>Name: {name}</h2>
      <h3>Address: {address}</h3>
      <h3>Contact: @vipul__09</h3>
      <h3>Count: {count}</h3>
      <h3>Count 2: {count2}</h3>
    </div>
  )
}

export default User