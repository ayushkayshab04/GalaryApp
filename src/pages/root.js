import { Outlet } from "react-router-dom";
import MainNavigationBar from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <main>
        <MainNavigationBar />
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
