import portada from './media/CTA.png'
import client from './media/imageClient.png'
import styles from './client.module.css'
import Container from '../../app/container';
const Client = () => {
    return (
        <>
            <section className={styles.sectionClient}>
                <Container>
                <img className={styles.imgPortada} src={portada} alt="" />

                <div className={styles.sectionTitle}>
                    <h1 className={styles.titleH1}>Check our client lovely words.</h1>

                   
                    
                    <div className={styles.sectionimages}>
                        <img className={styles.imgClient} src={client} alt="" />

                        <div className={styles.lineasIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="94" height="54" viewBox="0 0 94 54" fill="none">
                            <path d="M2 52C31.6588 38.5187 61.8539 26.2817 92 14" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M56 10C59.7242 8.10141 79.2995 2 70 2" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                            </svg>
                        </div>

                        <div className={styles.rating}>
                            <p className={styles.parrafoNum}>4.8</p>
                            <p className={styles.parrafo2}>avg rating</p>
                        </div>
                    </div>
                </div>


                <div className={styles.sectionCirculoyParrafo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                    <circle cx="31" cy="31" r="31" fill="black"/>
                    </svg>
                     <p className={styles.parrafo}>We’v 9,000 agents around the country, Find agents near your neighborhood.</p>

                     <div className={styles.puntosIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="10" viewBox="0 0 46 10" fill="none">
                        <circle cx="5" cy="5" r="5" fill="black"/>
                        <circle cx="23" cy="5" r="4.5" stroke="black"/>
                        <circle cx="41" cy="5" r="4.5" stroke="black"/>
                        </svg>
                    </div>  
                </div>

                <div className={styles.ondasIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="219" height="141" viewBox="0 0 219 141" fill="none">
                    <path d="M20.6238 129.461C21.706 116.989 30.1912 104.186 44.0786 103.203C54.7083 102.451 65.6805 108.621 73.652 114.723C74.9677 115.73 85.5198 124.371 78.6633 126.401C66.1258 130.115 56.793 120.481 53.7337 109.203C49.1882 92.4447 55.3564 75.9262 67.8463 64.1866C83.3403 49.6233 109.897 36.49 130.641 46.94C140.314 51.8128 145.035 58.4264 147.748 68.6462C149.907 76.7821 151.049 86.9647 144.186 93.5934C132.89 104.503 119.45 93.7803 113.563 82.9759C101.634 61.0825 111.068 30.6316 133.075 19.1541C152.379 9.08667 174.662 5.66333 196.139 4.32984" stroke="#0E0E0E" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                </div>

           
                
              
                
              </Container>  
            </section>
        </>
    );
}

export default Client;
