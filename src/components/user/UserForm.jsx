import React, { useState } from 'react'

export default function UserForm({ saveUser }) {
  const initialFormData = Object.freeze({
    firstName: '',
    lastName: '',
    totalExpenses: '',
  })

  const [form, setForm] = useState(initialFormData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value.trim(),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(form).every((e) => e.length === 0)) return
    saveUser(form)
    setForm(initialFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='firstname'>
        First name:
        <input
          type='text'
          name='firstName'
          onChange={handleChange}
          value={form.firstName}
          required
        />
      </label>
      <label htmlFor='lastname'>
        Last name:
        <input
          type='text'
          name='lastName'
          onChange={handleChange}
          value={form.lastName}
          required
        />
      </label>
      <button>save</button>
    </form>
  )
}
