import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CursorFx from "./CursorFx";
import RouteEffects from "./RouteEffects";

export default function Layout() {
  return (
    <>
      <RouteEffects />
      <Header />
      <Outlet />
      <Footer />
      <CursorFx />
    </>
  );
}
