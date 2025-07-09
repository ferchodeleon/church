import BannerImage from "../assets/images/banner.svg";
import Map from "../assets/icons/map.svg";

const Banner = () => {
  return (
    <div
      className="w-full h-[65vh] text-white"
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute max-md:bottom-[29%] md:top-1/2 left-[10%] md:left-[30%] md:-translate-x-1/2 md:-translate-y-1/2">
        <h1 className="text-5xl md:text-7xl max-sm:text-3xl font-bold">
          Su Presencia <br />
          Church{" "}
        </h1>
        <p className="py-4 max-sm:text-sm text-3xl font-normal">
          Su casa es mi casa
        </p>
        <a
          className="flex items-center gap-2 py-3 px-7 rounded-lg w-fit"
          style={{ backgroundColor: "#C19A5A" }}
          href="/"
        >
          <img src={Map} alt="Arrow" />
          <p className="font-bold max-sm:text-sm">¿Cómo llegar?</p>
        </a>
      </div>
    </div>
  );
};

export default Banner;
