"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const DropDown = ({
  id,
  options,
  label,
  onSelect,
  isOpen,
  className,
  organization,
  menuClassName,
  itemClassName,
  menuContent,
  company,
  img,
  ...otherProps
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(isOpen || false);

  useEffect(() => {
    console.log({ id });
    const closeOnOutsideClick = (event) => {
      const targetElement = event.target;
      const dropdownElement = document.getElementById(`dropdown-menu-${id}`);
      console.log({ targetElement });
      console.log({ dropdownElement });
      if (dropdownElement && !dropdownElement.contains(targetElement)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      if (isMenuOpen) {
        document.addEventListener("click", closeOnOutsideClick);
      } else {
        document.removeEventListener("click", closeOnOutsideClick);
      }

      return () => document.removeEventListener("click", closeOnOutsideClick);
    }
  }, [isMenuOpen, id]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-w-[250px]">
      <div
        className="flex items-center gap-3 px-4 py-2 text-white rounded-md cursor-pointer bg-sky-400"
        onClick={toggleMenu}
      >
        <p>{label ? label : "Test"}</p>
        <span>|</span>
        <p>{company ? company : "Test Org"}</p>
        <p className="ml-auto ">
          {isMenuOpen ? (
            <IoIosArrowUp className="text-neutral-900 focus:shadow-[0_0_0_2px] focus:shadow-black" />
          ) : (
            <IoIosArrowDown className="text-neutral-900" />
          )}
        </p>
      </div>
      {isMenuOpen && (
        <div
          className="z-50 mx-auto bg-white shadow-md min-w-[250px] mt-4 px-6 py-4 rounded-md backdrop-blur-lg"
          id={`dropdown-menu-${id}`}
        >
          <div>
            <div className="flex gap-3">
              {/* Customizable image */}
              <img
                width={50}
                height={40}
                src={img ?? "/placeholder.jpg"}
                alt=""
                className="rounded-md"
              />
              <div className="flex flex-col">
                {/* Customizable organization name */}
                <p className="font-semibold">My Organization</p>
                <p className="text-gray-500">
                  {company ? company : "Test Org"}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <h1>Subscription</h1>
            <p className="text-neutral-500">Expire On: 30 Jun 2024</p>
            <p className="text-neutral-500">Credits: 9999</p>
            <p className="text-neutral-500">Messages Available: 5910</p>
          </div>
          <button className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default DropDown;
