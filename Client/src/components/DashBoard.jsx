import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertytax, getWatertax, getGarbagetax } from '../redux/propertySlice';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';
import styles from './Overview.module.css'; // Import CSS module
import styles1 from './TaxOverview.module.css'; // CSS module import
import TaxEstimator from './TaxEstimator';
import Navbar from './Navbar2';

const DashBoard = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { property } = location.state || {};

  const {
    isPropertyTaxpaid,
    propertytaxAmount,
    isWaterTaxpaid,
    watertaxAmount,
    isGarbageTaxpaid,
    garbagetaxAmount,
    status,
    error,
  } = useSelector((state) => state.property);

  const [totalTax, setTotalTax] = useState(0);
  const [alert, setAlert] = useState(0);
  const[show,setShow] = useState(true);

  useEffect(() => {
    if (property) {
      dispatch(getPropertytax({ propertyId: property.propertyId }));
      dispatch(getWatertax({ propertyId: property.propertyId }));
      dispatch(getGarbagetax({ propertyId: property.propertyId }));
    }
  }, [dispatch, property]);

  useEffect(() => {
    calculateTotalTaxes();
  }, [isPropertyTaxpaid, propertytaxAmount, isWaterTaxpaid, watertaxAmount, isGarbageTaxpaid, garbagetaxAmount]);

  const calculateTotalTaxes = () => {
    let total = 0;
    let totalUnpaid = 1;

    if (!isPropertyTaxpaid) {
      total += propertytaxAmount;
      totalUnpaid++;
    }
    if (!isWaterTaxpaid) {
      total += watertaxAmount;
      totalUnpaid++;
    }
    if (!isGarbageTaxpaid) {
      total += garbagetaxAmount;
      totalUnpaid++;
    }
    setTotalTax(total);
    setAlert(totalUnpaid)
  };



  return (
    <> 
    <Navbar/>   <div className='main_dash' style={{
      position: "relative",
    }}>
      <div className="tax_estimatorr" style={{
        display: show?"block":"none",
        position:"absolute",
        top: "50%",
        left:"50%",
        zIndex:10,
        transform:"translate(-50%,-50%)"
      }}>
        <TaxEstimator />
      </div>
      <div className={styles.overview}>
        <h2 className={styles.heading}>Overview</h2>
        <div className={styles.summary}>
          <div className={styles.summaryItem}>
            <span className={styles.label}>Total Taxes Due:</span>
            <span className={styles.value}>${totalTax}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.label}>Payments Made:</span>
            <span className={styles.value}>${property ? property.totalPayment:0}</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.label}>Pending Payments:</span>
            <span className={styles.value}>$X,XXX</span>
          </div>
          <div className={styles.summaryItem}>
            <span className={styles.label}>Alerts:</span>
            <span className={styles.value}>{alert} pending, {4-alert} overdue</span>
          </div>
        </div>
      </div>

      <div className={styles1.dashboard}>
        <div className={styles1.overview}></div>
        <div className={styles1.taxBreakdown}>
          <div className={`${styles1.card} ${styles1.card1}`}>
            <h1>Property Tax</h1>
            <div className={styles1.insideDiv}>
              <div>Tax: ${propertytaxAmount}</div>
              <div>{isPropertyTaxpaid ? <p style={{
                backgroundColor:"black",
                color:"white",
                padding:"10px",
                borderRadius:"5px"
              }} >Paid</p> : <p style={{
                backgroundColor:"black",
                color:"white",
                padding:"10px",
                borderRadius:"5px"
              }} >Unpaid</p>}</div>
              {!isPropertyTaxpaid && 
              <p style={{
                color:"black",
                fontWeight:700,
                cursor:"pointer"
              }} >details</p>
            }
            </div>
          </div>
          <div className={`${styles1.card} ${styles1.card2}`}>
            <h1>Water Tax</h1>
            <div className={styles1.insideDiv}>
              <div>Tax: ${watertaxAmount}</div>
              <div>{isWaterTaxpaid ? <p style={{
                backgroundColor:"black",
                color:"white",
                padding:"10px",
                borderRadius:"5px"
              }} >Paid</p> : <p style={{
                backgroundColor:"black",
                color:"white",
                padding:"10px",
                borderRadius:"5px"
              }} >Unpaid</p>}</div>
              {!isWaterTaxpaid && 
              <p style={{
                color:"black",
                fontWeight:700,
                cursor:"pointer"
              }} >details</p>
            }
              
            </div>
          </div>
          <div className={`${styles1.card} ${styles1.card3}`}>
            <h1>Garbage Collection Tax</h1>
            <div className={styles1.insideDiv}>
              <div>Tax: ${garbagetaxAmount}</div>
              <div>{isGarbageTaxpaid ? <p style={{
                backgroundColor:"black",
                color:"white",
                padding:"10px",
                borderRadius:"5px"
              }} >Paid</p> : <p style={{
                backgroundColor:"black",
                color:"white",
                padding:"10px",
                borderRadius:"5px"
              }} >Unpaid</p>}</div>
              {!isGarbageTaxpaid && 
              <p style={{
                color:"black",
                fontWeight:700,
                cursor:"pointer"
              }} >details</p>
            }
              
            </div>
          </div>
          <div className={`${styles1.card} ${styles1.card4}`}>
            <h1>Sewage Collection Tax</h1>
            <div className={styles1.insideDiv}>
              <div>Tax: ${garbagetaxAmount}</div>
              <div>{isGarbageTaxpaid ? <p style={{
                backgroundColor:"black",
                color:"white",
                padding:"10px",
                borderRadius:"5px"
              }} >Paid</p> : <p style={{
                backgroundColor:"black",
                color:"white",
                padding:"10px",
                borderRadius:"5px"
              }} >Unpaid</p>}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DashBoard;
