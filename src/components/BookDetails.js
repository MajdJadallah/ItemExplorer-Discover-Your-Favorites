// import React from 'react'
// import { useParams } from 'react-router-dom';
// import books from '../data';
// function BookDetails() {
//     const {id}=useParams();
//     const Details = () => {
//         const Details = books .find(book => book.id === parseInt(id))
//         const { name, author,year,genre,description,details ,image} = Details;
//   return (
//     <div className="book-details">
//                 <article>
//                 <h1>{book.name}</h1>
//                 <p>Author:  {book.author}</p>
//                 <div className="body" id="body">{book.description}</div>
//                 {/* <button onClick={handleDelete}>Delete</button> */}
//                 </article>
//         </div>
//   )
// }
// export default BookDetails;
import React from 'react';
import { useParams,useNavigate } from 'react-router-dom'; 
import books from '../data';
import Nav from './Nav';
function BookDetails() {
const { id } = useParams();
const book = books.find((book) => book.id === parseInt(id));
// const { name, author, year, genre, description, details, image } = book;
const navigate = useNavigate();


return (
<>
    <Nav/>
<div className="book-details">
<article>
<img src={book.image} id='img-details' className='img-det' />

<div id='book-details-text'>
<h1 id='name-details' className='name-details'>{book.name}</h1>
<p><span>Author:</span> {book.author}</p>
<p><span>genre: </span>{book.genre}</p>
<p><span>Year: </span> {book.year}</p>
<div className="body" > <span>Description: </span>  {book.description}
</div>
<div>
    <button className='btn-back' onClick={() => navigate(-1)}> Back</button>
</div>
</div>
{/* <button onClick={handleDelete}>Delete</button> */}
</article>
</div>
</>
);
}

export default BookDetails;
