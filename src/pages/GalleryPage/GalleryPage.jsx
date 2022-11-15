import React from 'react';
import PhotoAlbum from "react-photo-album";
import gallery1 from '../../images/gallery/gallery1.jpg';
import gallery2 from '../../images/gallery/gallery2.jpg';
import gallery3 from '../../images/gallery/gallery3.jpg';
import gallery4 from '../../images/gallery/gallery4.jpg';
import gallery5 from '../../images/gallery/gallery5.jpg';
import gallery6 from '../../images/gallery/gallery6.jpg';
import gallery7 from '../../images/gallery/gallery7.jpg';
import gallery8 from '../../images/gallery/gallery8.jpg';
import gallery9 from '../../images/gallery/gallery9.jpg';
import gallery10 from '../../images/gallery/gallery10.jpg';
import gallery11 from '../../images/gallery/gallery11.jpg';
import gallery12 from '../../images/gallery/gallery12.jpg';
import gallery13 from '../../images/gallery/gallery13.jpg';
import gallery14 from '../../images/gallery/gallery14.jpg';
import gallery15 from '../../images/gallery/gallery15.jpg';
import gallery16 from '../../images/gallery/gallery16.jpg';
import gallery17 from '../../images/gallery/gallery17.jpg';
import gallery18 from '../../images/gallery/gallery18.jpg';
import styles from './GalleryPage.module.css';

const photos = [
  {
    src: gallery1,
    width: 500,
    height: 800
  },
  {
    src: gallery2,
    width: 1200,
    height: 900
  },
  {
    src: gallery3,
    width: 270,
    height: 400
  },
  {
    src: gallery4,
    width: 560,
    height: 410
  },
  {
    src: gallery5,
    width: 900,
    height: 300
  },
  {
    src: gallery6,
    width: 800,
    height: 600
  },
  {
    src: gallery7,
    width: 1200,
    height: 900
  },
  {
    src: gallery8,
    width: 230,
    height: 410
  },
  {
    src: gallery9,
    width: 450,
    height: 170
  },
  {
    src: gallery10,
    width: 748,
    height: 438
  },
  {
    src: gallery11,
    width: 200,
    height: 410
  },
  {
    src: gallery12,
    width: 600,
    height: 300
  },
  {
    src: gallery13,
    width: 500,
    height: 500
  },
  {
    src: gallery14,
    width: 500,
    height: 500
  },
  {
    src: gallery15,
    width: 700,
    height: 1100
  },
  {
    src: gallery16,
    width: 150,
    height: 150
  },
  {
    src: gallery17,
    width: 360,
    height: 280
  },
  {
    src: gallery18,
    width: 700,
    height: 500
  },
];

function GalleryPage(props) {

  return (
    <div className={styles.gallery}>
      <h2>Gallery</h2>
      <PhotoAlbum photos={photos} layout="rows" />
    </div>
  );
}

export default GalleryPage;