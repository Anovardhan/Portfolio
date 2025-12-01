import React, { useState } from 'react';
import { FaHome ,FaInfoCircle,FaEnvelope} from 'react-icons/fa';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FaHome />,link :"/" },
    { name: "About", icon: <FaInfoCircle/> ,link:"/about"},
    { name: "Contact", icon: <FaEnvelope />,link:"/contact" },
  ];

  return (
    <div
      className={`sidebar ${open ? "open" : ""}`}
      onMouseEnter={() => window.innerWidth > 768 && setOpen(true)}
      onMouseLeave={() => window.innerWidth > 768 && setOpen(false)}
    >
 
      <button
        className="toggle-btn d-md-none"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <ul className="list-unstyled m-0 p-0">
        {menuItems.map((item, index) => (
          <li key={index}>
            <span className="icon">{item.icon}</span>
            <span className="text"><a href={`${item.link}`} style={{textDecoration:"none",color:"white"}}>{item.name}</a></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
