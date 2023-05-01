import { useEffect } from 'react'
import useStore from "@/data/store";
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import Search from '@/components/Search' 

import logo from './logo.png'

import style from "./header.module.scss"

const Header = props => {
  
  const { ref, inView, entry } = useInView()
  return (
    <header className={style.header}>
      <nav className={style.nav} ref={ref}>
        <div className={`${style.nav__inner} ${!inView ? style.nav__inner__sticky: ''}`}>
          <Link className={style.nav__brand} href="/">
            {/* <img src={logo.src} width={150} height={35} alt='logo' /> */}
            নিখোঁজ
          </Link>
          <div className={style.nav__search}>
            <Search />
          </div>
          <div className={style.nav__meta}>
            <Link className={style.nav__meta__btn} href="#" target='_blank'><i className="xiroicon xi-add"></i> &nbsp; বিজ্ঞপ্তি যুক্ত করুন</Link>
            {/* <Link className={style.nav__meta__btn} href="https://github.com/xirosoft/xiroicon" target='_blank'><i className="xiroicon xi-github"></i></Link> */}
            {/* <Link className={style.nav__meta__btn} href="/icon/xiroicon.zip"><i className="xiroicon xi-arrow-down"></i></Link> */}
            {/* <Link className={style.nav__meta__btn} href="https://github.com/Xirosoft/xiroicon/archive/refs/tags/v0.1.0.zip"><i className="xiroicon xi-arrow-down"></i></Link> */}
          </div>
        </div>
      </nav>
    </header>
  )
}


export default Header