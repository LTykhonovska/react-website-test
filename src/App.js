import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Navigation from "./sections/Navigation/Navigation";
import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <div className={styles.container}>
          <Header/>
        </div>
        <Navigation/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/aboutPage' element={<AboutPage/>}/>
          <Route exact path='/servicesPage' element={<ServicesPage/>}/>
          <Route exact path='/contactPage' element={<ContactPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
