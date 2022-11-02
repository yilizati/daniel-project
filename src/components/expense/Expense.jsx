import React, { useState } from 'react'

export default function Expense({
  user,
  category,
  description,
  cost,
  id,
  usersDropdownList,
  editExpense,
  deleteExpense,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [updatedExpense, setUpdatedExpense] = useState({
    user,
    category,
    description,
    cost,
  })

  const categoriesList = ['Food', 'Travel', 'Equipment']

  const handleChange = (e) => {
    const { name, value } = e.target
    setUpdatedExpense({
      ...updatedExpense,
      [name]: value.trim(),
    })
  }

  const handleSave = () => {
    setIsEditing(false)
    if (Object.values(updatedExpense).some((e) => e.length === 0))
      return alert('all fields must be filled out.')
    editExpense(id, updatedExpense)
  }

  const handleDelete = () => {
    setIsEditing(false)
    deleteExpense(id)
  }

  const edittingTemplate = (
    <tr>
      <td>
        <select name='fullName' onChange={handleChange}>
          {usersDropdownList.map((user) => {
            return user.id === id ? (
              <option
                key={user.id}
                value={`${user.firstName} ${user.lastName}`}
                selected
              >
                {`${user.firstName} ${user.lastName}`}
              </option>
            ) : (
              <option
                key={user.id}
                value={`${user.firstName} ${user.lastName}`}
              >
                {`${user.firstName} ${user.lastName}`}
              </option>
            )
          })}
        </select>
      </td>
      <td>
        <select name='category' onChange={handleChange}>
          {categoriesList.map((cat, index) =>
            cat === category ? (
              <option key={index} selected>
                {category}
              </option>
            ) : (
              <option value={cat} key={index}>
                {cat}
              </option>
            )
          )}
        </select>
      </td>
      <td>
        <input
          type='text'
          name='description'
          value={updatedExpense.description}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type='text'
          name='cost'
          value={updatedExpense.cost}
          onChange={handleChange}
        />
      </td>
      <td>
        <button onClick={handleSave}>save</button>
        <button onClick={handleDelete}>delete</button>
      </td>
    </tr>
  )

  const viewTemplate = (
    <tr>
      <td>{`${user.firstName} ${user.lastName}`}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>{cost}</td>
      <td>
        <button onClick={() => setIsEditing(true)}>edit</button>
        <button onClick={handleDelete}>delete</button>
      </td>
    </tr>
  )

  return isEditing ? edittingTemplate : viewTemplate
}
