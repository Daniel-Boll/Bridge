//Components
import Navigation from '../../components/Navigation';

//images
import Logo2 from '../../images/Logo2.svg';

//styles
import styles from '../../styles/More.module.css';

const morePage = () => {
    return(
        <>
            <main className={styles.mainContainer}>
                <div className={styles.mainTitle}>Bridge</div>

                <div className={styles.optionsContainer}>
                    <button className={styles.buttonMore}>Conta</button>
                    <button className={styles.buttonMore}>Configurações</button>
                    <button className={styles.buttonMore}>Amplie sua Rede</button>
                    <button className={styles.buttonMore}>Sobre</button>
                    <button className={styles.buttonMore}>Ajuda</button>
                </div>

                <img src={Logo2} alt="Logo"/>
                <Navigation active="more"/>
            </main>
        </>
    )
}

export default morePage;