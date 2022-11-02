import React, { useState } from 'react'

export default function User({
  firstName,
  lastName,
  totalExpense,
  id,
  editUser,
  deleteUser,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [newUser, setNewUser] = useState({ firstName, lastName, id })

  const handleEditUser = () => {
    setIsEditing(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewUser({ ...newUser, [name]: value })
  }

  const handleSave = () => {
    setIsEditing(false)
    if (!newUser.firstName || !newUser.lastName) return
    editUser(id, newUser)
  }

  const handleDelete = () => {
    deleteUser(id)
  }

  const editingTemplate = (
    <tr>
      <td>
        <input
          className='edit'
          type='text'
          name='firstName'
          value={newUser.firstName}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          className='edit'
          type='text'
          name='lastName'
          value={newUser.lastName}
          onChange={handleChange}
        />
      </td>
      <td>${totalExpense}</td>
      <td>
        <button onClick={handleSave}>save</button>
      </td>
    </tr>
  )

  const viewTemplate = (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{totalExpense}</td>
      <td>
        <button onClick={handleEditUser}>edit</button>
        <button onClick={handleDelete}>delete</button>
      </td>
    </tr>
  )

  return isEditing ? editingTemplate : viewTemplate
}
