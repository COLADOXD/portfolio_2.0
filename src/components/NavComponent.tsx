import Avatar from "../assets/img/anakinSkywalker.webp";
import { ThemeToggle } from "./ThemeToggle.tsx";

export const NavComponent = () => {
  return (
    <nav className="py-4 flex flex-row justify-between w-full px-4 bg-transparent">
      <div className="flex items-center">
        <img className="rounded-full size-10" src={Avatar} alt="Avatar" />
        <p className="ml-4 text-lg font-semibold">Mateo Chacon</p>
      </div>
      <ThemeToggle />
    </nav>
  );
};
