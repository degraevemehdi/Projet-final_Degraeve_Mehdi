'use client'
import { useSelector } from 'react-redux';
import style from '../../style/all.module.css'
import { useState, useEffect } from 'react';


export default function Home() {
  const [books, setBooks] = useState([]);
  const searchTerm = useSelector((state) => state.search.searchTerm);

  useEffect(() => {
    fetch('https://example-data.draftbit.com/books')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const dataWithoutLastItem = data.slice(0, -1); 
        setBooks(dataWithoutLastItem)})
      .catch((error) => console.error('Error fetching data:', error));
      
  }, []);
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.authors.toLowerCase().includes(searchTerm.toLowerCase()) 
  );
  
  return (
   <div className='py-10'>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
        {/* {books.map((book) => (
          <div className='flex flex-col items-center' key={book.id}>
            <img className={style.image}src={book.image_url} alt={`${book.image_url}`} />
            <p>{book.authors}</p>
          </div>
        ))} */}
        {filteredBooks.map((book) => (
    <div key={book.id} className='flex flex-col items-center'>
      <img className={style.image}src={book.image_url} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.authors}</p>
      
    </div>
  ))}
      </div>

  </div>
  );
  }
