import styles from "./send.module.css";

const SendMesage = () => {
    return (
        <>
            <section className={styles.sectionSendMesage}>
                <div className={styles.sectionTitle}>
                    <h1>Let’s get started with us.</h1>
                    <p>For furthur info & support, <a href="">Contact us.</a> </p>
                    
                </div>
                
                <div className={styles.sectionInputCard}>
                    <input type="mail" placeholder="Enter your email" />
                    <button>SEND</button>
                    <p>We’ll contact you shortly</p>
                </div>
            </section>
        </>
    );
}

export default SendMesage;
