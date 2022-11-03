import React, { useState, useRef } from 'react'

export default function ExpenseForm({ usersDropdownList, saveExpense }) {
  const intialFormState = {
    fullName: '--select--',
    category: '--select--',
    description: '',
    cost: '',
  }

  const [formData, setFormData] = useState(intialFormState)

  const categories = ['Food', 'Travel', 'Equipment']
  const userId = useRef()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value.trim(),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(formData).some((e) => e.length === 0)) return
    saveExpense({ ...formData, userId: parseInt(userId.current.id) })
    setFormData(intialFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Users:
        <select
          name='fullName'
          onChange={handleChange}
          value={formData.fullName}
          required
        >
          <option>{formData.fullName}</option>
          {usersDropdownList.map((user) => (
            <option
              key={user.id}
              id={user.id}
              value={`${user.firstName} ${user.lastName}`}
              ref={userId}
            >
              {`${user.firstName} ${user.lastName}`}
            </option>
          ))}
        </select>
      </label>
      <label>
        Categories:
        <select
          name='category'
          onChange={handleChange}
          value={formData.category}
          required
        >
          <option>{formData.category}</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <label>
        Description:
        <input
          type='text'
          name='description'
          onChange={handleChange}
          value={formData.description}
          required
        />
      </label>
      <label>
        Cost:
        <input
          type='text'
          name='cost'
          onChange={handleChange}
          value={formData.cost}
          required
        />
      </label>
      <button>save</button>
    </form>
  )
}
