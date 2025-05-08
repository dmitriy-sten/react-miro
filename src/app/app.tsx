import { AppHeader } from "@/features/header";
import { Outlet } from "@tanstack/react-router";

export function App() {
  return (
    <div>
      <AppHeader/>
      <Outlet/>
    </div>
  );
}
