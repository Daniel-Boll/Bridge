//Components
import Navigation from '../../components/Navigation';

//images
import searchIcon from '../../images/search.svg'
import eyeIcon from '../../images/eye.svg';
import downloadIcon from '../../images/download.svg';


//styles
import styles from '../../styles/Certificates.module.css'

const certificatesPage = () => {
    return(
        <>
            <main className={styles.mainContainer}>
                <div className={styles.mainTitle}>Certificados</div>
                <div className={styles.searchBody}>
                    <input type="text"/>
                    <button><img src={searchIcon} alt="Buscar"/></button>              
                </div>
                <div className={styles.certificatesBody}>
                    <div className={styles.certificates}>
                        Certificado_Alg.pdf 
                        <div>
                            <img src={eyeIcon} alt="Ver"/>
                            <img src={downloadIcon} alt="Baixar"/>
                        </div>
                    </div>
                    <div className={styles.certificates}>
                        Certificado_Mobile.pdf 
                        <div>
                            <img src={eyeIcon} alt="Ver"/>
                            <img src={downloadIcon} alt="Baixar"/>
                        </div>
                    </div>
                    <div className={styles.certificates}>
                        Certificado_BD.pdf 
                        <div>
                            <img src={eyeIcon} alt="Ver"/>
                            <img src={downloadIcon} alt="Baixar"/>
                        </div>
                    </div>
                </div>
                
                <Navigation active="certificates"/>
            </main>
        </>
    )
}

export default certificatesPage;