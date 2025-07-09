import UbicationIcon from "../assets/icons/ubication.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";

const Card = ({
  title,
  schedule,
  icon,
  platform,
  link,
}: {
  title: string;
  schedule: string;
  icon: string;
  platform: string;
  link?: string;
}) => {
  return (
    <a href={link} target="_blank">
      <div className="relative border-1 border-gray-400 rounded-lg shadow-xl w-[80vw] sm:w-xs md:flex md:flex-col block justify-between h-[200px]">
        <div className="flex flex-col justify-around pl-4 px-3 py-3 h-[120px]">
          <p className="font-bold text-xl">{title}</p>
          <p className="font-light text-sm">{schedule}</p>
        </div>
        <div
          className="absolute bottom-0 w-full flex h-14 justify-center text-white items-center px-3 rounded-b-lg py-2"
          style={{ backgroundColor: "#464646" }}
        >
          <img src={icon} alt="icon" />
          <p>{platform}</p>
        </div>
      </div>
    </a>
  );
};

const Card2 = ({
  title,
  subTitle1,
  subTitle2,
  description1,
  description2,
  time1,
  time2,
  icon,
  platform,
  link,
}: {
  title: string;
  subTitle1: string;
  subTitle2: string;
  description1: string;
  description2: string;
  time1: string;
  time2: string;
  icon: string;
  platform: string;
  link?: string;
}) => {
  return (
    <a href={link} target="_blank">
      <div className="relative border-1 border-gray-400 rounded-lg shadow-xl w-[80vw] sm:w-xs md:flex md:flex-col block justify-between h-[200px]">
        <div className="flex justify-center py-3">
          <p className="font-bold text-xl">{title}</p>
        </div>

        <div className="flex justify-around pb-6">
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-m">{subTitle1}</p>
            <p className="font-light text-sm pt-1">{time1}</p>
            <p className="font-light italic text-xs pt-1">{description1}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-m">{subTitle2}</p>
            <p className="font-light text-sm pt-1">{time2}</p>
            <p className="font-light italic text-xs pt-1">{description2}</p>
          </div>
        </div>

        <div
          className="absolute bottom-0 w-full flex h-14 justify-center text-white items-center px-4 rounded-b-lg py-2"
          style={{ backgroundColor: "#464646" }}
        >
          <img src={icon} alt="icon" />
          <p>{platform}</p>
        </div>
      </div>
    </a>
  );
};

const Card3 = ({
  title,
  subTitle1,
  description1,
  time1,
  icon,
  platform,
  link,
}: {
  title: string;
  subTitle1: string;
  description1: string;
  time1: string;
  icon: string;
  platform: string;
  link?: string;
}) => {
  return (
    <a href={link} target="_blank">
      <div className="relative border-1 border-gray-400 rounded-lg shadow-xl w-[80vw] sm:w-xs md:flex md:flex-col block justify-between h-[200px]">
        <div className="flex justify-center py-3">
          <p className="font-bold text-xl">{title}</p>
        </div>

        <div className="flex justify-around pb-6">
          <div className="flex flex-col justify-center items-center">
            <p className="font-light text-m">{subTitle1}</p>
            <p className="font-light text-sm pt-1">{time1}</p>
            <p className="font-light italic text-xs pt-1">{description1}</p>
          </div>
        </div>

        <div
          className="absolute bottom-0 w-full flex h-14 justify-center text-white items-center px-4 rounded-b-lg py-2"
          style={{ backgroundColor: "#464646" }}
        >
          <img src={icon} alt="icon" />
          <p>{platform}</p>
        </div>
      </div>
    </a>
  );
};

const Schedules = () => {
  return (
    <div
      id="schedules"
      className="text-black lg:px-30 mx-auto py-12"
      style={{ backgroundColor: "#F7F7F7" }}
    >
      <h2 className="text-5xl font-bold pl-14 pb-4">Visítanos</h2>
      <div
        className="flex flex-col justify-center sm:grid place-items-center gap-8"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))" }}
      >
        <Card
          title="Nuestra ubicación"
          schedule="3622 N Garland Avenue Garland. Tx. 750040"
          icon={UbicationIcon}
          platform="Google Maps"
          link="https://maps.app.goo.gl/W4rCXPJQcXNYRWj29"
        />
        <Card3
          title="Domingo"
          subTitle1=" "
          description1="Presencial"
          time1="10:00 a.m."
          icon={YoutubeIcon}
          platform="YouTube"
          link="https://www.youtube.com/@supresencia/streams"
        />
        <Card2
          title="Miércoles"
          subTitle1=" "
          subTitle2=" "
          description1="Transmisión"
          description2="Transmisión"
          time1="5:00 p.m."
          time2="7:00 p.m."
          icon={YoutubeIcon}
          platform="YouTube"
          link="https://www.youtube.com/@supresencia/streams"
        />
        <Card2
          title="Oración"
          subTitle1="MARTES"
          subTitle2="JUEVES"
          description1="Presencial"
          description2="Transmisión"
          time1="6:00 a.m."
          time2="6:00 a.m."
          icon={YoutubeIcon}
          platform="YouTube"
          link="https://www.youtube.com/@supresencia/streams"
        />
      </div>
    </div>
  );
};

export default Schedules;
