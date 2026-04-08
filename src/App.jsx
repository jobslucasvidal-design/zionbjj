import '../src/styles/global.css';
import { Suspense, lazy } from 'react';

// lazy load
const Header = lazy(() => import('./features/home/header/Header'));
const Hero = lazy(() => import('./features/home/hero/Hero'));
const Divider = lazy(() => import('./components/divider/Divider'));
const Aulas = lazy(() => import('./features/home/aulas/Aulas'));
const Horarios = lazy(() => import('./features/home/horarios/Horarios'));
const About = lazy(() => import('./features/home/about/About'));
const Contact = lazy(() => import('./features/home/contact/Contact'));
const Footer = lazy(() => import('./features/home/footer/Footer'));

// imagens
import img1 from './assets/images/bg-divider-1.jpg';
import img2 from './assets/images/bg-divider-2.jpg';

function App() {
  return (
    <>
      <Header />
      <Hero />

      <Suspense fallback={<div />}>
        <Divider image={img1} />
        <Aulas />

        <Horarios />
        
        <Divider image={img2} />

        <About />
        <Contact />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;