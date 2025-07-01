import { CubeIcon, HeartIcon, HorseIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <>
      <NavLink to={"/"}>
        <HorseIcon size={50} />
      </NavLink>
      <NavLink to={"/about"}>
        <CubeIcon size={50} />
      </NavLink>
      <NavLink to={"/mauricio"}>
        <HeartIcon size={50} />
      </NavLink>
    </>
  );
}
