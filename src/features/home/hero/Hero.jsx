import styles from './Hero.module.css';
import Title from '../../../components/title/Title.jsx';
import Paragraph from '../../../components/paragraph/Paragraph.jsx';
import Button from '../../../components/button/Button.jsx';

import bg from '../../../assets/images/bg-intro.jpg';

export default function Hero() {
  return (
    <section className={styles.hero}>
      
      {/* 🔥 imagem otimizada (substitui background) */}
      <img
        src={bg}
        alt="Imagem de dois atles de jiu jitsu"
        className={styles.heroBg}
        loading="eager"
        width="1920"
        height="1080"
      />

      <div className="container">
        {/* 🔥 MANTÉM SEU FADE-UP */}
        <div className={`${styles.heroSection} fade-up`}>
          <Title
            line="brazilian jiu jitsu disciplina evolução."
            highlight="jiu jitsu"
          />

          <Paragraph
            text="Venha treinar conosco no coração de São Roque. Uma comunidade forte e instrutores experientes esperam por você."
          />

          <Button url="#" text="venha treinar conosco" />
        </div>
      </div>
    </section>
  );
}