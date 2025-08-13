import { Outlet } from "react-router-dom";
import NavTabs from "./nav-tabs";

export default function AppLayout() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Fitex Dashboard</h1>
      <NavTabs />
      <Outlet />
    </div>
  );
}
