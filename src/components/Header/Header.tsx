import { useState } from "react";
import "./Header.scss";
import { Menu } from "semantic-ui-react";
import { SemanticMenu, LocationState } from "../../types/Home.d";
import { useLocation, useNavigate, NavigateFunction } from "react-router";

interface HeaderProps {
  setTheme: () => void
  theme: boolean
}

export default function Header({ setTheme, theme }: HeaderProps) {
  const currentPath = useLocation();
  const locationState = currentPath as LocationState;
  const { pathname } = locationState;
  const finalCurrentPath: string = pathname.replace("/", "");
  const navigate: NavigateFunction = useNavigate();

  const [activeItem, setActiveItem] = useState<string>(finalCurrentPath);

  const handlerItemClick = (e: React.SyntheticEvent, param: string): void => {
    setActiveItem(param);
    navigate(`/${param}`);
  };

  return (
    <div className="header-menu">
      <Menu secondary id="items-container">
        <Menu.Item
          name="inicio"
          active={activeItem === SemanticMenu[1]}
          onClick={(e) => handlerItemClick(e, SemanticMenu[1])}
        />
        <Menu.Item
          name="series"
          active={activeItem === SemanticMenu[2]}
          onClick={(e) => handlerItemClick(e, SemanticMenu[2])}
        />
        <Menu.Item
          name="comics"
          active={activeItem === SemanticMenu[3]}
          onClick={(e) => handlerItemClick(e, SemanticMenu[3])}
        />
        <Menu.Item
        name={theme ? 'dark theme' : 'light theme'}
        onClick={setTheme}
        id="button-theme"
        ></Menu.Item>
      </Menu>
    </div>
  );
}
