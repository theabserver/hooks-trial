import React, {useState, useEffect, createContext} from 'react'
import {ContextDisplay}
from './ContextDisplay'

const UserContext = createContext()
export {UserContext}

export const APIdisplay = () => {

  const [user,
    setUser] = useState({})

  const fetchData = () => {
    fetch('http://jsonplaceholder.typicode.com/users/2')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setUser(json)
      })

  }

  useEffect(() => {
    fetchData()
  }, [user]) // only re render for change to user

  const hasUser = () => Object
    .keys(user)
    .length > 0

  return (
    <UserContext.Provider value={user}>
      {hasUser() && <ContextDisplay/>}
    </UserContext.Provider>
  )
}