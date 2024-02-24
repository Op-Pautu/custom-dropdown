"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const DropDown = ({
  id,
  options,
  label,
  onSelect,
  isOpen: propIsOpen,
  className,
  organization,
  menuClassName,
  itemClassName,
  menuContent,
  company,
  side,

  img,
  ...otherProps
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(propIsOpen || false);
  const dropdownRef = useRef(null);
  const [dropDownSide, setDropdownSide] = useState(side);

  useEffect(() => {
    const toggleBodyOverflow = () => {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    };

    toggleBodyOverflow();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      event.stopPropagation();
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(`.dropdown-menu-${id}`)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyBoardClick = (event) => {
      const key = event.key;
      if (key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    const updateDropdownPosition = () => {
      if (dropdownRef.current) {
        const dropdownRect = dropdownRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const shouldRenderAtTop = dropdownRect.bottom > viewportHeight / 2;

        setDropdownSide(shouldRenderAtTop ? "top" : "bottom"); // Update side
      }
    };

    updateDropdownPosition();

    window.addEventListener("scroll", updateDropdownPosition);
    window.addEventListener("resize", updateDropdownPosition);
    document.addEventListener("keydown", handleKeyBoardClick);

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyBoardClick);
      window.removeEventListener("scroll", updateDropdownPosition);
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }, [id]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className=" min-w-[250px] flex items-center gap-3 px-4 py-2 text-white rounded-md cursor-pointer bg-sky-400"
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
          className={cn(
            "dropdown-menu z-50 absolute mx-auto bg-white shadow-md min-w-[250px] mt-4 px-6 py-4 rounded-md backdrop-blur-lg",
            dropDownSide === "bottom" ? "top-10" : "bottom-12"
          )}
        >
          <div>
            <div className="flex gap-3">
              <img
                width={50}
                height={40}
                src={img ?? "/placeholder.jpg"}
                alt=""
                className="rounded-md"
              />
              <div className="flex flex-col">
                <p className="font-semibold">My Organization</p>
                <p className="text-gray-500">
                  {company ? company : "Test Org"}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <h1>Subscription</h1>
            <p className="text-sm text-neutral-500">Expire On: 30 Jun 2024</p>
            <p className="text-sm text-neutral-500">Credits: 9999</p>
            <p className="text-sm text-neutral-500">Messages Available: 5910</p>
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
