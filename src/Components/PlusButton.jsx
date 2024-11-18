// import { Link, useLocation } from 'react-router-dom'
// import '../Styles/button.css'
// import { useState } from 'react'

// export const PlusButton = () => {
//   const [isFormOpen, setIsFormOpen] = useState(false)
//   const location = useLocation()
//   const toggleForm = () => {
//     setIsFormOpen(!isFormOpen)
//   }
//   const isAddNewTaskPage = location.pathname === '/addnewtask'
//   return (
//     <>
//       {isFormOpen && !isAddNewTaskPage && (
//         <Link to={'/addnewtask'}>
//           <button id="plusButton" onClick={toggleForm}>
//             +
//           </button>
//         </Link>
//       )}
//       {isAddNewTaskPage && (
//         // Show a button to go back to the task list if on the add new task page
//         <Link to={'/'}>
//           <button id="plusButton" onClick={toggleForm}>
//             -
//           </button>
//         </Link>
//       )}
//     </>
//   )
// }
