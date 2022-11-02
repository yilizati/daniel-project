import React, { useState } from 'react'

export default function UserForm({ saveUser }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!firstName || !lastName) return
    const newUser = { firstName, lastName }
    saveUser(newUser)
    setFirstName('')
    setLastName('')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'firstname') setFirstName(value)
    if (name === 'lastname') setLastName(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='firstname'>
        Last name:
        <input
          type='text'
          name='firstname'
          onChange={handleChange}
          value={firstName}
        />
      </label>
      <label htmlFor='lastname'>
        First name:
        <input
          type='text'
          name='lastname'
          onChange={handleChange}
          value={lastName}
        />
      </label>
      <button>save</button>
    </form>
  )
}
