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
   <div className='bg-[#FDF7E4] '>
    <div className='grid grid-cols-4 gap-4 p-3'>
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
