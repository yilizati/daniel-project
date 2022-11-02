import ExpenseTable from './components/expense/ExpenseTable'
import UsersTable from './components/user/UserTable'
import { useState } from 'react'
import './App.css'

function App() {
  const usersSchema = [
    { firstName: 'john', lastName: 'doe', totalExpenses: '$3013', id: 1 },
  ]

  const [users, setUsers] = useState(usersSchema)

  const handleCreateNewUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }])
  }

  const handleDeleteUser = (id) => {
    setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id))
  }

  const handleEditUser = (id, newUser) => {
    const editedUsersList = users.map((user) => {
      if (id === user.id) return { ...newUser }
      return user
    })
    setUsers(editedUsersList)
  }

  return (
    <div className='App'>
      <UsersTable
        className='users-table'
        users={users}
        createNewUser={handleCreateNewUser}
        deleteUser={handleDeleteUser}
        editUser={handleEditUser}
      />
      <ExpenseTable className='expense-table' users={users} />
    </div>
  )
}

export default App
