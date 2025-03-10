import {faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <div className='flex flex-col gap-10 items-center min-h-[430px] min-w-[320px]'>

        <div className="relative min-h-[320px] min-w-[320px] 
                        tablet+:h-[50vh] 
                        laptop:h-[70vh] 
                        laptop+:h-[75vh]
                        desktop:h-[85vh]">
          <div className='h-[5vh] max-h-full -z-1 min-w-[320px] 
                          tablet+:h-[6vh] 
                          laptop:h-[10vh] 
                          laptop+:h-[15vh]
                          desktop:h-[25vh]
                          desktop+:h-[30vh]'>
            <video autoPlay muted loop playsInline className='object-cover min-h-[430px] h-[40vh] min-w-[320px] 
                                                              tablet+:h-[50vh] 
                                                              laptop:w-[100vw] laptop:h-[70vh] 
                                                              laptop+:h-[75vh]
                                                              desktop:h-[85vh]'>
              <source src="/HeroVideoV4.mp4" type="video/mp4"/>
            </video>
          </div>

          <div className='relative flex flex-col items-center justify-center min-w-[320px]'>
            <div className='flex flex-col bg-black bg-opacity-50 p-4 w-[80vw] gap-1 min-w-[320px] text-white rounded-2xl 
                            tablet:p-6 tablet:gap-2 
                            tablet+:gap-4 
                            desktop:p-10
                            laptop+:w-[70vw]'>
              <p className="text-sm min-w-[320px] 
                            tablet:text-base 
                            tablet+:text-lg 
                            laptop:text-xl">
                  {`Hi! I'm`}<br/> 
                  <span className="text-4xl text-dark-green min-w-[320px] 
                                  tablet:text-5xl 
                                  laptop+:text-6xl">
                    {introContent.name.toUpperCase()}
                  </span>
              </p>
              <p className='text-2xl min-w-[300px] 
                            tablet:text-3xl 
                            laptop:text-4xl
                            desktop:text-5xl'>{`I'm a ${introContent.role} based in ${introContent.location}.`}</p>
              <p className='text-base min-w-[320px] 
                            tablet:text-lg 
                            laptop:text-xl
                            desktop:text-2xl'>{introContent.message}</p>
            </div>
          </div>

        </div>    
    </div>
  )
}

const introContent = {
    name: 'Katie',
    role: 'software engineer',
    location: 'San Francisco, California',
    message: `I have a strong passion for developing websites.  I create to uplift and spread 
    the unique and positive work that individuals and organizations wish to share with the world.`
  }

  /*<FontAwesomeIcon className="hidden invisible tablet:inline tablet:py-8" icon={faChevronDown} size="2xl"></FontAwesomeIcon> */

  