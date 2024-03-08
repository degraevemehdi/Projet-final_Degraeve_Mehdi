'use client'
import Link from "next/link"
import { useEffect, useState } from "react";
import styles from '../../../../style/NavBar.module.css'
import { FiHeart, FiStar, FiMessageSquare } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addFavorite } from "@/lib/features/favorites/favoritesSlice";
export default function BookDetails({ params }) {

    const [books, setBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);
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
    const toggleModal = () => {
        setShowModal(!showModal);
    };
    

    return (
        <div className="container mx-auto p-4 bg-[#FFBFBF] mt-5 ">
            <div className="mb-4">
                <Link href='/'><button className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors">Back</button></Link>
            </div>

            <div className="flex flex-col items-center md:flex-row md:items-center md:justify-center gap-5">
                <div className="">
                    <img className="w-48 h-64 object-cover rounded-lg " src={datafiltrer?.image_url} alt={datafiltrer?.title} />
                </div>
                <div className="mt-4 md:mt-0 md:ml-4 text-center md:text-left">
                    <h1 className="text-xl md:text-2xl font-bold">{datafiltrer?.title}</h1>
                    <p className="text-md md:text-lg">{datafiltrer?.authors}</p>
                    <div className="flex justify-center md:justify-start items-center mt-2 ">
                                <FiMessageSquare className="text-gray-500" /> <span>{datafiltrer?.review_count} Reviews</span>
                    </div>
                    <p className="">Format: {datafiltrer?.format}</p>
                    <div className="flex justify-center md:justify-start items-center mt-2">
                                <FiStar className="text-yellow-500" /> <span>{datafiltrer?.rating}</span>
                    </div>
                    <div className="flex justify-center md:justify-start items-center mt-4">
                    <button className="bg-white" onClick={handleAddToFavorites}>Ajoutez aux favoris</button><FiHeart fill="red"/>
                    </div>
                </div>
                {/* Button to open modal */}
            <button onClick={toggleModal} className="mt-4 bg-[#0C356A]  text-white px-4 py-2 rounded hover:bg-blue-700">Voir le résumé</button>

{/* Modal implementation */}
{showModal && (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center px-4 sm:px-6 lg:px-8 z-50">
        <div className="bg-white p-5 rounded-lg w-full max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col justify-between max-h-[80vh]">
            <h2 className="text-xl font-bold mb-2">Résumé du livre</h2>
            <div className="overflow-y-auto mb-4 flex-grow">
                <p>{datafiltrer?.description}</p>
            </div>
            <button onClick={toggleModal} className="mt-4 bg-[#0C356A]  text-white px-4 py-2 rounded hover:bg-red-700 self-end">Fermer</button>
        </div>
    </div>
)}

            </div>

{/* <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
                    <img className="max-w-xs md:max-w-sm" src={datafiltrer?.image_url} alt={datafiltrer?.title} />
                    <div className="mt-4 md:mt-0 md:ml-4">
                        <h1 className="text-xl md:text-2xl font-bold">{datafiltrer?.title}</h1>
                        <p className="text-md md:text-lg">{datafiltrer?.authors}</p>
                        <div className="flex items-center mt-2">
                            <FiStar className="text-yellow-500" /> <span>{datafiltrer?.rating}</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <FiMessageSquare className="text-gray-500" /> <span>{datafiltrer?.review_count} Reviews</span>
                        </div>
                        <p className="mt-2">Format: {datafiltrer?.format}</p>
                        <div className="flex items-center mt-4">
                            <button onClick={handleAddToFavorites} className="mr-4">Ajoutez aux favoris</button><FiHeart fill="red"/>
                        </div>
                    </div>
                </div> */}
        </div>


    )
}