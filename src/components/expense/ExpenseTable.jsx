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
    console.log('ID ->', id)
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
          {expenses &&
            expenses.map((item, index) => (
              <Expense
                key={index}
                fullName={item.fullName}
                id={item.id}
                category={item.category}
                description={item.description}
                cost={item.cost}
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
