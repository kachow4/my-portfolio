import Image from 'next/image'
import Link from 'next/link'
import { faGithub, faFigma, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { IconDefinition, faMousePointer, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {
  return (
  
    <div className="flex bg-dark-green px-8 py-5 tablet:px-24 tablet:py-10 justify-center">
      <div id="contact" className='flex flex-col gap-2 tablet:gap-5 bg-dark-green text-white items-center tablet:p-12'>
            <span className='font-bold text-md tablet:text-2xl'>Contact Me</span>

            <p className='text-sm tablet:text-md'>Please feel free to reach out! I would love connect and discuss open opportunities and receive any feedback 
                on my work.</p>
            
            <ul className="flex p-2 gap-10 w-full justify-center">
                <li>
                  <a href="https://www.linkedin.com/in/katie-chow-24a489166/" target="_blank">
                    <FontAwesomeIcon className="transition ease-out duration-500 hover:scale-[1.25]" icon={faLinkedin} size="2xl"></FontAwesomeIcon>
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:kchow1sfo@gmail.com" target="_blank">
                    <FontAwesomeIcon className="transition ease-out duration-500 hover:scale-[1.25]" icon={faEnvelope} size="2xl"></FontAwesomeIcon>
                    <span className="sr-only">Email</span>
                  </a>
                </li>     
            </ul> 
        </div>  
      </div>
   
    
  )
}