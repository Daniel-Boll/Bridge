// Modules
import { useState } from "react";

// Components
import Navigation from "../../components/Navigation";
import RoadTimeline from "../../components/RoadTimeline";
import DoughnutChart from "../../components/DoughnutChart";

// Images
import userImage from "../../images/userImage.png";

// Styles
import styles from "../../styles/Profile.module.css";
import { ChevronDown } from "react-feather";

const profilePage = () => {
  const [current, setCurrent] = useState("road");

  const handleStatistics = () => {
    setCurrent("statistic");
  };

  const handleRoad = () => {
    setCurrent("road");
  };

  return (
    <>
      <main className={styles.mainContainer}>
        {/* Header */}
        <div className={styles.switchButtonsContainer}>
          <button
            onClick={handleStatistics}
            className={`${styles.switchButtons}
           ${current == "statistic" ? styles.selected : ""}`}
          >
            Estatísticas
          </button>
          <button
            onClick={handleRoad}
            className={`${styles.switchButtons}
           ${current == "road" ? styles.selected : ""}`}
          >
            Trilha
          </button>
        </div>

        {current == "statistic" ? <StatisticPage /> : <RoadPage />}

        <Navigation active="profile" />
      </main>
    </>
  );
};

const StatisticPage = () => {
  return (
    <>
      <section className={styles.profileContainer}>
        <div className={styles.profileCard}>
          <h1 className={styles.userName}>Felipi Lima</h1>
          <img
            className={styles.userImage}
            src={userImage}
            alt="Nome do usuário"
          />
          <p class={styles.userArea}>Banco de Dados <br/>Web <br/>Mobile</p>
        </div>
      </section>

      <section className={styles.statisticsContainer}>
        <DoughnutChart />
      </section>
    </>
  );
};

const RoadPage = () => {
  return (
    <>
      <div className={styles.switch}>
        <p className={styles.switchText}>Algoritmos</p>
        <ChevronDown color={"#cacaca"} size={16} />
      </div>
      <RoadTimeline colors={["primary", "primary", "secondary", "secondary"]} />
    </>
  );
};

export default profilePage;
