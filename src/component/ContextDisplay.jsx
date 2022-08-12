import React, {useContext} from 'react'
import {UserContext} from './APIdisplay'

export const ContextDisplay = () => {
  const user = useContext(UserContext)

  return <> < p > Welcome, {user.name}.</p> <p>Your username is {user.username}</p></>
}