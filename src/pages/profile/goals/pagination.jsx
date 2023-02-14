// import React from "react";
// import "./buttons/btn.css";

// const Pagination = ({ totalPosts, PostPerPage, setCurrentPage }) => {
//     let pages = [];
//     for (let i = 1; i <= Math.ceil(totalPosts / PostPerPage); i++) {
//         pages.push(i);
//     }
//     return (
//         <div>
//             {pages.map((page, index) => {
//                 return (
//                     <button
//                         key={index}
//                         onClick={() => {
//                             setCurrentPage(page);
//                         }}
//                     >
//                         {page}
//                     </button>
//                 );
//             })}
//         </div>
//     );
// };

// export default Pagination;


import React from "react";
import "./buttons/btn.css";

const Pagination = ({
    totalPosts,
    PostPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / PostPerPage); i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className="btn">
                {currentPage > 1 && (
                    <button
                        onClick={() => {
                            setCurrentPage(currentPage - 1);
                        }}
                    >
                        {"<"}
                    </button>
                )}
                {pages.map((page, index) => {
                    if (
                        page === 1 ||
                        page === 2 ||
                        page === 3 ||
                        page === 4 ||
                        page === 56||
                        page === totalPosts ||
                        (page >= currentPage - 2 && page <= currentPage + 2)
                    ) {
                        return (
                            <button
                                key={index}
                                className={page === currentPage ? "active" : ""}
                                onClick={() => {
                                    setCurrentPage(page);
                                }}
                            >
                                {page} 
                            </button>
                        );
                    } else if (
                        page === currentPage - 3 ||
                        page === currentPage + 3
                    ) {
                        return <span key={index}>...</span>;
                    } else {
                        return null;
                    }
                })}
                {currentPage < pages.length && (
                    <button
                        onClick={() => {
                            setCurrentPage(currentPage + 1);
                        }}
                    >
                        {">"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Pagination;
