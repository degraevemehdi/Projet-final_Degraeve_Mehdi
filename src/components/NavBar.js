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
        <div className=" flex justify-between py-3 px-6  text-black	">
                <div>    
                    <Image src={library} alt={`${library}'s image`} width={50} height={75}></Image>
                </div>
                <Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
                {/* <div className="flex justify-between items-center gap-4">
                    <Link href={'/'}>Home</Link> 
                    <Link href={'/contact'}>Contact</Link>
                    <Link  className='flex items-center'href={'/login'}><FiLogIn /> <span className="ml-2">Connexion</span>
                    </Link>
                    <Link href={'/favorites'} className="flex items-center">
                            <FiHeart /> <span className="ml-2">Favoris</span>
                    </Link>
                </div> */}


        </div>
    )
}