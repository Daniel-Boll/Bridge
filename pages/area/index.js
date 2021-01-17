// Modules
import { useRouter } from "next/router";

//images
import Logo2 from '../../images/Logo2.svg';

//styles
import styles from '../../styles/Area.module.css';

const areaPage = () => {

    const router = useRouter();

    const handleProfile = () => {
        router.push(`/profile`);
    }

    return (
      <>
        <main className={styles.mainContainer}>
            {/* Titulo da Página */}
            <h1 className={styles.areaTitle} >Escolha uma área:</h1>
            
            {/* Áreas do Conhecimento disponíveis na plataforma */}
            <div className={styles.buttons}>
                <button className={styles.buttonArea} onClick={handleProfile}>Banco de Dados</button>
                <button className={styles.buttonArea} onClick={handleProfile}>Machine Learning</button>
                <button className={styles.buttonArea} onClick={handleProfile}>Web</button>
                <button className={styles.buttonArea} onClick={handleProfile}>Inteligência Artificial</button>
                <button className={styles.buttonArea} onClick={handleProfile}>Desenvolvimento Mobile</button>
                <button className={styles.buttonArea} onClick={handleProfile}>Redes</button>
            </div>
            <footer className={styles.footerContainer} >
                <img src={Logo2} alt="Logo da Bridge"/>
            </footer>


        </main>
      </>
    );
  };
  
  export default areaPage;
  