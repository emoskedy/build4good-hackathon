import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const data = [
  {
    title: "All",
    link: "/",
  },
  {
    title: "Appetizers",
    link: "/appetizer",
  },
  {
    title: "Rice",
    link: "/rice",
  },
  {
    title: "Soups",
    link: "/soups",
  },
  {
    title: "Thai Noodle",
    link: "/thainoodle",
  },
  {
    title: "Thai Entrees",
    link: "/thaientrees",
  },
  {
    title: "BBQ",
    link: "/bbq",
  },
  {
    title: "Pinoy Noodle",
    link: "/pinoynoodle",
  },
  {
    title: "Signature Pinoy Entrees",
    link: "/signaturepinoyentrees",
  },
  {
    title: "Pinoy Entrees",
    link: "/pinoyentrees",
  },
  {
    title: "Salads",
    link: "/salads",
  },
  {
    title: "Seafood Dishes",
    link: "/seafooddishes",
  },
  {
    title: "Beverages",
    link: "/beverages",
  },
];

const Header = ({ title }) => {
  const [navs] = useState(data);
  return (
    <>
      <div>
        <h1 className="h1">{title}</h1>
      </div>
      <ul className="headerBox">
        {navs.map((nav, index) => (
          <li key={index} className="li">
            <NavLink to={nav.link} className="navs">
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Header;
