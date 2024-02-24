"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import ArrowSvg from "./ArrowSvg";
import TickSvg from "./TickSvg";

const MultipleSelect = ({ options, selectedOptions, setSelectedOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOptions((prevOptions) => {
      const includesOption = prevOptions.some(
        (opt) => opt.value === option.value
      );
      return includesOption
        ? prevOptions.filter((opt) => opt.value !== option.value) // Remove
        : [...prevOptions, option]; // Add
    });
  };

  return (
    <main className="relative w-60 h-9">
      <div
        id="container"
        className="flex items-center px-3 py-2 text-xs bg-transparent border border-gray-300 rounded-md shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length > 0 ? (
          <div className="flex gap-2 text-[9px] items-center w-full">
            <div className="flex flex-wrap gap-2 max-w-[190px]">
              {selectedOptions.map((option) => (
                <p
                  key={option.value}
                  className="bg-sky-100 rounded-[4px] px-2 py-1 truncate"
                >
                  {option.label}
                </p>
              ))}
            </div>
            <div className="ml-auto">
              <ArrowSvg />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between w-full cursor-pointer">
            Select Items
            <ArrowSvg />
          </div>
        )}
      </div>
      <div
        id="dropdown"
        className={cn(
          "w-60 mt-3 bg-white shadow-md rounded-md ",
          isOpen ? "block" : "hidden"
        )}
      >
        {options.map((option) => (
          <button
            key={option.value}
            className="w-full px-3 py-2 text-left hover:bg-gray-100"
            onClick={() => handleOptionChange(option)}
          >
            <div className="flex items-center justify-between text-xs">
              {option.label}
              {selectedOptions.some(
                (selected) => selected.label === option.label
              ) && <TickSvg className="w-4 h-4" />}
            </div>
          </button>
        ))}
      </div>
    </main>
  );
};

export default MultipleSelect;
