import styles from './best.module.css'
import { useState, useEffect } from 'react';
import properties from './servicios/properties';
import nextButton from './media/nextButton.png'
import Container from '../../app/container';



const BestProperty = () => {
    const [propiedades, setPropiedades] = useState([]);

    useEffect(() => {
        setPropiedades(properties);
     
    }, []);


    return (
        <>
        
            <section className={styles.sectionBestProperty}>
                <Container>
                <div className={styles.sectionHeader}>
                    <div>
                        <h3 className={styles.tittle}>Best Property.</h3>
                        <svg width="124" height="28" viewBox="0 0 124 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10C42.826 7.78655 81.3222 5.99175 122 2" stroke="#FFC700" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M2.85169 24.3094C12.7764 24.2294 22.6541 23.7535 32.5579 23.119C34.0738 23.0219 37.8902 22.3932 37.0804 23.6783" stroke="#FFC700" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className={styles.navSection}>
                        <ul className={styles.ulItems}>
                            <ol>
                                PROPERTY
                            </ol>
                            <ol>
                                CONDOS
                            </ol>
                            <ol>
                                LAND
                            </ol>
                        </ul>
                    </div>

                </div>
             


                <div className={styles.sectionCards}>
                   
                    {propiedades.map((propiedades) => (
                     
                         <div key={propiedades.id} className={styles.cards}>
                         <img className={styles.imageCard} src={propiedades.imagen} alt="" />
                             <div className={styles.infoCard}>
                                 <p className={styles.titleCard}>{propiedades.titulo}</p>
                                 <p className={styles.direction}>{propiedades.direccion}</p>
                                 <p className={styles.price}>${propiedades.precio}</p>
                                 <div className={styles.iconCard}>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                                         <rect width="41" height="41" fill="black"/>
                                         <path d="M12.1893 25.9671L27.9524 16.8663" stroke="white" strokeWidth="1.5"/>
                                         <path d="M20.0039 13.998L28.4711 16.7046L26.5814 25.3906" stroke="white" strokeWidth="1.5"/>
                                     </svg>
                                 </div>
                             </div>
                     </div>
                    ))}

                    <div>
                        <img className={styles.nextButton} src={nextButton} alt="" />    
                    </div>
                </div>
                </Container>             
            </section>
        </>
    );
}

export default BestProperty;
