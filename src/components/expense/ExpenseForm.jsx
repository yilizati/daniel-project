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
  }

  const categories = ['Food', 'Travel', 'Equipment']

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='users'>
        Users:
        <select name='fullName' onChange={handleChange}>
          <option value='--select--'>--select--</option>
          {users.map((user, index) => (
            <option key={index} value={`${user.firstName} ${user.lastName}`}>
              {`${user.firstName} ${user.lastName}`}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor='cateogories-dropdown'>
        Categories:
        <select name='category' onChange={handleChange}>
          <option value='--select--'>--select--</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor='description'>
        Description:
        <input type='text' name='description' onChange={handleChange} />
      </label>
      <label htmlFor='cost'>
        Cost:
        <input type='text' name='cost' onChange={handleChange} />
      </label>
      <button>save</button>
    </form>
  )
}
