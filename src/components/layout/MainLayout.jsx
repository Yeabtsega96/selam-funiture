import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import "./MainLayout.css"
import ScrollToTopButton from "../common/ScrollToTopButton";
import LoadingSpinner from "./LoadingSpinner";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <NavBar />

      <main className="main-content">
        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MainLayout;