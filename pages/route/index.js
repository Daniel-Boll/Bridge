//Modules
import { useRouter } from "next/router";

//Components
import RoadTimeline from '../../components/RoadTimeline';
import Navigation from '../../components/Navigation';

//images
import award from '../../images/award.svg';

//styles 
import styles from '../../styles/Route.module.css';

const routePage = () => {
  
  {/*Função para Rotas*/}
  const router = useRouter();

  const handleRank = () => {
    router.push(`/rank`);
  };

    return (
      <>
        <main className={styles.mainContainer}>
          <div className={styles.courseTitle}>Algoritmos</div>
          <img className={styles.awardStyle} src={award} onClick={handleRank} alt="Ver ranking de pessoas da área"/>
          <div>
            <RoadTimeline colors={["secondary", "secondary", "secondary", "secondary"]}/>
          </div>
          <Navigation active="courses"/>
        </main>
      </>
    );
  };
  
  export default routePage;
  