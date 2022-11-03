import React from 'react'

export default function CompanyTable({ categoryAndTotal }) {
  return (
    <table>
      <caption>Expense Table</caption>
      <thead>
        <tr>
          <th>Category</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  )
}
