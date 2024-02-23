"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const RadixDropDown = () => {
  const [checked, setChecked] = React.useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <DropdownMenu.Label className="flex items-center gap-3 px-4 py-2 text-white rounded-md cursor-pointer bg-sky-400 min-w-[250px] border-none outline-none focus-visible:outline-none focus-visible:border-none">
          <p>"Test"</p>
          <span>|</span>
          <p>Test Organization</p>
          <p className="ml-auto ">
            {menuOpen ? (
              <IoIosArrowUp className="text-neutral-900 focus:shadow-[0_0_0_2px] focus:shadow-black" />
            ) : (
              <IoIosArrowDown className="text-neutral-900" />
            )}
          </p>
        </DropdownMenu.Label>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="z-50 mx-auto  bg-white shadow-md min-w-[250px] mt-4 px-6 py-4 rounded-md backdrop-blur-lg">
          <div className="flex gap-3">
            <DropdownMenu.Item className="border-none outline-none">
              <img
                width={50}
                height={40}
                src={"/test.png"}
                alt=""
                className="rounded-md"
              />
            </DropdownMenu.Item>
            <DropdownMenu.Item className="border-none outline-none">
              <p className="font-semibold">My Organization</p>
              <p className="text-gray-500">Test Org</p>
            </DropdownMenu.Item>
          </div>
          <DropdownMenu.Separator />
          <DropdownMenu.Label className="mt-10 font-semibold">
            Subscription
          </DropdownMenu.Label>
          <DropdownMenu.Item className="border-none outline-none">
            <p className="text-neutral-600">Expires on: 30 Jun 2014</p>
            <p className="text-neutral-600"> Credits: 010101</p>
            <p className="text-neutral-600">Messages Available: 5910</p>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default RadixDropDown;
