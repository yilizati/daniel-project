import React, { useState } from 'react'

export default function ExpenseForm({ usersDropdownList, saveExpense }) {
  const [formData, updateFormData] = useState([])

  const categories = ['Food', 'Travel', 'Equipment']

  const handleChange = (e) => {
    const { name, value } = e.target
    updateFormData({
      ...formData,
      [name]: value.trim(),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(formData).every((e) => e.length !== 0))
      saveExpense(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='users'>
        Users:
        <select name='fullName' onChange={handleChange} required>
          <option value=''>--select--</option>
          {usersDropdownList.map((user) => (
            <option key={user.id} value={`${user.firstName} ${user.lastName}`}>
              {`${user.firstName} ${user.lastName}`}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor='cateogories-dropdown'>
        Categories:
        <select name='category' onChange={handleChange} required>
          <option value=''>--select--</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor='description'>
        Description:
        <input
          type='text'
          name='description'
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor='cost'>
        Cost:
        <input type='text' name='cost' onChange={handleChange} required />
      </label>
      <button>save</button>
    </form>
  )
}
