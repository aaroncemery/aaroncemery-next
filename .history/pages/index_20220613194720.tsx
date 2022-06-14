import type { NextPage } from 'next'
import { Fragment } from 'react'
import Image from 'next/image'
import NavIcon from '../public/assets/nav-icon.png'
import HeroImage from '../public/assets/lehguidelead.jpeg'
import MeshGradient from '../public/assets/mesh-gradient.jpg'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Fragment>
      <nav className="container flex justify-between items-center m-auto py-4">
        <Image src={NavIcon} alt={'aaroncemery icon'} height={30} width={30} />
        <ul className="flex justify-between items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
        </ul>
      </nav>
      <div
        className={`container relative bg-hero-pattern rounded-xl m-auto bg-cover aspect-video`}
      >
        <Image
          src={HeroImage}
          alt="hero image"
          className="relative rounded-xl"
          layout="fill"
        />
        <div className="absolute bg-mesh-gradient bg-cover w-full h-full top-0 left-0 mix-blend-screen aspect-video rounded-xl"></div>
        <div className="absolute bg-mesh-gradient bg-cover w-full h-full top-0 left-0 mix-blend-multiply aspect-video rounded-xl"></div>
        <h1 className="z-10">test</h1>
      </div>
    </Fragment>
  )
}

export default Home
