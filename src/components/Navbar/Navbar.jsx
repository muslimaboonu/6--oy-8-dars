import React from 'react'
import logo from "../../assets/logo.png"
import {NavLink, useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()

  return (
      <div className="w-full mx-auto flex justify-between items-center gap-4 py-4 px-8">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img className="max-w-[200px]" src={logo} alt="Logo"/>
        </div>

        <div className="flex justify-between items-center gap-4 font-semibold">
          <NavLink className="hover:text-gray-400 duration-400" to={"/"}>Home</NavLink>
          <NavLink className="hover:text-gray-400 duration-400" to={"/about"}>About me</NavLink>
          <NavLink className="hover:text-gray-400 duration-400" to={"/contact"}>Contact</NavLink>
        </div>
      </div>
  )
}
export default Navbar
