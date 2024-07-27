// Overview.js
import React from 'react';
import styles from './Overview.module.css'; // Import CSS module

const Overview = () => {
  return (
    <div className={styles.overview}>
      <h2 className={styles.heading}>Overview</h2>
      <div className={styles.summary}>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Total Taxes Due:</span>
          <span className={styles.value}>$X,XXX</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Payments Made:</span>
          <span className={styles.value}>$X,XXX</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Pending Payments:</span>
          <span className={styles.value}>$X,XXX</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.label}>Alerts:</span>
          <span className={styles.value}>3 pending, 1 overdue</span>
        </div>
      </div>
    </div>
  );
};

export default Overview;