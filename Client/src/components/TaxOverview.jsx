import React from 'react';
import styles1 from './TaxOverview.module.css'; // CSS module import

const TaxOverview = () => {
  return (
    <div className={styles1.dashboard} >
        <div className={styles1.overview}>
       
       </div>
       <div className={styles1.taxBreakdown} >
       <div className={`${styles1.card}  ${styles1.card1}`}>
          <h1>Property Tax</h1>
          <div className={styles1.insideDiv} >
            <div>
              Tax: $1000
            </div>
            <div>
              Paid
            </div>
          </div>
        </div>
        <div className={`${styles1.card}  ${styles1.card2}`} >
          <h1>Water Tax</h1>
          <div className={styles1.insideDiv} >
            <div>
              Tax: $1000
            </div>
            <div>
              Paid
            </div>
          </div>
        </div>
        <div className={`${styles1.card}  ${styles1.card3}`}>
          <h1>Garbage Collection Tax</h1>
          <div className={styles1.insideDiv} >
            <div>
              Tax: $1000
            </div>
            <div>
              Paid
            </div>
          </div>
        </div>
        <div className={`${styles1.card}  ${styles1.card4}`}>
          <h1>Sewage collection tax</h1>
          <div className={styles1.insideDiv} >
            <div>
              Tax: $1000
            </div>
            <div>
              Paid
            </div>
          </div>
        </div>
       
       </div>
    </div>
  );
};

export default TaxOverview;