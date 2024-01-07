import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },

 
];

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
];

const quickLinks03 = [

  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="Logo" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Developed By SDL GROUP 13.
            </p>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] text-headingColor mb-6">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    className="text-[16px] leading-7 font-[400] text-textColor"
                    to={item.path}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] text-headingColor mb-6">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    className="text-[16px] leading-7 font-[400] text-textColor"
                    to={item.path}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] text-headingColor mb-6">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    className="text-[16px] leading-7 font-[400] text-textColor"
                    to={item.path}
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
