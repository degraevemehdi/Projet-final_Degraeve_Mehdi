import Image from "next/image";
// import style from "../style/navbar.module.css"
import library from '../../public/library.svg'
import Link from "next/link";


export default function NavBar(){
    return(
        <div className="static flex justify-between py-3 px-6 bg-[#AD8B73]">
                <div>    
                    <Image src={library} alt={`${library}'s image`} width={50} height={75}></Image>
                </div>
                <div className="flex justify-between items-center gap-4">
                    <Link href={'/'}>Home</Link> 
                    <Link href={'/contact'}>Contact</Link> 
                    <a href="">Authors</a>
                </div>


        </div>
    )
}