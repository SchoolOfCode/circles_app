// // import { PrismaClient } from '@prisma/client'
// // import { CLIENT_PUBLIC_FILES_PATH } from 'next/dist/shared/lib/constants'

// // const prisma = new PrismaClient()

// // export default async function handler(req, res) {
// //   if (req.method === 'POST') {
// //     return await createComment(req, res)
// //   } else {
// //     return res.status(405).json({ message: 'Method not allowed', success: false })
// //   }
// // }


// import React from "react";
// import { useTable, useGlobalFilter, useAsyncDebounce  } from "react-table";
// import {useState} from "react"

// export default function Table({ columns, data }) {

//     // Use the state and functions returned from useTable to build your UI
//     const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//       useTable({
//         columns,
//         data,
//       });

//     // Render the UI for your table
//     return (


//       <table {...getTableProps()} border="1">
//          <span>
//       Search:{' '}
//       <input
//         // onChange={e => {
//         //   setValue(e.target.value);
//         //   onChange(e.target.value);
//         // }}
//         placeholder={` records...`}
//       />
//     </span>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => {
//                   return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     );
//   }
