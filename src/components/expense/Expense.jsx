import React, { useState } from 'react'

export default function Expense({
  fullName,
  category,
  description,
  cost,
  id,
  editUser,
  deleteUser,
}) {
  const [isEditing, setIsEditing] = useState(false)

  const viewTemplate = (
    <tr>
      <td>{fullName}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>{cost}</td>
    </tr>
  )

  return viewTemplate

  // const edittingTemplate = (
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
}
