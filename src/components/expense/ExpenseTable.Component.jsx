import React from 'react'

export default function ExpenseTableComponent({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Catagory</th>
          <th>Description</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <select>
              {data.map((person) => {
                return (
                  <option value=''>
                    {person.firstName + ' ' + person.lastName}
                  </option>
                )
              })}
            </select>
          </td>

          <td>
            <select></select>
          </td>

          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  )
}
