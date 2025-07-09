import ConnectionGroup from "../assets/images/connection-group.svg";
import Creemos from "../assets/images/creemos.svg";

const Connection = () => {
  return (
    <div className="py-8 px-5 md:px-30 text-white">
      <div
        id="connection"
        className="w-full h-full md:h-[200px] block md:flex justify-between p-5 mb-8 rounded-2xl pl-4 sm:pl-20 items-center"
        style={{
          background: `url(${Creemos})`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-5 md:py-10">
          <p className="text-4xl font-bold font-(family-name: 'poppins-regular')">
            Grupos de Conexión
          </p>
          <p className="text-2xl font-light">
            Conecta con otros y acércate más a Dios.
          </p>
        </div>
        <a
          className="flex items-center justify-center gap-2 mt-2 mb-4 py-3 px-12 rounded-lg w-[200px] h-fit"
          style={{ backgroundColor: "#C19A5A" }}
          href="https://elsp.typeform.com/to/K2PJhB6f"
          target="_blank"
        >
          <p className="font-bold">Únete</p>
        </a>
      </div>

      <div
        id="creemos"
        className="h-fit md:h-[200px] block md:flex justify-between p-5 rounded-2xl pl-4 sm:pl-20 items-center"
        style={{
          background: `url(${ConnectionGroup})`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="py-5 md:py-10">
          <p className="text-4xl font-bold font-(family-name: 'poppins-regular')">
            ¿En qué creemos?
          </p>
        </div>
        <a
          className="flex items-center justify-center gap-2 mt-2 mb-4 py-3 px-12 rounded-lg w-[200px] h-fit"
          style={{ backgroundColor: "#C19A5A" }}
          href="https://supresencia.com/que-creemos"
          target="_blank"
        >
          <p className="font-bold">Ver más</p>
        </a>
      </div>
    </div>
  );
};

export default Connection;
