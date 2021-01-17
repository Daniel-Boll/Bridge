//Modules
import Navigation from "../../components/Navigation";
import { ChevronRight } from "react-feather";

//styles
import styles from "../../styles/Courses.module.css";

const coursesPage = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <button>Gratuitos</button>
        <div className={styles.coursesOptions}>
          <button className={styles.buttonStyle}>
            Algoritmos <ChevronRight />
          </button>
          <button className={styles.buttonStyle}>
            Banco de Dados <ChevronRight />
          </button>
          <button className={styles.buttonStyle}>
            Machine Learnig <ChevronRight />
          </button>
          <button className={styles.buttonStyle}>
            Web <ChevronRight />
          </button>
          <button className={styles.buttonStyle}>
            Inteligência Artificial <ChevronRight />
          </button>
          <button className={styles.buttonStyle}>
            Redes <ChevronRight />
          </button>
        </div>
        <Navigation />
      </main>
    </>
  );
};

export default coursesPage;
