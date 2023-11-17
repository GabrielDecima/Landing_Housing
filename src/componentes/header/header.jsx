import NavBar from '../navBar/navBar';
import styles from './header.module.css';
import PropertySearch from './propertySearch';

const Header = () => {
    return (
        <>
            
      <section className={styles.header}>
        <NavBar/>

          <div className={styles.sectionTitle}>
            <h1 className={styles.titleH1}>Discover your<br></br>home, you will love to live. </h1>
            <h6 className={styles.titleH6}>Let s find a home that s perfect for your future</h6>

            <div className={styles.imgTittle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="186" height="134" viewBox="0 0 186 134" fill="none">
                <path d="M1.50315 131.98C2.63156 118.977 11.4785 105.628 25.9581 104.603C37.041 103.819 48.481 110.252 56.7924 116.614C58.1642 117.664 69.1662 126.673 62.0174 128.791C48.9453 132.663 39.2145 122.618 36.0248 110.858C31.2856 93.386 37.7168 76.1632 50.7391 63.923C66.8938 48.7387 94.5828 35.0455 116.211 45.941C126.296 51.0216 131.219 57.9172 134.047 68.5728C136.299 77.0556 137.489 87.6724 130.333 94.5837C118.557 105.958 104.543 94.7785 98.4053 83.5134C85.9673 60.6865 95.8035 28.9373 118.749 16.9704C138.876 6.47372 162.109 2.90441 184.502 1.51406" stroke="#0E0E0E" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          <PropertySearch />

      </section>
        </>
    );
}

export default Header;
