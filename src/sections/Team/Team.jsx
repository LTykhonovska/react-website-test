import React from 'react';
import team1 from '../../images/people/user1.jpeg';
import team2 from '../../images/people/user2.jpeg';
import team3 from '../../images/people/user3.jpeg';
import team4 from '../../images/people/user4.jpeg';
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import styles from './Team.module.css';

const teamData = [
  {
    id: 1,
    img: team1,
    name: 'Diana Robinson',
    position: 'Founder, Owner',
    phone: '+1 323-913-4688'
  },
  {
    id: 2,
    img: team2,
    name: 'Peter McMillan',
    position: 'Travel Agent',
    phone: '+1 323-913-4688'
  },
  {
    id: 3,
    img: team3,
    name: 'Jill Peterson',
    position: 'Tour Consultant',
    phone: '+1 323-913-4688'
  },
  {
    id: 4,
    img: team4,
    name: 'James Smith',
    position: 'PR Manager',
    phone: '+1 323-913-4688'
  }
]

function Team(props) {
  return (
    <section className={styles.team}>
      <SectionHeading heading='Different People — One Mission'/>
      <div className={styles.teamWrapper}>
        {teamData.map(({id, img, name, position, phone}) => {
          return (
            <div className={styles.teamMember} key={id}>
              <div className={styles.teamMemberPhoto}>
                <img src={img} alt={position}/>
              </div>
              <div className={styles.teamMemberInfo}>
                <h5 className={styles.teamMemberName}>{name}</h5>
                <h6 className={styles.teamMemberPosition}>{position}</h6>
                <a className={styles.teamMemberPhone} href={`tel:{phone}`}>{phone}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Team;