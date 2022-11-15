import React from 'react';
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ButtonFactory from "../../components/Button/Button";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import tabsImg from '../../images/homeTabsImg.jpg';
import { Slide } from "react-reveal";
import styles from './TabsSection.module.css';

function TabsSection(props) {
  return (
    <section className={styles.tabsSection}>
      <Slide left duration={1800} delay={300}>
        <img className={styles.tabsImg} src={tabsImg} alt="tabs"/>
      </Slide>
      <Slide right duration={1800} delay={300}>
        <div className={styles.tabs}>
          <SectionHeading heading='Discover New Horizons'/>
          <div className={styles.tabsWrapper}>
            <Tabs>
              <TabList>
                <Tab>About us</Tab>
                <Tab>Why us</Tab>
                <Tab>Our mission</Tab>
              </TabList>

              <TabPanel>
                <p>Wonder Tour is committed to bringing our clients the best in value and quality travel arrangements.
                  We are passionate about travel and sharing the world's wonders with you.</p>
                <div className={styles.tabBtnGroup}>
                  <ButtonFactory text={'Get inTouch'} type={'green'}/>
                  <ButtonFactory text={'Read More'} type={'green'}/>
                </div>
              </TabPanel>
              <TabPanel>
                <p>We are proud to offer excellent quality and value for money in our tours, which give you the chance
                  to experience your chosen destination in an authentic and exciting way.</p>
                <div className={styles.tabBtnGroup}>
                  <ButtonFactory text={'Get inTouch'} type={'green'}/>
                  <ButtonFactory text={'Read More'} type={'green'}/>
                </div>
              </TabPanel>
              <TabPanel>
                <p>Our mission is to provide the ultimate travel planning experience while becoming a one-stop shop for
                  every travel service available in the industry.</p>
                <div className={styles.tabBtnGroup}>
                  <ButtonFactory text={'Get inTouch'} type={'green'}/>
                  <ButtonFactory text={'Read More'} type={'green'}/>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </Slide>
    </section>
  );
}

export default TabsSection;