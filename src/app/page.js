'use client'
import { useSelector, useDispatch } from 'react-redux';
import style from '../../style/all.module.css'
import { useState, useEffect } from 'react';
import { setSearchTerm } from '@/lib/features/search/searchSlice';
import Link from 'next/link';
import Image from 'next/image';
import hero from '../../public/hero.png'
import heart from '../../public/heart.svg'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"




export default function Home() {
  const [books, setBooks] = useState([]);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [carouselBooks, setCarouselBooks] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch('https://example-data.draftbit.com/books')
      .then(response => response.json())
      .then(data => {
        // Supprime le dernier élément du tableau
        const dataWithoutLastItem = data.slice(0, -160);
        
        setBooks(dataWithoutLastItem);

        // Sélection aléatoire pour le carrousel
        const shuffledBooks = [...dataWithoutLastItem].sort(() => 0.5 - Math.random());
        setCarouselBooks(shuffledBooks.slice(0, 5)); 
  
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
   <div className=''>
    <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Colonne de texte */}
          <div className='max-sm:flex max-sm:flex-col max-sm:items-center max-sm:text-center'>
            <h1 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">LET'S MAKE THE BEST INVESTMENT</h1>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              There Is No Friend As Loyal As A Book
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500">
            Join <span className='text-[#0C356A] font-extrabold'>The Book Club</span> Where every page opens a world of discovery
            </p>
            <Image src={heart} alt='heart' width={100} className='heartanimation py-5'></Image>
            
          </div>
          {/* Colonne pour l'image */}
          <div className="flex justify-center  md:justify-start">
          <Image
            src={hero}
            alt="Book promotion"
            width={500}   // Taille originale de l'image (à ajuster selon ton image)
            height={100}  // Taille originale de l'image (à ajuster selon ton image)
            className="rounded-lg"
          />
        </div>
        </div>
      </div>
    <div className='bg-[#FFBFBF] p-6'>
      <h1 className='text-[#0C356A] font-bold text-lg text-center md:text-left py'>Discover Our Best Sellers</h1>
      <div  className='flex justify-center items-center"'>
      <Carousel
    opts={{
      align: "start",
    }}
    className="w-full max-w-md sm:max-w-lg md:max-w-xl"
  >
    <CarouselContent>
      {carouselBooks.map((book, index) => (
        <CarouselItem key={index} className="px-1 sm:px-2">
          <div className="p-1">
            <Link className='flex justify-center' href={`/book/${book.id}`}>
              <img src={book.image_url} alt={book.title} className="max-sm:max-w-[200px]
              shadow-md shadow-black
              h-auto 
              object-cover 
              rounded-lg 
              md:max-w-[200px] lg:max-w-[250px]" />
            </Link>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="hidden sm:flex" />
    <CarouselNext className="hidden sm:flex" />
  </Carousel>

      </div>

    </div>
    
    <div className='flex justify-center gap-2'>

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
