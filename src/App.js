import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./sections/Navigation/Navigation";
import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";
import styles from './App.module.css';
import { imgArray } from "./utils/imagesCache";

function App() {

  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
        // wait 2 seconds to simulate loading time
        loadImg.onload = () => resolve(image)
        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(imgArray.map(image => loadImage(image)))
      .then(() => setIsImageLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, [])


  if (!isImageLoaded) {
    return (
      <h1>loading</h1>
    )
  }

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
          <Route exact path='/galleryPage' element={<GalleryPage/>}/>
          <Route exact path='/contactPage' element={<ContactPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
