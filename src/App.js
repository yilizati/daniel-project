import ExpenseTable from './components/expense/ExpenseTable'
import UsersTable from './components/user/UserTable'
import { useState } from 'react'
import './App.css'

function App() {
  const userSchema = [
    { firstName: 'john', lastName: 'doe', totalExpense: '3013', id: 1 },
  ]
  const expenseSchema = [
    {
      user: userSchema,
      category: 'Travel',
      description: 'some description',
      cost: '$300',
      id: 1,
    },
  ]

  const [users, setUsers] = useState(userSchema)
  const [usersExpenses, setUsersExpenses] = useState(expenseSchema)

  const handleCreateNewUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }])
  }

  const handleDeleteUser = (id) => {
    setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id))
    const updatedUserExpensesList = usersExpenses.filter(
      (user) => user.id !== id
    )

    console.log('-->', updatedUserExpensesList)
    setUsersExpenses(updatedUserExpensesList)
  }

  const handleEditUser = (id, newUser) => {
    const editedUsersList = users.map((user) => {
      if (id === user.id) return { ...newUser }
      return user
    })
    setUsers(editedUsersList)
  }

  console.log(users)

  return (
    <div className='App'>
      <UsersTable
        className='users-table'
        users={users}
        createNewUser={handleCreateNewUser}
        deleteUser={handleDeleteUser}
        editUser={handleEditUser}
      />
      <ExpenseTable
        className='expense-table'
        users={users}
        usersExpenses={usersExpenses}
      />
    </div>
  )
}

export default App
