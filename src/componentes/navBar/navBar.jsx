import { useState } from 'react';
import styles from './navBar.module.css';
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    return (
        <>
            <section className={styles.header}>
            <img className={styles.logo} src="../../public/logo.png" alt="" />


          <div className={`${styles.menuButton} ${menuOpen ? styles.menuOpen : ''}`} onClick={toggleMenu}>
              &#9776;
          </div>

        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <a className={styles.aLink} href="#">About</a>
          <a className={styles.aLink} href="#">Case Studies</a>
          <a className={styles.aLink} href="#">Pages</a>
          <a className={styles.aLink} href="#">Blog</a>
        </div>

            <div className={styles.searchBar}>

                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.2492 19.2502L15.2617 15.2627" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>  
                </button>
                <input className={styles.inputSearch} type="text" placeholder="Search Here..."/>

            </div>

                <div className={styles.sectionbuttons}>
                    <button className={styles.buttonLogin}></button>
                    <button className={styles.buttonSign}>Sign Up</button> 
                </div>           
        </section>
        </>
    );
}

export default NavBar;
