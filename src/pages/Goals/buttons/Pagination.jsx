import React from "react";
const Pagination = (props) => {
    return (
        <div className="main">
            <button>{props.value}</button>
        </div>
    );
};

export default Pagination;

// import React, { useState } from "react";

// const Pagination = ({ itemsPerPage, items }) => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const lastItemIndex = currentPage * itemsPerPage;
//   const firstItemIndex = lastItemIndex - itemsPerPage;
//   const currentItems = items.slice(firstItemIndex, lastItemIndex);

//   const changePage = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <div>
//       <ul>
//         {currentItems.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}

//       </ul>
//       <nav aria-label="Page navigation example">
//         <ul className="pagination">
//           {[...Array(Math.ceil(items.length / itemsPerPage))].map(
//             (page, index) => (
//               <li
//                 key={index}
//                 className={`page-item ${currentPage === index + 1 &&
//                   "active"}`}
//               >
//                 <button
//                   className="page-link"
//                   onClick={() => changePage(index + 1)}
//                 >
//                   {index + 1}
//                 </button>
//               </li>
//             )
//           )}
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Pagination;
