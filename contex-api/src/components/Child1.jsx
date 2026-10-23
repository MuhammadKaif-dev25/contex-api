import React from 'react'
import { useUserContent } from '../context/UserContext'

const Child1 = () => {
    const{ userInfo } = useUserContent();
  return (
    <div>
        THis is CHild 1
      
      <div> 
      {userInfo.name}
      </div>
    </div>
  )
}

export default Child1
