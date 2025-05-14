import React from 'react'
import User from './User'
import Userclass from './Userclass'

class About extends React.Component{
  constructor(){
    super()
    console.log("consturcter parent")
  }
  componentDidMount(){
    console.log("parent component did MOunt")
  }
  render(){
    console.log("parent return")
    return (
      <div>
        <h1>This is a Food Ordering App</h1>
        {/* <User name={"Vipul - Functional "} address= {"Amravati"}/> */}
        <Userclass name={"Vipul -Class Based"} address = {"Pune"} />
        {/* <Userclass name={"Vipul2 -Class Based"} address = {"Pune"} />
        <Userclass name={"Vipul3 -Class Based"} address = {"Pune"} /> */}
        </div>
    )
  }
}


export default About