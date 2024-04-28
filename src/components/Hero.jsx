import styles from "../style";
import GetStarted from "./GetStarted";
import { final } from "../assets";

const Hero = () => {
  return (
    <section id="accueil" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-dark ss:leading-[100.8px] leading-[75px]">
          Prévenez les<br className="sm:block hidden" />{" "}
            <span className="text-blue-600">risques d'amiante </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-dark ss:leading-[100.8px] leading-[75px] w-full">
        avant démolition.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Le diagnostic amiante pré-démolition est crucial pour assurer la sécurité des intervenants en identifiant la présence d'amiante dans les matériaux de construction.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={final} alt="Expertise" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  );
};

export default Hero;
