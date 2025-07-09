import DonationImage from "../assets/images/donation-image.svg";

const Donation = () => {
  return (
    <div id="donation" className="w-full  py-8 px-5 md:px-30 text-white">
      <div
        className="flex flex-col justify-center pl-4 sm:pl-20 p-5 rounded-2xl"
        style={{
          background: `url(${DonationImage})`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="text-4xl font-bold font-(family-name: 'poppins-regular')">
          Hagamos famoso <br /> el nombre de Jesús
        </p>
        <a
          className="flex items-center gap-2 mt-2 mb-4 py-3 px-12 rounded-lg w-fit"
          style={{ backgroundColor: "#C19A5A" }}
          href="https://www.paypal.com/donate?token=ldEs1Zp5cjKU0FNVWZAYNvHUFe7IteHVr4S7hCfiFyhAwPIkYrAWt4fuCi-af6L7UaQzvAt-bCJQLxZV"
          target="_blank"
        >
          <p className="font-bold">Haz tu donación</p>
        </a>
      </div>
    </div>
  );
};

export default Donation;
