import type { NextPage } from 'next'
import { Fragment } from 'react'
import Image from 'next/image'
import NavIcon from '../public/nav-icon.png'

const Home: NextPage = () => {
  return (
    <Fragment>
      <nav>
        <Image src={NavIcon} alt={'aaroncemery icon'} height={30} width={30} />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
        </ul>
      </nav>
      <h1 className="font-sans text-5xl font-bold text-slate-600">Hello</h1>
    </Fragment>
  )
}

export default Home
