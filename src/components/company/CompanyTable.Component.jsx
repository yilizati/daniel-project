import React from 'react'

export default function CompanyTable({ usersExpenses }) {
  const map = new Map()
  for (let exp of usersExpenses) {
    if (map.has(exp.category)) {
      map.set(exp.category, map.get(exp.cost) + exp.cost)
    } else {
      map.set(exp.category, exp.cost)
    }
  }
  return (
    <table>
      <caption>Expense Table</caption>
      <thead>
        <tr>
          <th>Category</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {[...map.keys()].map((category, index) => {
          return (
            <tr key={index}>
              <td>{category}</td>
              <td>{category.cost}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
