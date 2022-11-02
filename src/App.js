import ExpenseTableComponent from './components/expense/ExpenseTable.Component'
import UserTableComponent from './components/user/UserTable.Component'
import data from './data'
import { useState } from 'react'
function App() {
  const [users, setUsers] = useState([
    { firstName: 'john', lastName: 'doe' },
    { firstName: 'jane', lastName: 'joe' },
  ])

  return (
    <div className='App'>
      <UserTableComponent data={data} />
      <ExpenseTableComponent users={users} />
    </div>
  )
}

export default App
