
import Link from 'next/link'
import style from "../styles/Nav.module.css"

export default function Nav({animState}) {
  return (
    <nav className="nav"> 
        <div id={`${animState ? style.link1Intro : style.link1}`} className={style.navDiv}>
          <Link href="/" className="nav-link">HOME</Link>
        </div>
        <div id={`${animState ? style.link2Intro : style.link2}`} className={style.navDiv}>
          <Link href="/about" className="nav-link">ABOUT</Link>
        </div>
        <div id={`${animState ? style.link3Intro : style.link3}`} className={style.navDiv}>
          <Link href="/contact" className="nav-link">CONTACT</Link>
        </div>
    </nav>
  );
}