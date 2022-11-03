import React from 'react'
import Expense from './Expense'
import ExpenseForm from './ExpenseForm'

export default function ExpenseTable({
  users,
  usersExpenses,
  createNewExpense,
  deleteExpense,
  editExpense,
}) {
  return (
    <>
      <ExpenseForm saveExpense={createNewExpense} usersDropdownList={users} />
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
