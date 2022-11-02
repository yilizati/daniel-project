import ExpenseTableComponent from './components/expense/ExpenseTable.Component'
import CompanyTableComponent from './components/company/CompanyTable.Component'
import UserTableComponent from './components/user/UserTable.Component'
import data from './data'
function App() {
  return (
    <div className='App'>
      <UserTableComponent data={data} />
    </div>
  )
}

export default App
