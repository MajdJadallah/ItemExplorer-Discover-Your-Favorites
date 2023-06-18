// import { Link } from "react-router-dom";
// import React from 'react';
// function BookList({ books }) {
//   return (
//     <div>
//       <h2>The Newest</h2>
//       <div className='row' id='row-books'>
//         {books.map((book,index) => {
//           return (
//             <div className="col-sm-12 col-md-6 col-lg-4 card-content pb-5 mb-5" key={book.id}>
//               <div className="card mb-3" id="card">
//                 <img
//                   src={book.image}
//                   className="card-img-top book-image"
//                   alt={book.name}
//                 />
//                 <div className="card-body">
//                 <Link to={`/book/${book.id}`} id="h5">
//                 <h5 className="card-title" >{book.name}</h5>
//                 </Link>
//                   <p className="card-text">{book.author}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default BookList;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookList({ books }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBooks = books.filter((book) => {
    return book.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div id='Book-List'>
      <h2>The Newest</h2>
      <div>
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="row" id="row-books">
        {filteredBooks.map((book, index) => {
          return (
            <div
              className="col-sm-12 col-md-6 col-lg-4 card-content pb-5 mb-5"
              key={book.id}
            >
              <div className="card mb-3" id="card">
                <img
                  src={book.image}
                  className="card-img-top book-image"
                  alt={book.name}
                />
                <div className="card-body">
                  <Link to={`/book/${book.id}`} id="h5">
                    <h5 className="card-title">{book.name}</h5>
                  </Link>
                  <p className="card-text">{book.author}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BookList;
