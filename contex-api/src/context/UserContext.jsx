import {useState} from 'react'
import { createContext , useContext } from 'react'

export const UserProvider = createContext();

const UserContext = ({children}) => {
    const [userInfo, setUserInfo] = useState({
       name: "Kaif",
        userId: "e12345"
}) 
  return (
   <UserProvider.Provider value= {{userInfo, setUserInfo}}>
    {children}
   </UserProvider.Provider>

  )
}

export default UserContext

export const useUserContent = () => useContext(UserProvider)
