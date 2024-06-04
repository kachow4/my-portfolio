'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const currentRoute = usePathname();

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <nav className='w-full h-full flex flex-col py-3 px-5 
                    tablet:flex-row tablet:p-5 tablet:justify-between
                    tablet+:px-10 laptop:px-20 laptop+:px-24 desktop:px-64'>
      <div className='flex gap-2 items-center'>
        <FontAwesomeIcon className='tablet:invisible tablet:hidden' icon={faBars} size="lg" onClick={toggleHamburger}></FontAwesomeIcon>
        <div className='flex w-full text-xl font-semibold justify-center whitespace-nowrap tablet:justify-start'>
          Katie Chow
        </div>
      </div>
      <ul className={`${hamburgerOpen ? 'inline': 'hidden'} gap-2 py-1 tablet:flex tablet:flex-row laptop:gap-4`}>
        <li className="transition ease-out duration-500 hover:text-dark-green">
          <Link href="/">Home</Link>
        </li>
        <li className="transition ease-out duration-500 hover:text-dark-green">
          <Link href="/about" className={currentRoute === "/about" ? "text-dark-green" : ""}>About</Link>
        </li>
        <li className="transition ease-out duration-500 hover:text-dark-green">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="transition ease-out duration-500 hover:text-dark-green">
          <Link target="_blank" href="https://www.dropbox.com/scl/fi/o5cuzt5ou3283q881zzkm/KatieChowResume2024.pdf?rlkey=71d0nzjvdg8jp4i3miinpfxr8&st=svo0na7q&dl=0" rel="noopener noreferrer">Resume</Link>
        </li>
      </ul>
    </nav>
  );
};

