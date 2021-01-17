//Modules
import Navigation from '../../components/Navigation';
import chevronRight from '../../images/chevron-right.svg';

//styles
import styles from '../../styles/Courses.module.css';

const coursesPage = () => {
    return (
      <>
        <main className={styles.mainContainer} >
            <button>Gratuitos</button>
            <div className={styles.coursesOptions}>
                <button className={styles.buttonStyle}>Algoritmos</button>
                <button className={styles.buttonStyle}>Banco de Dados</button>
                <button className={styles.buttonStyle}>Machine Learnig</button>
                <button className={styles.buttonStyle}>Web</button>
                <button className={styles.buttonStyle}>Inteligência Artificial</button>
                <button className={styles.buttonStyle}>Redes</button>
            </div>
            <Navigation/>
        </main>

        
      </>
    );
  };
  
  export default coursesPage;