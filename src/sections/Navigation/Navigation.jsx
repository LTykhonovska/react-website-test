import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import SocialsList from "../../components/SocialsList/SocialsList";
import classNames from "classnames";
import styles from './Navigation.module.css';

function Navigation(props) {

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isMenuBtnPressed, setIsMenuBtnPressed] = useState(false);

  const onMobileMenuBtnClick = () => {
    setIsMenuExpanded(!isMenuExpanded);
    setIsMenuBtnPressed(!isMenuBtnPressed);
  }

  const navigationWrapperClass = classNames(styles.navigationWrapperMobile, {
    [styles.navigationWrapperMobileOpen]: isMenuExpanded
  })

  const menuHamburgerClass = classNames(styles.menuHamburger, {
    [styles.pressed]: isMenuBtnPressed
  })

  return (
    <section className={styles.navigation}>
      <div className={styles.container}>
        <button className={menuHamburgerClass} onClick={onMobileMenuBtnClick}>
          <span/>
          <span/>
          <span/>
        </button>
        <div className={navigationWrapperClass}>
          <div className={styles.socialsListMobile}>
            <SocialsList/>
          </div>
          <ul className={styles.menuMobile}>
            <li className={styles.menuItemMobile}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={styles.menuItemMobile}>
              <NavLink to="/aboutPage">About</NavLink>
            </li>
            <li className={styles.menuItemMobile}>
              <NavLink to="/galleryPage">Gallery</NavLink>
            </li>
            <li className={styles.menuItemMobile}>
              <NavLink to="/contactPage">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.navigationWrapper}>
          <div className={styles.menu}>
            <NavLink
              to="/"
              end={true}
              className={({ isActive }) => classNames(styles.menuItem, {[styles.active]: isActive})}>
              Home
            </NavLink>
            <NavLink
              to="/aboutPage"
              className={({ isActive }) => classNames(styles.menuItem, {[styles.active]: isActive})}>
              About
            </NavLink>
            <NavLink
              to="/galleryPage"
              className={({ isActive }) => classNames(styles.menuItem, {[styles.active]: isActive})}>
              Gallery
            </NavLink>
            <NavLink
              to="/contactPage"
              className={({ isActive }) => classNames(styles.menuItem, {[styles.active]: isActive})}>
              Contact
            </NavLink>
            <div className={styles.line}/>
          </div>
          <SocialsList/>
        </div>
      </div>
    </section>
  );
}

export default Navigation;