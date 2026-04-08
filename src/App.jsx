import '../src/styles/global.css';
import { About, Aulas, Contact, Footer, Header, Hero, Horarios } from './features/home';
import Divider from "./components/divider/Divider.jsx";
import img1 from "../src/assets/images/bg-divider-1.jpg";
import img2 from "../src/assets/images/bg-divider-2.jpg";

function App() {
  return <>
  <Header/>
  <Hero/>
  <Divider image={img1}/>
  <Aulas/>
  <Horarios/>
  <Divider image={img2}/>
  <About/>
  <Contact/>
  <Footer/>
  </>;
}

export default App;