import styles from "./faq.module.css";
import Accordion from "./acordion";
const Faq = () => {
    return (
        <>
            <section className={styles.sectionFaq}>
            
                <div className={styles.sectionTitleAndText}>
                    <h1>Question & Answers.</h1>
                    <p>Don’t find your answer here? just send us a message for help</p>
                    <button>See More</button>
                </div>
                <div>
                    <Accordion />
                </div>
         
            </section>
        </>
    );
}

export default Faq;
