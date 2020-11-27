import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  // Example to get state
  const user = useSelector(state => state.user);

  console.log(user)
  return (<></>)
}

export default Home