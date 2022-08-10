import React, {useState} from 'react'
import {useEffect} from 'react'

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
  }, [setUser]) // only re render for change to user

  const hasUser = () => Object
    .keys(user)
    .length > 0

  return <div>{hasUser() && <p>Welcome, {user.name}. Your username is {user.username
}
    </p>}</div>
}
