import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'

export default function ExpenseTable({ users }) {
  const [isEditing, setIsEditing] = useState(false)

  const [tableData, setTableData] = useState([
    {
      users,
      categories: ['Food', 'Travel', 'Equipment'],
      description: '',
      cost: '',
    },
  ])
  // const viewTemplate = tableData.map(
  //   ({ firstName, lastName, category, description, cost }) => (
  //     <tr>
  //       <td>{`${firstName} ${lastName}`}</td>
  //       <td>{category}</td>
  //       <td>{description}</td>
  //       <td>{cost}</td>
  //     </tr>
  //   )
  // )

  const saveExpense = (formData) => {
    // setTableData(tableData.push(formData))
    console.log(formData)
  }

  // const editTemplate = (
  //   <tr>
  //     <td>
  //       <select name='users'>
  //         <option value='--select'>--select--</option>
  //         {users.map((user, index) => (
  //           <option key={index} value={user.fullname}>
  //             {user.firstName}
  //           </option>
  //         ))}
  //       </select>
  //     </td>
  //     <td></td>
  //     <td>
  //       <input type='text' name='description' />
  //     </td>
  //     <td>
  //       <input type='text' name='cost' />
  //     </td>
  //     <td>
  //       <button>edit</button>
  //       <button>delete</button>
  //     </td>
  //   </tr>
  // )

  return (
    <>
      <ExpenseForm saveExpense={saveExpense} usersDropdownList={users} />
      {/* <table>
        <caption>Expense Table</caption>
        <thead>
          <tr>
            <th scope='col'>Full Name</th>
            <th scope='col'>Category</th>
            <th scope='col'>Description</th>
            <th scope='col'>Cost</th>
          </tr>
        </thead>
        <tbody>{tableData && viewTemplate}</tbody>
      </table> */}
    </>
  )
}
