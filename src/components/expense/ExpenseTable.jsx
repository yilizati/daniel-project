import React, { useState } from 'react'
import Expense from './Expense'
import ExpenseForm from './ExpenseForm'

export default function ExpenseTable({ users, usersExpenses }) {
  const [expenses, setExpenses] = useState([])

  const saveExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }])
  }

  const editExpense = (id, updatedExpense) => {
    const updatedExpensesList = expenses.map((exp) => {
      if (id === exp.id) return { ...updatedExpense }
      return updatedExpense
    })
    setExpenses(updatedExpensesList)
  }

  const deleteExpense = (id) => {
    const updatedExpensesList = expenses.filter((exp) => id !== exp.id)
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
            usersExpenses.map((exp, index) => (
              <Expense
                key={index}
                fullName={`${exp.user.firstName} ${exp.user.lastName}`}
                id={exp.id}
                category={exp.category}
                description={exp.description}
                cost={exp.cost}
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
