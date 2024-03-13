import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="body">
      <section className={styles.homecontainer}>
      <h2>Welcome to NSBM Green University Accommodation</h2>
            <p>Find your perfect accommodation around the NSBM Green University campus.</p>
            <p>Browse through our listings of available accommodations or register as a landlord to advertise your property.</p>
            
      </section>
      <section>
      <h2 className={styles.future}>Featured Accommodations</h2>
      <div className="accommodationcard">

      </div>
      </section>
    </div>
    
  );
}
