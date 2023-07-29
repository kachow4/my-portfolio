import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBowlFood, faBowlRice, faCoffee, faMugHot, faPepperHot, faTags } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <div>
        <section id="profile" className='flex flex-col gap-10 px-24 py-20 items-center'>
            <article className="grid grid-cols-10 gap-4 max-w-screen-xl">
                <div className='row-start-1 row-end-2 col-start-4 col-end-11 order-2 text-right'>
                    <span className='text-dark-green text-3xl p-4 font-semibold'>More About Katie!</span>
                    <div className="flex flex-col gap-5 bg-light-green mt-5 p-4 leading-6 rounded-lg">
                        <p>
                            {`My name is Katie (she/her) and I'm an aspiring Web Developer striving to 
                            build eye-catching, optimal websites. My goal
                            is to help organizations and individuals grow their business and communicate
                            their mission and the values they are built upon.`}
                        </p>

                        <p>
                            {`I graduated from UCI in 2022 as a computer science major and psychology and social 
                            sciences minor, and I currently work as a Jr. Software Engineer at Prism Software. I've always wanted 
                            to combine my passion for computer programming and psychology into my dream career. 
                            My experiences working with small businesses and  non-profits 
                            have always inspired and motivated me to develop high quality websites to set them 
                            up for success. It is always a joy collaborating UI/UX designers to understand and 
                            successfully meet users' needs -- And as a detail-oriented person, working with CSS 
                            is something I can never grow tired of!`}
                        </p>

                        <p>
                            {`My goal is to produce the best work I can and allow anyone to express and share their positive impact 
                            on the world.`}
                        </p>

                        <span className='font-bold'>My favorite Technologies Include:</span>
                        <ul className='flex justify-end gap-6'>
                            <li>React</li>
                            <li>Typescript</li>
                            <li>NextJS</li>
                            <li>TailwindCSS</li>
                            <li>Angular</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center align-center row-start-1 row-end-2 col-start-1 col-end-5 rounded-full overflow-hidden'>
                    <Image 
                        priority
                        src='/images/KatieGradshoot-43.jpg'
                        width={500}
                        height={500}
                        style={{objectFit: "cover", objectPosition: "center"}}
                        alt={`Katie's Graduation Photo 2022`}
                    />
                </div>
            </article>
        </section>
        <section id="fun" className='flex flex-col gap-2 text-center p-10 text-light-brown bg-dark-brown'>
                <h3 className='font-semibold text-xl'>Fun Facts:</h3>
                <ul className='italic'>
                    <li>
                        {`You can always find me at a cozy cafe drinking overpriced iced espresso drinks as I work `}<FontAwesomeIcon icon={faMugHot}></FontAwesomeIcon>
                    </li>
                    <li>
                        {`Catch me checking out every thrift store in town `}<FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
                    </li>
                    <li>
                        {`When I'm not coding, I am in the kitchen cooking or baking to my heart's content `}<FontAwesomeIcon icon={faBowlRice}></FontAwesomeIcon>
                    </li>
                    <li>
                        {`I'm always up for eating the spiciest food to ever exist `}<FontAwesomeIcon icon={faPepperHot}></FontAwesomeIcon>
                    </li>
                </ul>
            </section>
    </div>
  )
}