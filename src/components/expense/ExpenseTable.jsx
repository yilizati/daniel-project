import React, { useState } from 'react'
import Expense from './Expense'
import ExpenseForm from './ExpenseForm'

export default function ExpenseTable({
  users,
  userExpenses,
  editExpense,
  deleteExpense,
}) {
  const [expenses, setExpenses] = useState(userExpenses)
  const saveExpense = (newExpense) => {
    console.log('NEW', newExpense)
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }])
    console.log(expenses)
  }

  return (
    <>
      <ExpenseForm saveExpense={saveExpense} usersDropdownList={users} />
      <table>
        <caption>Expense Table</caption>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => (
            <Expense
              key={index}
              fullName={item.fullName}
              id=''
              category={item.category}
              description={item.description}
              cost={item.cost}
              editExpense={editExpense}
              deleteExpense={deleteExpense}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}
