import React, { useState } from 'react'

export default function Expense({
  fullName,
  category,
  description,
  cost,
  id,
  editUser,
  deleteUser,
  usersDropdownList,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [updatedExpense, setUpdatedExpense] = useState({
    fullName,
    category,
    description,
    cost,
  })

  const categoriesList = ['Food', 'Travel', 'Equipment']
  //.filter(cat => cat !== category)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUpdatedExpense({
      ...updatedExpense,
      [name]: value.trim(),
    })
  }

  const edittingTemplate = (
    <tr>
      <td>
        <select name='fullName' onChange={handleChange} required>
          <option value=''>--select--</option>
          {usersDropdownList.map((user) => (
            <option key={user.id} value={`${user.firstName} ${user.lastName}`}>
              {`${user.firstName} ${user.lastName}`}
            </option>
          ))}
        </select>
      </td>
      <td>
        <select name='category' onChange={handleChange} required>
          {categoriesList.map((cat, index) =>
            cat === category ? (
              <option value={category} selected>
                {category}
              </option>
            ) : (
              <option value={cat}>{cat}</option>
            )
          )}
        </select>
      </td>
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

  const viewTemplate = (
    <tr>
      <td>{fullName}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>{cost}</td>
      <td>
        <button onClick={() => setIsEditing(true)}>edit</button>
        <button>delete</button>
      </td>
    </tr>
  )

  return isEditing ? edittingTemplate : viewTemplate
}
