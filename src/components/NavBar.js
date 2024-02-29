import Image from "next/image";
// import style from "../style/navbar.module.css"
import library from '../../public/library.svg'
import Link from "next/link";


export default function NavBar(){
    return(
        <div className="flex">
                <div>    
                    <Image src={library} alt={`${library}'s image`} width={50} height={75}></Image>
                </div>
                <div className="flex">
                    <Link href={'/'}>Home</Link> 
                    <Link href={'/contact'}>Contact</Link> 
                
                    
            
            
                    <a href="">Contact</a>
                </div>


        </div>
    )
}