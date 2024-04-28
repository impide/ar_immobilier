import {  certification } from "../assets";
import styles, { layout } from "../style";

const Expertise = () => (
  <section id="expertise" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={certification} alt="Expertise" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Les certifications <br className="sm:block hidden" /> de nos diagnostiqueurs
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Les certifications dont ils disposent sont la garantie de leur expertise et de la qualité de leur travail. Nous sommes fiers de travailler avec des professionnels compétents et impliqués dans la protection de la santé publique.




      </p>

    </div>
  </section>
);

export default Expertise;
