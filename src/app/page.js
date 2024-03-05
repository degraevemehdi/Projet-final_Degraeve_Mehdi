'use client'
import style from '../../style/all.module.css'
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
   <div className='py-10'>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
        {books.map((book) => (
          <div className='flex flex-col items-center' key={book.id}>
            <img className={style.image}src={book.image_url} alt={`${book.image_url}`} />
            <p>{book.authors}</p>
          </div>
        ))}
      </div>

  </div>
  );
  }
