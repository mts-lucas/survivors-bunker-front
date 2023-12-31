import { Logo } from "./image";
import { Menu } from "./menu";


export function Header(){
  return (
    <header className="bg-gradient-to-r from-black via-gray-800 to-black p-4 text-white flex justify-between items-center">
      <div className="flex justify-start flex-row">
        <Logo />
        <h1 className="text-5xl font-bold pl-4 py-4">Survivors Bunker</h1>
      </div>
      <Menu />
    </header>
  );
}


