"use client";
import React from "react";
import MenuIcon from "../../../public/svgs/menu-icon.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "@/app/GlobalRedux/Features/menu/menuSlice";
const MenuButton = () => {
  const menuState = useSelector((state) => state.toggleMenu.value);
  const dispatch = useDispatch();
  const menuToggle = () => {
    dispatch(toggle(menuState));
  };

  return (
    <button className="" onClick={menuToggle}>
      <MenuIcon className="text-white w-12 h-12 p-2" />
    </button>
  );
};

export default MenuButton;
