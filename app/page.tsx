import Image from 'next/image'
import { faGithub, faFigma, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { IconDefinition, faMousePointer, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

export default function Home() {
  return (
    <div className='flex flex-col gap-10 px-24 items-center'>
      <section id="intro" className='flex flex-col gap-5 h-[60vh] max-w-screen-xl justify-center'>
            <p className="text-xl">{`Hi! I'm`}
              <br/> 
              <span className="text-6xl text-dark-green">{introContent.name}</span>
            </p>
            <p className='text-5xl'>{`I'm a ${introContent.role} based in ${introContent.location}.`}</p>
            <p className='text-2xl'>{introContent.message}</p>
        </section>

        <section id="projects" className='flex flex-col m-10 gap-20 max-w-screen-xl'>
          <span className='text-4xl font-bold'>{`Projects I'm Proud of`}</span>
          {Array(4)
            .fill(0)
            .map((x, i) => (
            <ProjectArticle
                key={projects[i].id}
                name={projects[i].name}
                description={projects[i].description}
                technologies={projects[i].technologies}
                links={projects[i].links}
                imgPath={projects[i].imgPath}
                reverse={projects[i].reverse}
                />
            ))}
        </section>
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

const projects = [
  {
    id: 0,
    name: 'URMO Website',
    description: 'I designed and built a website for my previous exhibition dance team, URMO. I recently re-made the website using React, while the original project (made in 2020) was coded in raw HTML and CSS. My goal was to create a new source to increase online traffic for our recruitment. The repository is now shared with URMO so that following generations can clone and created updated websites to reflect the advertisements and accomplishments of the current team.',
    technologies: ['React', 'NextJS', 'TailwindCSS'],
    links: [
      {
        id: 0,
        url:'https://github.com/kachow4/urmo-website',
        icon: faGithub,
        name: 'GitHub',
      },
      {
        id: 1,
        url: 'https://urmo-11th-gen-website.vercel.app/',
        icon: faMousePointer,
        name: 'Deployment'
      }
    ],
    imgPath: '/images/urmo-website.PNG',
    reverse: false
  },
  {
    id: 1,
    name: 'MakeHub',
    description: `MakeHub is a mobile application focused specifically on makeup, 
                skincare and relevant products and emphasizes creating communities through shared 
                values and interests. It includes a personalization quiz, feed, discover page, 
                live voice and chat rooms, and a profile connected to all existing social medias. This
                project was designed with my Pod during my Estée Lauder Summer Internship.`,
    technologies: ['Figma'],
    links: [
      {
        id: 0,
        url:'https://www.figma.com/proto/m67ND4O9f9zWdUkz8Yz3d9/Pod-2-MakeHub-App?node-id=1-2&starting-point-node-id=1%3A2',
        icon: faFigma,
        name: 'Figma Prototype',
      }
    ],
    imgPath: '/images/makehub.PNG',
    reverse: true
  },
  {
    id: 2,
    name: 'Study Buddies',
    description: `Study Buddies is a wellness and organizational application designed for
                   students to help maintain their routine and mental health during the school year. 
                   My team recieved the highest scoring design at UCI's 2021 Design-a-thon.`,
    technologies: ['Figma'],
    links: [
      {
        id: 0,
        url:'https://www.figma.com/proto/vCQoMw9fNjrdIgyW7kxEXc/Designathon-2020?node-id=16-5&starting-point-node-id=16%3A5',
        icon: faFigma,
        name: 'Figma Prototype',
      }
    ],
    imgPath: '/images/study-buddies.PNG',
    reverse: false
  },
  {
    id: 3,
    name: 'StockABC',
    description: `StockABC, inspired by StockX, is an e-commerce website specializing in sneakers. 
                  I designed and built the website alongside 2 other groupmates in our Internet Applications & Engineering course.`,
    technologies: ['HTML',' CSS', 'JavaScript', 'SQL', 'JQuery', 'Java Servlets'],
    links: [
      {
        id: 0,
        url:'https://github.com/kachow4/INF124Spring2022',
        icon: faGithub,
        name: 'GitHub',
      }
    ],
    imgPath: '/images/StockABC.PNG',
    reverse: true
  }
]

const LinkItem: FC<{
  link: string
  icon: IconDefinition
  name: string
  }> = ({link, icon, name}) => (
    <li>
    <a className="flex gap-2 px-2 py-1 bg-dark-green hover:bg-light-green duration-300 rounded-md" href={link} target="_blank">
      <FontAwesomeIcon icon={icon} size="xl" ></FontAwesomeIcon>
      {name}
    </a>
  </li>
  )

const ProjectArticle: FC<{
  name: string
  description: string
  technologies: string[]
  links: any[]
  imgPath: string
  reverse: boolean
  }> = ({name, description, technologies, links, imgPath, reverse}) => (
    <article className="grid grid-cols-12 gap-4">
      <div className={`flex flex-col gap-3 row-start-1 row-end-2 ${reverse ? `col-start-6 col-end-13 text-right` : `col-start-1 col-end-7 text-left`} order-2`}>
          <h3 className='text-2xl text-dark-green font-bold'>{name}</h3>
          <p className="bg-light-green p-4 leading-6 rounded-xl">{description}</p>
          <div className='flex flex-col gap-2'>
            <h4 className='text-base font-bold'>Technologies Include:</h4>
            <ul className={`flex gap-8 ${reverse ? `justify-end` : `justify-start`}`}>
            {Array(technologies.length)
              .fill(0)
              .map((x, i) => (
                <li key={i}>{technologies[i]}</li>
                ))}
            </ul>
            <h4 className='text-base font-bold'>Links:</h4>
            <ul className={`flex gap-8 ${reverse ? `justify-end` : `justify-start`} text-white`}>
              {Array(links.length)
              .fill(0)
              .map((x, i) => (
                <LinkItem
                  key={links[i].id}
                  link={links[i].url}
                  icon={links[i].icon}
                  name={links[i].name}
                  />
                ))}
            </ul>
          </div>
      </div>
      <div className={`flex justify-center align-center overflow-hidden row-start-1 row-end-2 ${reverse ? `col-start-1 col-end-7` : `col-start-6 col-end-13`} border-solid border-t border-l border-light-green rounded-2xl p-1`}>
        <div className='-z-1'>
          <Image 
            priority
            src={imgPath}
            width={700}
            height={200}
            style={{objectFit: "cover", objectPosition: "center"}}
            alt={`${name} Screenshot`}
            />
        </div>
      </div>
    </article>  
  )