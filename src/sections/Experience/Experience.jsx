import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import LinearProgressBars from "../LinearProgressBars/LinearProgressBars";
import CircularProgressBars from "../CircularProgressBars/CircularProgressBars";
import ButtonFactory from "../../components/Button/Button";
import tabsImg from '../../images/aboutTabsImg.jpg';
import 'react-circular-progressbar/dist/styles.css';
import 'react-tabs/style/react-tabs.css';
import styles from './Experience.module.css';

function Experience(props) {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.experienceWrapper}>
          <img src={tabsImg} alt="manager"/>
          <div className={styles.tabs}>
            <h4>Why choose us?</h4>
            <Tabs defaultIndex={1}>
              <TabList>
                <Tab>Experience</Tab>
                <Tab>Skills</Tab>
                <Tab>Mission</Tab>
              </TabList>
              <TabPanel>
                <p>Aliquam malesuada bibendum arcu vitae elementum curabitur. A erat nam at lectus urna duis convallis
                  convallis tellus. Sit amet consectetur adipiscing elit pellentesque.</p>
                <LinearProgressBars/>
              </TabPanel>
              <TabPanel>
                <p>Aliquam malesuada bibendum arcu vitae elementum curabitur. A erat nam at lectus urna duis convallis
                  convallis tellus. Sit amet consectetur adipiscing elit pellentesque.</p>
                <CircularProgressBars/>
              </TabPanel>
              <TabPanel>
                <p>Aliquam malesuada bibendum arcu vitae elementum curabitur. A erat nam at lectus urna duis convallis
                  convallis tellus. Sit amet consectetur adipiscing elit pellentesque.</p>
                <ul className={styles.missionList}>
                    <li><span/>Lorem ipsum</li>
                    <li><span/>Consectetur adipiscing</li>
                    <li><span/>Sed do eiusmod</li>
                    <li><span/>Tempor incididunt</li>
                    <li><span/>Sem fringilla</li>
                    <li><span/>Ut venenatis</li>
                </ul>
                <div className={styles.tabBtnGroup}>
                  <ButtonFactory text={'Get inTouch'} type={'green'}/>
                  <ButtonFactory text={'Download presentation'} type={'green'}/>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;