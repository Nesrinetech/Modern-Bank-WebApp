// import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";


const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Empower Your Business, <br className="sm:block hidden" /> Let Us Manage Your Finances.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Enhance your credit, reap rewarding benefits, and optimize your savings effortlessly. Amidst a sea of credit card options in the market, we streamline the selection process, ensuring your business thrives with the ideal financial companion. Let us handle the complexities while you focus on growing your business.
      </p>

      <Button styles={`mt-10`} />
    </div>

  
  </section>
);

export default Business;