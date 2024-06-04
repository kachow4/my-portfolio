import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBowlFood, faBowlRice, faCoffee, faMugHot, faPepperHot, faTags } from '@fortawesome/free-solid-svg-icons';

export default function About() {
  return (
    <div className='min-w-[300px]'>
        <section id="profile" className='flex flex-col
                                        tablet+:py-6 tablet+:gap-10 tablet+:items-center
                                        laptop:py-8 
                                        laptop+:px-24 laptop+:py-20
                                        desktop+:px-72'>
            <article className="max-w-screen-xl
                                tablet+:grid tablet+:grid-cols-10 tablet+:gap-4">
                <div className='flex flex-col gap-1 p-4
                                tablet:p-6
                                tablet+:row-start-1 tablet+:row-end-2 tablet+:col-start-4 tablet+:col-end-11 tablet+:order-2 tablet+:text-right'>
                    <span className='text-dark-green text-xl
                                    tablet:text-2xl
                                    tablet+:text-3xl tablet+:p-4 font-semibold'>More About Katie!</span>
                    <div className="flex flex-col gap-3 bg-light-green p-2 rounded-lg text-xs
                                    tablet:mt-2 tablet:p-4 tablet:text-sm
                                    tablet+:gap-5 laptop:mt-5 laptop:leading-6 laptop:text-base">
                        <p>
                            {`My name is Katie (she/her) and I'm an aspiring Web Developer striving to 
                            build eye-catching, optimal websites. My goal
                            is to help organizations and individuals grow their business and communicate
                            their mission and the values they are built upon.`}
                        </p>

                        <p>
                            {`I graduated from UCI in 2022 as a computer science major and psychology and social 
                            sciences minor, and I currently work as a Software Engineer at Prism Software. I've always wanted 
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
                        <p>
                        <span className='font-bold'>My favorite Technologies Include:</span>
                            <ul className='flex gap-2  
                                            tablet+:justify-end tablet+:gap-6'>
                                <li>AngularJS</li>
                                <li>Typescript</li>
                                <li>TailwindCSS</li>
                                <li>React</li>
                                <li>NextJS</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='flex justify-center rounded-full overflow-hidden mb-4
                                tablet+:ml-6 tablet+:row-start-1 tablet+:row-end-2 tablet+:col-start-1 tablet+:col-end-5
                                desktop+:max-w-[500px]'>
                    <div className='max-w-[200px] rounded-full overflow-hidden tablet+:hidden'>
                        <Image
                            priority
                            src='/images/KatieGradshoot-43.jpg'
                            width={200}
                            height={200}
                            style={{objectFit: "cover", objectPosition: "center"}}
                            alt={`Katie's Graduation Photo 2022`}
                        />
                    </div>
                        <Image className='hidden tablet+:block'
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
        <section className='flex flex-col gap-1 pl-7 p-4 text-sm text-light-brown bg-dark-brown italic
                            tablet:px-14 tablet:py-6
                            tablet+:gap-2 tablet+:text-center tablet+:p-10'>
                <h3 className='font-semibold text-xl'>Fun Facts:</h3>
                <ul className='flex flex-col gap-2 list-disc
                                tablet+:list-none'>
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