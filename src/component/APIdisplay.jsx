import React, {useState, useEffect, createContext, useRef} from 'react'
import {ContextDisplay} from './ContextDisplay'

const UserContext = createContext()
export {UserContext}

export const APIdisplay = () => {
  const [inputValue,
    setInputValue] = useState('')
  const previousInputValue = useRef('')

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

  // In the useEffect, we are updating the useRef current value each time the inputValue is updated by entering text into the input field.
  useEffect(() => {
    previousInputValue.current = inputValue
  }, [inputValue])

  const hasUser = () => Object
    .keys(user)
    .length > 0

  return (
    <UserContext.Provider value={user}>
      {hasUser() && <ContextDisplay/>}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}/>
      <h4>Current Value: {inputValue}</h4>
      <h4>Previous Value: {previousInputValue.current}</h4>
    </UserContext.Provider>
  )
}