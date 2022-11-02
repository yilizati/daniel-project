import React, { useState } from 'react'
import './UserTable.Style.css'
import UserForm from './UserForm'
import User from './User'

export default function UserTableComponent() {
  const [users, setUsers] = useState([
    {
      firstName: 'john',
      lastName: 'doe',
      id: 1,
    },
  ])

  const saveUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }])
  }

  const editUser = (id, newUser) => {
    const editedUsersList = users.map((user) => {
      if (id === user.id) return { ...newUser }
      return user
    })
    setUsers(editedUsersList)
  }

  const deleteUser = (id) => {
    console.log(id)
    setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id))
  }

  return (
    <>
      <UserForm saveUser={saveUser} />
      <table>
        <caption>User Table</caption>
        <thead>
          <tr>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Total Expenses</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ firstName, lastName, id }) => (
            <User
              firstName={firstName}
              lastName={lastName}
              key={id}
              id={id}
              editUser={editUser}
              deleteUser={deleteUser}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}
