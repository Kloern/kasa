import logo from '../../assets/logo.svg'
// import styles from './Header.module.css'
import styles from '../Header/Header.module.css'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

  return (
    <header className={styles.header}>
      <Link className={styles.divLogo} to="/">
        <img className={styles.logo} src={logo} alt='logo' />
      </Link>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`)} >
          <span className={styles.desktop}>Accueil</span><span className={styles.mobile}>ACCUEIL</span>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`)}>
          <span className={styles.desktop}>A propos</span><span className={styles.mobile}>A PROPOS</span>
        </NavLink>
      </nav>
    </header>

  )
}