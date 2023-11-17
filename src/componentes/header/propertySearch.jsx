import { useState } from 'react';
import styles from './property.module.css'
const PropertySearch = () => {
    const [section1Open, setSection1Open] = useState(false);
    const [section2Open, setSection2Open] = useState(false);
    const [section3Open, setSection3Open] = useState(false);
  
    const toggleSection1 = () => setSection1Open(!section1Open);
    const toggleSection2 = () => setSection2Open(!section2Open);
    const toggleSection3 = () => setSection3Open(!section3Open);
    return (
        <>

    <div className={styles.property}>
        <div className={styles.navSection} onClick={toggleSection1}>
            <span className={styles.spanItem}>I´m looking to...</span><br />
            Buy Portfolio
            {section1Open && (
            <div className="dropdown-content">
            <p>lorem lorem </p>
            </div>
            )}
        </div>
        <div className={styles.divider}>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="75" viewBox="0 0 2 75" fill="none">
                <path d="M1 0V75" stroke="#EEECEC"/>
            </svg>
        </div>


      <div className={styles.navSection} onClick={toggleSection2}>
      <span className={styles.spanItem} >Markets</span><br />
        New York
        {section2Open && (
          <div className="dropdown-content">
                <p>lorem lorem </p>
          </div>
        )}
      </div>
      <div className={styles.divider}>
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="75" viewBox="0 0 2 75" fill="none">
                <path d="M1 0V75" stroke="#EEECEC"/>
            </svg>
      </div>


      <div className={styles.navSection} onClick={toggleSection3}>
      <span className={styles.spanItem}>Price Range</span><br />
        $10,000 - $200,000
        {section3Open && (
          <div className="dropdown-content">
                <p>lorem lorem </p>
          </div>
        )}
      </div>

      <div className={styles.divider}>
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="75" viewBox="0 0 2 75" fill="none">
                <path d="M1 0V75" stroke="#EEECEC"/>
            </svg>
      </div>

      
      <button className={styles.buttonPropertySearch}>Search Now</button>
    </div>
  ;



        </>
    );
}

export default PropertySearch;
