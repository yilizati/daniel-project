import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

export default function ExpenseTableComponent({
  users,
  category,
  description,
  cost,
}) {
  const [isEditing, setIsEditing] = useState(false)

  const viewTemplate = users.map(({ firstName, lastName }) => (
    <tr>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>{cost}</td>
    </tr>
  ))

  const saveExpense = () => {
    console.log('form saved')
  }

  const editTemplate = (
    <tr>
      <td>
        <select name='users'>
          <option value='--select'>--select--</option>
          {users.map((user) => (
            <option value={user.fullname}>{user.firstName}</option>
          ))}
        </select>
      </td>
      <td></td>
      <td>
        <input type='text' name='description' />
      </td>
      <td>
        <input type='text' name='cost' />
      </td>
      <td>
        <button>edit</button>
        <button>delete</button>
      </td>
    </tr>
  )

  return (
    <>
      <ExpenseForm users={users} saveExpense={saveExpense} />
      <table>
        <caption>Expense Table</caption>
        <thead>
          <tr>
            <th scope='col'>Full Name</th>
            <th scope='col'>Category</th>
            <th scope='col'>Description</th>
            <th scope='col'>Cost</th>
          </tr>
        </thead>
        <tbody>{isEditing ? editTemplate : viewTemplate}</tbody>
      </table>
    </>
  )
}
