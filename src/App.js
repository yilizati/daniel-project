import ExpenseTable from './components/expense/ExpenseTable'
import UsersTable from './components/user/UserTable'
import { useState } from 'react'
import './App.css'

function App() {
  const usersSchema = [
    { firstName: 'john', lastName: 'doe', totalExpenses: '$3013', id: 1 },
  ]

  const [users, setUsers] = useState(usersSchema)
  const [usersExpenses, setUsersExpenses] = useState([])

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

  const handleEditExpense = (id) => {
    console.log('id --->', id)
  }
  const handleDeleteExpense = () => {}

  return (
    <div className='App'>
      <UsersTable
        className='users-table'
        users={users}
        createNewUser={handleCreateNewUser}
        deleteUser={handleDeleteUser}
        editUser={handleEditUser}
        usersExpenses={usersExpenses}
      />
      <ExpenseTable
        className='expense-table'
        users={users}
        userExpenses={usersExpenses}
        editExpense={handleEditExpense}
        deleteExpense={handleDeleteExpense}
      />
    </div>
  )
}

export default App
