import React, { useState } from 'react'
import Expense from './Expense'
import ExpenseForm from './ExpenseForm'

export default function ExpenseTable({
  users,
  usersExpenses,
  createNewExpense,
  deleteExpense,
}) {
  const [expenses, setExpenses] = useState([])

  const saveExpense = (newExpense) => {
    // setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }])
    createNewExpense(newExpense)
  }

  const editExpense = (id, updatedExpense) => {
    const updatedExpensesList = expenses.map((exp) => {
      if (id === exp.id) return { ...updatedExpense }
      return updatedExpense
    })
    setExpenses(updatedExpensesList)
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersExpenses &&
            usersExpenses.map((expense, index) => (
              <Expense
                key={index}
                fullName={expense.fullName}
                id={expense.id}
                category={expense.category}
                description={expense.description}
                cost={expense.cost}
                editExpense={editExpense}
                deleteExpense={deleteExpense}
                usersDropdownList={users}
              />
            ))}
        </tbody>
      </table>
    </>
  )
}
