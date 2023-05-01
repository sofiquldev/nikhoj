import Link from 'next/link'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          {/* <Widget title="About Xiroicon">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, esse! Lorem ipsum dolor, sit amet consectetur adipisicing elit Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
          </Widget> */}
          <Widget 
            title="Important Links"
            link = {[
              {title: 'আমাদের সম্পর্কে', url: '#'},
              {title: 'যোগাযোগ', url: '#'},
            ]}
          />
          <Widget 
            title="Other Projects"
            link = {[
              {title: 'প্রোজেক্ট-১', url: '#'},
              {title: 'প্রোজেক্ট-২', url: '#'},
              {title: 'প্রোজেক্ট-৩', url: '#'}
            ]}
          />
        </div>
        <div className={styles.footer__copyright}>
          <p>কপিরাইট &copy; ২০২৩ <Link href="#">নিখোঁজ</Link></p>
        </div>
      </div>
    </footer>
  )
}


const Widget = ({title, link, children}) => {
  return (
    <div className={styles.widget}>
      <h4 className={styles.widget__title}>{title}</h4>
      <ul className={styles.widget__list}>
        {
          link && link.map((el,i) => <li key={i}><Link href={el.url}>{el.title}</Link></li>)
        }
      </ul>
      { children }
    </div>
  )
}


export default Footer