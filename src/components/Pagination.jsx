import React from 'react';

const Pagination = ({ totalTodos, todosPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => paginate(number)} className="page-item">
            <button>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
