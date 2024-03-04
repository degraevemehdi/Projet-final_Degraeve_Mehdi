
import Image from "next/image";
// import style from "../style/navbar.module.css"
import library from '../../public/library.svg'
import Link from "next/link";
import { FiLogIn,FiHeart } from "react-icons/fi";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
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
    
    return(
        <div className="nav flex justify-between py-3 px-6  text-black	">
                <div>    
                    <Image src={library} alt={`${library}'s image`} width={50} height={75}></Image>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <Link href={'/'}>Home</Link> 
                    <Link href={'/register'}>Register</Link>
                    <Link  className='flex items-center'href={'/login'}><FiLogIn /> <span className="ml-2">Connexion</span>
                    </Link>
                    
                </div>
                <Sheet>
                  <SheetTrigger className="flex items-center gap-1"><FiHeart className="icon"/>Favorite</SheetTrigger>
                  <SheetContent>
                    <SheetHeader >
                      <SheetTitle><Link href={'/favorites'} className="flex items-center">
                            <FiHeart  fill="red"/> <span className="ml-2">Favoris</span>
                    </Link></SheetTitle>
                      <SheetDescription>
                        <strong>Liste de vos favoris</strong>

                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
                


        </div>
    )
}