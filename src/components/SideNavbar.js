import React, { useState } from "react";
import "./SideNavbar.scss";
//import { exit} from "../assets/svgFile";
import logoImage from "../assets/logo-editor.PNG";


const SideNavbar = ({ openModal }) => {
  return (
    <div className="side-navbar">
      <div className="app-logo"><img src={logoImage} alt="Logo" style = {{width : "130px" , height :120 }} /> </div>
      <hr className="h-line" />
      <div className="nav-links">
        <ul className="link-items">
          
          {["getting-started", "query-editor"].map((value) => (
            <li
              key={value}
              className={`link-item ${value === "query-editor" && "active"}`}
            >
              {value === "getting-started" ? "Getting Started" : "Query Editor"}
            </li>
          ))}
         
        </ul>
      </div>
      
      
    </div>
  );
};

export default SideNavbar;

// // SideNavbar.js
// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Modal from "react-modal"; 
// import "./SideNavbar.scss";
// import logoImage from "../assets/logo-editor.PNG"
// import { exit } from "../assets/svgFile";
// import TABLE_NAMES from "../constants/constants";

// const links = [
//   { label: "Getting Started", value: "getting-started", path: "/" },
//   { label: "Tables", value: "tables", path: "/tables" },
//   { label: "Query Editor", value: "query-editor", path: "/query-editor" }
// ];

// const SideNavbar = () => {
//   const location = useLocation();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="side-navbar">
//       <div className="app-logo"><img src={logoImage} alt="Logo" style={{width: "140px", height: "130px" }} /> </div>
//       <hr className="h-line" />
//       <div className="nav-links">
//         <ul className="link-items">
//         <li className="link-item" onClick={openTableModal}>
//             Tables
//           </li>
          
//         </ul>
//       </div>
//       <div className="logout">
//         <span className="icon">{exit()}</span>
//         <span className="text">Logout</span>
//       </div>
//     </div>
//   );
// };

// export default SideNavbar;
