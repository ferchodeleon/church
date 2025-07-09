import Instagram from "../assets/icons/instagram.svg";
import Phone from "../assets/icons/phone.svg";
import Email from "../assets/icons/email.svg";

const Footer = () => {
  return (
    <div className="bg-[#DEDEDE] flex md:flex-row flex-col md:justify-around justify-center items-center py-20">
      <div className="pb-5">
        <p className="text-[#333333] font-bold md:text-4xl text-2xl text-center">
          Síguenos en nuestras redes sociales
        </p>
      </div>
      <div className="flex gap-2">
        <a href="http://instagram.com/supresenciaiglesia" target="_blank">
          <img src={Instagram} alt="instagram" />
        </a>
        <a href="tel:+14697827585" target="_blank">
          <img src={Phone} alt="phone" />
        </a>
        <a href="mailto:spdallas@supresencia.com" target="_blank">
          <img src={Email} alt="email" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
