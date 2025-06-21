import React from 'react'
import { useUser } from '../hooks/UserContext'

const About = () => {
  const{name,age,depart,address}=useUser()

  return (
    <div>
      <h1>Hi! {name} Bro</h1>
      <h2>age:{age}</h2>
      <h2>department:{depart}</h2>
      <h2>address:{address}</h2>
      <h1>About Page</h1>
    </div>
  )
}

export default About
