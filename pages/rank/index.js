//Components
import Navigation from '../../components/Navigation';

//images
import award from '../../images/award.svg';
import user1 from '../../images/userImage.png';
import user2 from '../../images/user2.png';
import user3 from '../../images/user3.png';
import user4 from '../../images/user4.png';
import user5 from '../../images/user5.png';

//styles
import styles from '../../styles/Rank.module.css';

const rankPage =() => {
    return(
        <>
            <main className={styles.mainContainer}>
                <img className={styles.awardStyle} src={award} alt="Ranking"/>
                <div className={styles.rankTitle}>Ranking</div>
                <div className={styles.cardContainer}>
                    <div className={styles.userPosition1}>
                        1º
                    </div>
                    <div className={styles.userBody1}>
                        <img src={user3} alt="User picture"/>
                        Edibaru
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.userPosition2}>
                        2º
                    </div>
                    <div className={styles.userBody2}>
                        <img src={user4} alt="User picture"/>
                        Big Boss
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.userPosition3}>
                        3º
                    </div>
                    <div className={styles.userBody3}>
                        <img src={user2} alt="User picture"/>
                        Daniel Boll
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.userPosition4}>
                        4º
                    </div>
                    <div className={styles.userBody4}>
                        <img src={user5} alt="User picture"/>
                        Ama nda
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.userPosition4}>
                        5º
                    </div>
                    <div className={styles.userBody4}>
                        <img src={user1} alt="User picture"/>
                        Mateuzinho
                    </div>
                </div>
                <Navigation active="courses"/>
            </main>
            
        </>
    )
}

export default rankPage;