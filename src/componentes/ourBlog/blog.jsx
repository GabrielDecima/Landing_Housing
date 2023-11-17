import { Container } from 'react-bootstrap';
import styles from './blog.module.css'
import imageCard from './media/image.png'

const Blog = () => {
    return (
        <>
            <section className={styles.sectionBlog}>
                <Container>
                <div className={styles.sectionTitle}>
                    <h1 className={styles.titleH1}>Our Blog</h1>
                    <div className={styles.sectionLink}>
                     <a href="#">Check our all news</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                        <path d="M1 1L6 5.64286L1 10.2857" stroke="black" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>

                <div className={styles.sectionContent}>
                   <img  className={styles.imgCard}  src={imageCard} alt="" />
                    <div className={styles.sectionCard}>
                        <div className={styles.sectionText}>
                            <h6>PROPERTY</h6>
                            <p className={styles.parrafo}>Print, publishing qui visual ux quis layout mockups.</p>

                            <div className={styles.sectioniconText}>
                                <p className={styles.parrafo2}>Featured - <span>18 Jul 2018</span></p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                                <rect width="46" height="46" fill="#FFF95F"/>
                                <path d="M15.1699 31.2402L32.8637 15.2993" stroke="black" strokeWidth="1.5"/>
                                <path d="M22.207 14.8027L32.8457 15.0309L32.0836 25.6447" stroke="black" strokeWidth="1.5"/>
                                </svg>
                            </div>
                        </div>

                  
                    </div>

                </div>
                </Container>
            </section>
        </>
    );
}

export default Blog;
