import styles from '../styles/Footer.module.css';
import Image from 'next/image';


const Footer = () => {
  return (
    <div className={styles.container}>
       <div className={styles.item}>
         <Image src="/img/bg.png"  layout="fill"  alt="" />
         </div>
         <div className={styles.item}>
             <div className={styles.card}>
             <h2 className={styles.motto}>
               OH YES, WE DID, THE FREDDY PIZZA WELL, WELL BAKED SLICE OF PIZZA.
             </h2>
             </div>
             <div className={styles.card}>
               <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
               <p className={styles.text}> 
                  2345 Haile Selassir Road #304. 
                  <br /> Nairobi, 85022
                  <br /> (+254) 731 246 819
               </p>
               <p className={styles.text}> 
                  2345 Haile Selassir Road #304. 
                  <br /> Nairobi, 85022
                  <br /> (+254) 731 246 819
               </p>
               <p className={styles.text}> 
                  2345 Haile Selassir Road #304. 
                  <br /> Nairobi, 85022
                  <br /> (+254) 731 246 819
               </p>
               <p className={styles.text}> 
                  2345 Haile Selassir Road #304. 
                  <br /> Nairobi, 85022
                  <br /> (+254) 731 246 819
               </p>
             </div>
             <div className={styles.card}>
               <h1 className={styles.title}>Working Hours</h1>
                 <p className={styles.text}>
                   MONDAY UNTILL FRIDAY 
                   <br/> 9:00 -22:00
                 </p>
                 <p className={styles.text}>
                   SATURDAY - SUNDAY
                   <br/> 12:00 - 2400
                  </p>
             </div>
          </div>
    </div>
  )
}

export default Footer
