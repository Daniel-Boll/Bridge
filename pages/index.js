// Modules
import { useRouter } from "next/router";

// Images
import logoImage from "../images/logoImage.svg";
import locationSearch from "../images/locationSearch.svg";

import amazonIcon from "../images/amazonIcon.svg";
import discordIcon from "../images/discordIcon.svg";
import facebookIcon from "../images/facebookIcon.svg";
import twitterIcon from "../images/twitterIcon.svg";
import whatsappIcon from "../images/whatsappIcon.svg";
import instagramIcon from "../images/instagramIcon.svg";

// Styles
import styles from "../styles/Home.module.css";

const landingPage = () => {
  const router = useRouter();

  const handleSign = () => {
    router.push(`/sign`);
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

        {/* Details */}
        <main className={styles.detailsContainer}>
          <h1 className={styles.detailsTitle}>
            Encontre os cursos certos para <br /> seu{" "}
            <strong className={styles.emphasis}>sucesso profissional</strong>!
          </h1>
          <p className={styles.detailsBody}>
            Escolha a área que deseja atuar e lhe orientaremos quanto aos
            melhores cursos de capacitação pedidos pelas{" "}
            <strong className={styles.emphasis}>maiores</strong> empresas do
            mercado!
          </p>

          <section className={styles.detailsCard}>
            <img
              src={facebookIcon}
              className={styles.facebookIcon}
              alt="Facebook"
            />
            <img
              src={discordIcon}
              className={styles.discordIcon}
              alt="Discord"
            />
            <img src={amazonIcon} className={styles.amazonIcon} alt="Amazon" />
          </section>
        </main>

        {/* Sign in / Sign up */}
        <section className={styles.signDiv}>
          <div className={styles.signContainer}>
            <h1 className={styles.signTitle}>
              Cruze a{" "}
              <strong className={styles.emphasisSecondary}>ponte</strong> para
              ampliar seus conhecimentos.
            </h1>
            <button className={styles.signButton} onClick={handleSign}>
              Entrar
            </button>
            <img
              src={locationSearch}
              className={styles.locationSearch}
              alt="Busca por conhecimento"
            />

            {/* 
              TODO: Arrumar o tamanho da imagem 
              e deixar o botão funcionando ainda sim 
            */}
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footerContainer}>
          <p className={styles.footerText}>Compartilha nas redes sociais!</p>
          <div className={styles.footerLinks}>
            <img
              src={twitterIcon}
              className={styles.twitterIcon}
              alt="Twitter"
            />
            <img
              src={whatsappIcon}
              className={styles.whatsappIcon}
              alt="Whatsapp"
            />
            <img
              src={instagramIcon}
              className={styles.instagramIcon}
              alt="Instagram"
            />
          </div>
        </footer>
      </div>
    </>
  );
};

export default landingPage;
