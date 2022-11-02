import React from 'react'

export default function ExpenseForm({ users, saveExpense }) {
  const initialFormData = Object.freeze({
    fullName: '',
    category: '',
    description: '',
    cost: '',
  })
  const [formData, updateFormData] = React.useState(initialFormData)

  const handleChange = (e) => {
    const { name, value } = e.target
    updateFormData({
      ...formData,
      [name]: value.trim(),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // ... submit to API or something
  }

  const categories = ['Food', 'Travel', 'Equipment']

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='users'>
        Users:
        <select name='users' onChange={handleChange}>
          <option value='--select'>--select--</option>
          {users.map((user, index) => (
            <option key={index} value={user.fullname}>
              {user.firstName}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor='cateogories-dropdown'>
        Categories:
        <select
          name='cateogories'
          id='categories-dropdown'
          onChange={handleChange}
        >
          <option value='--select'>--select--</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor='description'>
        Description:
        <input type='text' id='description' onChange={handleChange} />
      </label>
      <label htmlFor='cost'>
        Cost:
        <input type='text' id='cost' onChange={handleChange} />
      </label>
      <button>save</button>
    </form>
  )
}
