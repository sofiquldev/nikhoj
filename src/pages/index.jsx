import Link from 'next/link' 
import Layout from '@/components/Layouts'
import Hero from '@/components/Hero'

import hero from '@/components/Hero/hero.module.scss'

export default function Home(props) {
  return (
    <Layout>
      <Hero>
        {/* <h4 className={hero.subhead}>Trasted by <strong>2000+</strong> People.</h4> */}
        <h1 className={hero.head}>আপনার প্রিয়জনের খোঁজে <strong style={{color: 'var(--secondary)'}}>নিখোঁজ</strong> আছে সবসময় পাশে</h1>
        <p className={hero.desc}>বাংলাদেশের <strong style={{color: 'var(--secondary)'}}>#1</strong> নিখোঁজ মানুষের ডাটাবেজ</p>
        <div className={hero.btnset}>
          <Link href="#" className={hero.btn}>বিজ্ঞপ্তি যুক্ত করুন</Link>
          <Link href="#" className={hero.btn}>কাউকে খুজুন</Link>
        </div>
      </Hero>
      <main>Hello</main>
    </Layout>
  )
}
