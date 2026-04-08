import styles from './Contact.module.css';
import ContactActions from './data/ContactActions.jsx';
import SectionHeader from '../../../components/sectionHeader/sectionHeader.jsx';

import Button from '../../../components/button/Button.jsx';

export default function Contact() {
  return (
    <section className={styles.contact} id="contato">
      <div className="container">
        <SectionHeader
          title="contato"
          description="Venha nos visitar ou fale com nossa equipe."
        />
        {/* HEADER */}

        {/* 🔥 ACTIONS (agora premium) */}
        <ContactActions />

        {/* 🔥 CARDS PRINCIPAIS */}
        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.icon}>📍</span>
            <h3>Endereço</h3>
            <p>São Roque - SP</p>
          </div>

          <div className={styles.card}>
            <span className={styles.icon}>📞</span>
            <h3>Telefone</h3>
            <p>(11) 98990-6816</p>
          </div>

          <a href="#horarios" className={styles.card}>
            <span className={styles.icon}>⏱</span>
            <h3>Horários</h3>
            <p>Confira os horários das aulas</p>
          </a>
        </div>

        {/* 🔥 CTA PRINCIPAL */}
        <div className={styles.ctaBox}>
          <h3>Agende sua aula experimental</h3>

          <div className={styles.actionsMain}>
            <Button url="#" text="falar no whatsApp →" />

            <a href="#" className={styles.secondary}>
              Enviar email
            </a>
          </div>
        </div>

        {/* 🔥 MAPA */}
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps?q=São+Roque+SP&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da academia"
          ></iframe>

          <div className={styles.mapOverlay}></div>
        </div>
      </div>
    </section>
  );
}
