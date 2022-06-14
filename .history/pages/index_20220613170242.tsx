import type { NextPage } from 'next'
import { Fragment } from 'react'
import Image from 'next/image'
import NavIcon from '../public/nav-icon.png'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Fragment>
      <nav className="container flex justify-between items-center px-4 py-4">
        <Image src={NavIcon} alt={'aaroncemery icon'} height={30} width={30} />
        <ul className="flex justify-between items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>About</li>
          <li>Work</li>
        </ul>
      </nav>
      <h1 className="font-sans text-5xl font-bold text-slate-600">Hello</h1>
    </Fragment>
  )
}

export default Home
