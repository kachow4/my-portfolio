import {faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <div className='flex flex-col gap-10 items-center min-h-[430px]'>

        <div className="relative min-h-[320px] tablet:h-[84vh]">

          <div className='h-[7vh] max-h-full tablet:max-h-full tablet:h-[30vh] -z-1'>
            <video autoPlay muted loop playsInline className='object-cover min-h-[430px] h-[40vh] tablet:w-[100vw] tablet:h-[85vh]'>
              <source src="/HeroVideo4KHighFrame.mp4" type="video/mp4"/>
            </video>
          </div>

          <div className='relative flex flex-col items-center justify-center'>
            <div className='flex flex-col bg-black bg-opacity-50 p-4 w-[80vw] gap-1 tablet:w-[70vw] tablet:p-10 tablet:gap-4 text-white rounded-2xl'>
              <p className="text-xs tablet:text-xl">{`Hi! I'm`}
                  <br/> 
                  <span className="text-2xl tablet:text-6xl text-dark-green">{introContent.name}</span>
                </p>
                <p className='text-xl tablet:text-5xl'>{`I'm a ${introContent.role} based in ${introContent.location}.`}</p>
                <p className='text-sm tablet:text-2xl'>{introContent.message}</p>
              </div>
          </div>

        </div>

      <FontAwesomeIcon className="hidden tablet:inline py-8" icon={faChevronDown} size="2xl"></FontAwesomeIcon>
    
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

  