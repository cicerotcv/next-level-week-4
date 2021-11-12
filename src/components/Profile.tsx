import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/cicerotcv.png' alt='Cicero Tiago' />
      <div>
        <strong>Cicero Tiago</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 77</p>
      </div>
    </div>
  );
}
