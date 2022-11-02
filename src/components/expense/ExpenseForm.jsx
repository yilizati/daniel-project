import React, { useState } from 'react'

export default function ExpenseForm({ users, saveExpense }) {
  const [categories, setCategories] = useState(['Food', 'Travel', 'Equipment'])
  const [description, setDescription] = useState('')
  const [cost, setCost] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!categories || !description || cost) return
    const newExpense = { categories, description, cost }
    saveExpense(newExpense)
    setDescription('')
    setCost('')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='users'>
        Users:
        <select name='users'>
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
        <select name='cateogories' id='categories-dropdown'>
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
        <input type='text' id='description' />
      </label>
      <label htmlFor='cost'>
        Cost:
        <input type='text' id='cost' />
      </label>
      <button>save</button>
    </form>
  )
}
