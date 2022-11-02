import React from 'react'
import './UserTable.Style.css'
import UserForm from './UserForm'
import User from './User'

export default function UsersTable({
  users,
  createNewUser,
  deleteUser,
  editUser,
}) {
  return (
    <>
      <UserForm saveUser={createNewUser} />
      <table>
        <caption>User Table</caption>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Total Expenses</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ firstName, lastName, totalExpense, id }) => (
            <User
              firstName={firstName}
              lastName={lastName}
              key={id}
              id={id}
              editUser={editUser}
              deleteUser={deleteUser}
              totalExpense={totalExpense}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}
