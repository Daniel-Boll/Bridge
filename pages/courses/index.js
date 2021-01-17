//Modules
import Navigation from "../../components/Navigation";
import { ChevronRight } from "react-feather";
import { useState } from 'react';
import { useRouter } from "next/router";

//styles
import styles from "../../styles/Courses.module.css";

const coursesPage = () => {

  {/*Função para mudar o conteúdo da Página */}
  const [ coursesType, setCoursesType ] = useState("gratuitos"); 

  const anyFunction = e => {
    setCoursesType(e.target.value);
  };

  return (
    <>
      <main className={styles.mainContainer}>

        <div className={styles.radioStyle}>
          <button className={styles.radioOptions} value="gratuitos" onClick={anyFunction}>Gratuitos</button>
          <button className={styles.radioOptions} value="pagos" onClick={anyFunction}>Pagos</button>
        </div>

        {coursesType == "gratuitos" ? <Gratuitos/> : <Pagos/>}
        
        <Navigation active="courses" />
      </main>
    </>
  );
};

{/**Listagem de Cursos Gratuitos */}
const Gratuitos = ()=> {
  {/*Função para Rotas*/}
  const router = useRouter();

  const handleRoute = () => {
    router.push(`/route`);
  };

  return(
    <>
      <div className={styles.coursesOptions}>
        <div className={styles.buttonContainer}>
          <button id="button" className={styles.buttonStyle} onClick={handleRoute}>Algoritmos</button>    
          <label for="button" className={styles.iconContainer} ><ChevronRight color="#FFF"/></label>  
        </div>
        <div className={styles.buttonContainer}>
          <button id="button2" className={styles.buttonStyle} onClick={handleRoute}>Bacno de Dados</button>    
          <label for="button2" className={styles.iconContainer} ><ChevronRight color="#FFF"/></label>  
        </div>
        <div className={styles.buttonContainer}>
          <button id="button3" className={styles.buttonStyle} onClick={handleRoute}>Desenvolvimento Web</button>    
          <label for="button3" className={styles.iconContainer} ><ChevronRight color="#FFF"/></label>  
        </div>
        <div className={styles.buttonContainer}>
          <button id="button4" className={styles.buttonStyle} onClick={handleRoute}>Inteligência Artificial</button>    
          <label for="button4" className={styles.iconContainer} ><ChevronRight color="#FFF"/></label>  
        </div>
        <div className={styles.buttonContainer}>
          <button id="button5" className={styles.buttonStyle} onClick={handleRoute}>Redes</button>    
          <label for="button5" className={styles.iconContainer} ><ChevronRight color="#FFF"/></label>  
        </div>
      </div> 
    </>
  )
}
{/**Listagem de Cursos Pagos*/}
const Pagos = () => {
  {/*Função para Rotas*/}
  const router = useRouter();

  const handleRoute = () => {
    router.push(`/route`);
  };
  return(
    <>
      <div className={styles.coursesOptions}>
        <div className={styles.buttonContainer}>
          <button id="button" className={styles.buttonStyle} onClick={handleRoute}>Machine Learning</button>    
          <label for="button" className={styles.iconContainer} ><ChevronRight color="#FFF"/></label>  
        </div>
        <div className={styles.buttonContainer}>
          <button id="button2" className={styles.buttonStyle} onClick={handleRoute}>Inteligência Artificial</button>    
          <label for="button2" className={styles.iconContainer} ><ChevronRight color="#FFF"/></label>  
        </div>
        <div className={styles.buttonContainer}>
          <button id="button3" className={styles.buttonStyle} onClick={handleRoute}>Desenvolvimento Mobile</button>    
          <label for="button3" className={styles.iconContainer} ><ChevronRight color="#FFF"/></label>  
        </div>
        <div className={styles.buttonContainer}>
          <button id="button4" className={styles.buttonStyle} onClick={handleRoute}>Segurança Ofensiva</button>    
          <label for="button4" className={styles.iconContainer} ><ChevronRight color="#FFF"/></label>  
        </div>
      </div> 
    </>
  )
}

export default coursesPage;
