import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import insta from '../../public/insta.svg'
import linkedin from '../../public/linkedin.svg'
import twitter from '../../public/twitter.svg'

export default function  Footer() {
  return (
    <footer className="bg-[#FFBFBF] text-[#0C356A]">
  <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
    <div className="mb-4 md:mb-0">
      <h2 className="text-lg font-bold">Do you have a question?</h2>
      <p className="text-sm">Feel free to contact me.</p>
      <p className="text-lg font-bold">+61 (0) 111 222 333</p>
    </div>
    <button className="bg-[#0C356A] text-white px-4 py-2 rounded-full hover:bg-[#104d9d] transition-colors">
      Send me message
    </button>
  </div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center border-t border-[#0C356A] pt-4">
    <div className="flex gap-4">
      <Link href="/home">Home</Link>
      <Link href="/benefits">Benefits</Link>
      <Link href="/chapters">Chapters</Link>
    </div>
    <div className="flex gap-4">
        <Image src={insta} alt='insta' width={20}></Image>
        <Image src={linkedin} alt='linedin' width={20}></Image>
        <Image src={twitter} alt='twitter'width={20}></Image>
        
      <a href="#" className="text-[#0C356A] hover:text-[#104d9d]">
        
      </a>
      <a href="#" className="text-[#0C356A] hover:text-[#104d9d]">
        
      </a>
      
    </div>
  </div>
  <p className="text-center py-4 text-[#0C356A]">
    © 2024 All right reserved. Made with <span className="text-red-500">&hearts;</span> by ThemeAtelier
  </p>
</footer>
  )
}
