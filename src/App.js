import ExpenseTable from './components/expense/ExpenseTable'
import UsersTable from './components/user/UserTable'
import CompanyTable from './components/company/CompanyTable.Component'
import { useState } from 'react'
import './App.css'

function App() {
  const sampleData = [
    { firstName: 'john', lastName: 'doe', totalExpense: '300', id: 1 },
  ]

  const [users, setUsers] = useState(sampleData)
  const [usersExpenses, setUsersExpenses] = useState([])

  const handleCreateNewUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }])
  }

  const handleDeleteUser = (id) => {
    setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id))
    const updatedUserExpensesList = usersExpenses.filter(
      (user) => user.id !== id
    )
    setUsersExpenses(updatedUserExpensesList)
  }

  const handleEditUser = (id, newUser) => {
    const editedUsersList = users.map((user) => {
      if (id === user.id) return { ...newUser }
      return user
    })
    setUsers(editedUsersList)
  }

  const handleCreateNewExpense = (newExpense) => {
    const { userId: id } = newExpense
    setUsersExpenses([
      ...usersExpenses,
      {
        ...newExpense,
        id: usersExpenses.length + 1,
      },
    ])
    const updatedUsersList = users.map((user) => {
      if (id === user.id) return { ...user, totalExpense: newExpense.cost }
      return user
    })
    setUsers(updatedUsersList)
  }

  const handleDeleteExpense = (id) => {
    const updatedUserExpensesList = usersExpenses.filter((e) => e.id !== id)
    setUsersExpenses(updatedUserExpensesList)
  }

  const handleEditExpense = (id, updatedExpense) => {
    const updatedExpensesList = usersExpenses.map((exp) => {
      if (id === exp.id) return { ...updatedExpense }
      return updatedExpense
    })
    setUsersExpenses(updatedExpensesList)
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
      <ExpenseTable
        className='expense-table'
        users={users}
        usersExpenses={usersExpenses}
        createNewExpense={handleCreateNewExpense}
        deleteExpense={handleDeleteExpense}
        editExpense={handleEditExpense}
      />
      <CompanyTable usersExpenses={usersExpenses} />
    </div>
  )
}

export default App
