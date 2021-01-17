// Modules
import { useRouter } from "next/router";

// Images
import logoImage from "../../images/logoImage.svg";
import darkLogoImage from "../../images/Logo2.svg";

import githubIcon from "../../images/githubIcon.svg";
import gmailIcon from "../../images/gmailIcon.svg";
import twitterIcon from "../../images/twitterIcon.svg";

// Styles
import styles from "../../styles/Sign.module.css";

const signPage = () => {
  const router = useRouter();

  const handleLoginWithGithub = () => {
    router.push("/area");
  };

  return (
    <>
      <div className={styles.wrapper}>
        {/* Header */}
        <header className={styles.headerContainer}>
          <img className={styles.logo} src={logoImage} alt="Logo Bridge" />
          <p className={styles.slogan}>
            A <strong className={styles.emphasis}>ponte</strong> para o seu
            sucesso <br />
            profissional.
          </p>
          <p className={styles.sloganWeb}>
            A <strong className={styles.emphasis}>ponte</strong> para o seu
            sucesso profissional.
          </p>
        </header>

        <h1 className={styles.title}>Conecte-se</h1>

        <section className={styles.loginOptions}>
          <div className={styles.loginCard}>
            <h1 className={styles.titleWeb}>Conecte-se</h1>
            <div className={styles.githubInputContainer}>
              <img
                className={styles.githubIcon}
                src={githubIcon}
                alt="Login com Github"
                onClick={handleLoginWithGithub}
              />
              <input
                className={styles.githubInput}
                placeholder="Login com Github"
              />
            </div>
            <div className={styles.googleInputContainer}>
              <img
                className={styles.googleIcon}
                src={gmailIcon}
                alt="Login com Google"
              />
              <input
                className={styles.googleInput}
                placeholder="Login com Google"
              />
            </div>
            <div className={styles.twitterInputContainer}>
              <img
                className={styles.twitterIcon}
                src={twitterIcon}
                alt="Login com Twitter"
              />
              <input
                className={styles.twitterInput}
                placeholder="Login com Twitter"
              />
            </div>
          </div>
        </section>

        <footer className={styles.footerContainer}>
          <img src={darkLogoImage} alt="Bridge" />
        </footer>
      </div>
    </>
  );
};

export default signPage;
