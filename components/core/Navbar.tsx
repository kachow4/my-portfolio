'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const currentRoute = usePathname();
  return (
      <div className="flex px-24 pt-10 pb-5 justify-between">
          <div className="text-2xl font-bold">
              Katie Chow
          </div>
          <div className="tabs-wrapper">
              <ul className="tabs flex gap-5">
                  <li className="transition ease-out duration-500 hover:text-dark-green">
                    <Link href="/#projects">Projects</Link>
                  </li>
                  <li className="transition ease-out duration-500 hover:text-dark-green">
                    <Link href="/about" className={currentRoute === "/about" ? "text-dark-green" : ""}>About</Link>
                  </li>
                  <li className="transition ease-out duration-500 hover:text-dark-green">
                    <Link href='#contact'>Contact</Link>
                  </li>
                  <li className="transition ease-out duration-500 hover:text-dark-green">
                    <a target="_blank" href="https://www.dropbox.com/scl/fi/5a2q0tez0gkuwq0fcgdjd/Katie_Chow_Resume_28-07-2023-11-14-12.pdf?rlkey=1rg2u0s8p0l5pp3169ziw603w&dl=0" rel="noopener noreferrer">Resume</a>
                  </li>
              </ul>
          </div>
      </div>
  );
};