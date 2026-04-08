import styles from './Aulas.module.css';
import SectionHeader from '../../../components/sectionHeader/sectionHeader.jsx';

import img1 from '../../../assets/images/women.jpg';
import img2 from '../../../assets/images/adults.jpg';
import img3 from '../../../assets/images/kids.jpg';

const classes = [
  {
    title: 'BJJ ADULTOS',
    text: 'Treinos para todos os níveis com foco em técnica e evolução constante.',
    image: img2,
    featured: true,
  },
  {
    title: 'BJJ KIDS',
    text: 'Disciplina, coordenação e diversão para o desenvolvimento infantil.',
    image: img3,
  },
  {
    title: 'BJJ MULHERES',
    text: 'Ambiente acolhedor com foco em confiança e defesa pessoal.',
    image: img1,
  },
];

export default function Aulas() {
  return (
    <section className={styles.sectionAulas} id="aulas">
      <div className="container">
        <SectionHeader
          title="nossas aulas"
          description="Escolha o programa ideal para você"
        />

        <div className={styles.grid}>
          {classes.map((item, index) => (
            <div key={index} className={`${styles.card}`}>
              <img src={item.image} alt={item.title} width="600" height="400" />

              <div className={styles.overlay}></div>

              <div className={styles.contentAulas}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className={styles.cta}>Saiba mais →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
