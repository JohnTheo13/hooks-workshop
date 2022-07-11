import React from "react";
import { Link } from "react-router-dom";
import { StyledSidebar } from "../styles";
import { useLocation } from "react-router";

const routes = [
  {
    link: "/exercise-1",
    text: "useState",
  },
  {
    link: "/exercise-2",
    text: "useReducer",
  },
  {
    link: "/exercise-3",
    text: "useReducer more",
  },
  {
    link: "/exercise-4",
    text: "useEffect 1",
  },
  {
    link: "/exercise-5",
    text: "useRef",
  },
  {
    link: "/exercise-6",
    text: "united reducer",
  },
  {
    link: "/exercise-7",
    text: "useContext",
  },
  {
    link: "/exercise-8",
    text: "useLayoutEffect",
  },
  {
    link: "/exercise-9",
    text: "useCallback",
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <StyledSidebar className="w3-sidebar w3-light-grey w3-bar-block">
      <h3 className="w3-bar-item">Menu</h3>
      {routes.map(({ link, text }) => {
        const className = `w3-bar-item w3-button${
          pathname === link ? " active" : null
        }`;
        return (
          <Link key={link} to={link} className={className}>
            {text}
          </Link>
        );
      })}
    </StyledSidebar>
  );
};

export { Sidebar };
