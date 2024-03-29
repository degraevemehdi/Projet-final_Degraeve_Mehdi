'use client'
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import library from '../../public/library.svg'
import moon from '../../public/darkmode.svg'
import Link from "next/link";
import { FiLogIn, FiHeart } from "react-icons/fi";
import { removeFavorite } from "@/lib/features/favorites/favoritesSlice";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function NavBar(){
  
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const username = useSelector((state) => state.user.username);
    const favorites = useSelector((state) => state.favorites.items);
    

  
    const dispatch = useDispatch();

    const handleRemoveFavorite = (bookId) => {
      dispatch(removeFavorite({ id: bookId }));
  };

   
    
    return(
        <div className=" md:flex justify-between py-3 px-6  text-[#0C356A] bg-[#FFBFBF]">
                <div className="flex gap-3 items-center  "> 
                    <Image src={library} alt={`${library}'s image`} width={90} ></Image>
                    <h1 className="text-3xl font-extrabold">The Book Club</h1>   
                </div>
                <div className="flex justify-between items-center gap-4 font-extrabold max-sm:flex-col">
                <Link href={'/'}>Home</Link>
                
                {isLoggedIn ? (
                  <span className="flex items-center">Connecté en tant que {username}</span>
                ) : (
                  <>
                    <Link href={'/register'}>Register</Link>
                    <Link className='flex items-center' href={'/login'}><FiLogIn /><span className="ml-2">Connexion</span></Link>
                  </>
                )}
                  <Image src={moon} alt="darkmode" width={30} className="flex items-center cursor-pointer"></Image>
               
                <Sheet>
                <SheetTrigger className="flex items-center gap-1">
                    <FiHeart className="icon" />Favorite
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Favoris</SheetTitle>
                        <SheetDescription>
                            <strong>Liste de vos favoris</strong>
                        </SheetDescription>
                    </SheetHeader>
                    <SheetFooter className="grid grid-cols-2 text-balance text-center">
                        {favorites.length > 0 ? (
                            favorites.map((book) => (
                                <div key={book.id} className="p-2 flex flex-col justify-between items-center">
                                    <Link href={`/book/${book.id}`} className="flex flex-col items-center gap-2">
                                        
                                            <img src={book.image_url} alt={book.title} className=" max-h-20 object-cover"  />
                                            {book.title}
                                        
                                    </Link>
                                    <button 
                                        onClick={() => handleRemoveFavorite(book.id)}
                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition duration-200"
                                    >
                                        Retirer
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className="p-2">Aucun favori ajouté</div>
                        )}
                    </SheetFooter>
                </SheetContent>
            </Sheet>
             </div>
                
        </div>
    )
}
