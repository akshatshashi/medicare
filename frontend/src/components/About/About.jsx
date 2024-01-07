import aboutImg from "../../assets/images/about.png";
import doctor1 from "../../assets/images/doctor_1.png";
import doctor2 from "../../assets/images/doctor_2.png";
import doctor3 from "../../assets/images/doctor_3.png";
import doctor4 from "../../assets/images/doctor_4.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between flex-col  lg:flex-row gap-[50px] lg:gap-[130px] xl:gap-0 ">
          {/* ========= about img ======== */}
          <div className="relative z-10 w-3/4 lg:w-1/2  xl:w-[770px] order-2 lg:order-1">
            <img src={doctor1} alt="about_img" />
            <div className=" w-[200px] md:w-[300px] absolute bottom-4 right-[-30%]  md:right-[-7%]  lg:right-[22%] z-20">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* =========== about content ============ */}
          <div className=" w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Discover Compassionate Care with Our Expert Physicians</h2>
            <p className="text__para">
              We pride ourselves on providing exceptional healthcare services tailored to your needs. Our team of highly skilled
              and compassionate doctors is dedicated to delivering comprehensive and personalized medical care. With years of experience and 
              expertise in various specialities, out physicans are committed to ensuring your well-being.
              
            </p>
            <p className="text__para mt-[30px]">
            From routine check-ups to complex treatments, our doctors approach each patient with empathy, respect,
             and a focus on delivering the highest standard of medical care. 
            We understand the importance of a trusting doctor-patient relationship, 
            and our physicians take the time to listen, answer your questions, 
            and involve you in your healthcare decisions.
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
