'use client'

import { useState, useEffect } from 'react';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://example-data.draftbit.com/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  


  return (
   <div>
    <h1>hello world</h1>
    <div>
        {books.map((book) => (
          <div key={book.id}>
            <img width={100} src={book.image_url} alt={`${book.image_url}`} />
            <strong>{book.title} </strong> par {book.author}
            
          </div>
        ))}
      </div>

   </div>
  );
  }
