import { useState } from "react";
import Logo from "../assets/logo.svg";
// import { NavLink } from "react-router-dom";
import "../style/header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const onCloseMenu = () => setIsMenuOpen(false);
  const isOpen = isMenuOpen ? "open" : "";

  const menuItems = [
    { text: "Donaciones", href: "#donation" },
    { text: "Visítanos", href: "#schedules" },
    { text: "Grupos de Conexión", href: "#connection" },
    { text: "¿En qué creemos?", href: "#creemos" },
  ];

  return (
    <header style={{ width: "100%", zIndex: 2 }}>
      <div className="header-container" style={{}}>
        <div className={`image-logo ${isOpen}`}>
          <a href="/">
            <img
              src={Logo}
              alt="imagen en logo de la banda su presencia worship"
            />
          </a>
        </div>
        <button
          className={`burger ${isOpen}`}
          aria-label="Botón para abrir y cerrar el menú"
          onClick={toggleMenu}
        ></button>
        <div className={`header-background ${isOpen}`}></div>
        <div className={`header-menu ${isOpen}`}>
          <nav>
            <ul>
              {menuItems.map((route, index) => (
                <li key={index}>
                  <a
                    href={route.href}
                    style={{ animationDelay: `0.${index + 2}s` }}
                    onClick={onCloseMenu}
                  >
                    {route.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );

  // return (
  //   <div className="text-black p-5 w-full flex justify-center items-center relative z-50">
  //     <div className="menu absolute left-8">
  //       <button
  //         onClick={() => setIsMenuOpen(!isMenuOpen)}
  //         className="focus:outline-none"
  //       >
  //         <img src={Menu} alt="Menu" />
  //       </button>

  //       {/* Menu Container */}
  //       {isMenuOpen && (
  //         <div className="absolute left-0 top-full">
  //           {/* Menu Overlay - Only covers the menu area */}
  //           <div
  //             className="absolute inset-0 bg-neutral-600 bg-opacity-30 -inset-x-96 -inset-y-96"
  //             onClick={() => setIsMenuOpen(false)}
  //           />

  //           {/* Dropdown Menu */}
  //           <div className="relative z-50 mt-2 w-64 bg-white rounded-lg shadow-lg">
  //             <nav className="py-2">
  //               {menuItems.map((item, index) => (
  //                 <a
  //                   key={index}
  //                   href={item.href}
  //                   className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
  //                   onClick={() => setIsMenuOpen(false)}
  //                 >
  //                   {item.text}
  //                 </a>
  //               ))}
  //             </nav>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //     <img src={Logo} alt="Logo" />
  //   </div>
  // );
};

export default Header;
