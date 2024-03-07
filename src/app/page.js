'use client'
import { useSelector, useDispatch } from 'react-redux';
import style from '../../style/all.module.css'
import { useState, useEffect } from 'react';
import { setSearchTerm } from '@/lib/features/search/searchSlice';
import Link from 'next/link';


export default function Home() {
  const [books, setBooks] = useState([]);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch('https://example-data.draftbit.com/books')
      .then(response => response.json())
      .then(data => {
        // Supprime le dernier élément du tableau
        const dataWithoutLastItem = data.slice(0, -1);
        
        setBooks(dataWithoutLastItem);
  
        // Extraction et filtrage des genres après la suppression du dernier livre
        const allGenres = new Set(dataWithoutLastItem.flatMap(book => 
          book.genres ? book.genres.split(',').map(genre => genre.trim()) : []
        ));
        const commonGenres = ["Fiction", "Non-Fiction", "Fantasy", "Science Fiction", "Mystery", "Romance", "Young Adult"];
        const filteredGenres = Array.from(allGenres).filter(genre => commonGenres.includes(genre));
  
        setGenres(filteredGenres);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };
  const filteredBooks = books.filter(book =>
    (selectedGenre === '' || (book.genres && book.genres.split(',').map(genre => genre.trim()).includes(selectedGenre))) &&
    (book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.authors.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
   <div className='py-10'>
    <div className='flex justify-center gap-2'>
    {/* onChange={handleFilterChange} */}

    <select onChange={handleGenreChange} value={selectedGenre}>
          <option value="">Tous les genres</option>
          {genres.map(genre => (<option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      <input
        type="search"
        placeholder="Rechercher un livre..."
        onChange={handleSearchChange}
        className="search-input" // Ajoute des styles comme nécessaire
      />
    </div>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
        {/* {books.map((book) => (
          <div className='flex flex-col items-center' key={book.id}>
            <img className={style.image}src={book.image_url} alt={`${book.image_url}`} />
            <p>{book.authors}</p>
          </div>
        ))} */}
        {filteredBooks.map((book) => (
          <Link href={`/book/${book.id}`}>
      <div key={book.id} className='flex flex-col items-center'>
      
      <img className={style.image}src={book.image_url} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.authors}</p>

      
      
    </div>
    </Link>
  ))}
      </div>

  </div>
  );
  }
