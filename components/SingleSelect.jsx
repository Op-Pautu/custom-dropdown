"use client";

import React, { useEffect, useRef, useState } from "react";

import ArrowSvg from "./ArrowSvg";
import { cn } from "@/lib/utils";
import TickSvg from "./TickSvg";

const SingleSelect = ({ options, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [dropDownSide, setDropdownSide] = useState("bottom");
  const dropDownRef = useRef(null);

  useEffect(() => {
    const toggleBodyOverflow = () => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };

    const updateDropdownPosition = () => {
      if (dropDownRef.current) {
        const dropdownRect = dropDownRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const shouldRenderAtTop = dropdownRect.bottom > viewportHeight / 2;

        setDropdownSide(shouldRenderAtTop ? "top" : "bottom");
      }
    };
    updateDropdownPosition();
    toggleBodyOverflow();
    window.addEventListener("scroll", updateDropdownPosition);
    window.addEventListener("resize", updateDropdownPosition);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", updateDropdownPosition);
      window.removeEventListener("resize", updateDropdownPosition);
    };
  }, [isOpen]);

  return (
    <main className="relative w-44 h-9" ref={dropDownRef}>
      <div
        id="container"
        className="flex items-center justify-between px-3 py-2 text-xs bg-transparent border border-gray-300 rounded-md shadow-sm cursor-pointer focus-visible:border-none focus-visible:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p label="items" className="truncate">
          {selectedOption.label ? selectedOption.label : "Select Items"}
        </p>

        <ArrowSvg />
      </div>
      <div
        id="dropdown"
        className={cn(
          "w-44 absolute bg-white shadow-md rounded-md",
          isOpen ? "block" : "hidden",
          dropDownSide === "bottom" ? "top-12" : "bottom-12"
        )}
      >
        {options.map((option) => (
          <button
            key={option.value}
            className={cn(
              "w-full px-3 py-2 text-left hover:bg-gray-100",
              option.label === selectedOption ? "bg-opacity-30" : ""
            )}
            onClick={() => {
              setSelectedOption(option);
              setIsOpen(false);
            }}
          >
            <div className="flex items-center justify-between text-xs">
              <p className="truncate">{option.label}</p>
              {option.label === selectedOption && (
                <TickSvg className="w-4 h-4" />
              )}
            </div>
          </button>
        ))}
      </div>
    </main>
  );
};

export default SingleSelect;
