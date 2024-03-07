'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import styles from '../../../../style/NavBar.module.css'
import { FiHeart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addFavorite } from "@/lib/features/favorites/favoritesSlice";
export default function BookDetails({ params }) {

    const [books, setBooks] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://example-data.draftbit.com/books')
            .then(response => response.json())
            .then(data => {
                // Supprime le dernier élément du tableau
                const dataWithoutLastItem = data.slice(0, -1);

                setBooks(dataWithoutLastItem);

                
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const datafiltrer = books?.find(element => element.id == params.bookId);
    const handleAddToFavorites = () => {
        if (datafiltrer) {
            dispatch(addFavorite(datafiltrer));
        }
    };
    

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <Link href='/'><button className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors">Home</button></Link>
            </div>
            <div className="flex flex-col items-center md:flex-row   md:items-center md:justify-stretch">
            <img className="w-full md:w-auto max-w-xs  " src={datafiltrer?.image_url} alt={datafiltrer?.title} />
            <div className="mt-4 md:mt-0">
                <h1 className="text-xl md:text-2xl font-bold">{datafiltrer?.title}</h1>
                <p className="text-md md:text-lg">{datafiltrer?.authors}</p>
                <div className="flex items-center bg-white py-2 px-4">
                <button onClick={handleAddToFavorites}>Ajoutez aux favoris</button><FiHeart fill="red"/>
            </div>
    </div>
</div>
        </div>


    )
}