import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import NavLinks from "./NavLinks";

const BigSidebar: React.FC = () => {
  const isSidebarOpen = useSelector(
    (state: RootState) => state.user.isSidebarOpen
  );

  const toggleSidebar = () => {
    console.log("Sidebar toggled");
  };

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
