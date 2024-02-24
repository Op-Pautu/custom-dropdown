"use client";
import DropDown from "@/components/DropDown";
import MultipleSelect from "@/components/MultipleSelect";
import SingleSelect from "@/components/SingleSelect";
import { useState } from "react";

export default function Home() {
  const options1 = [
    { value: "option1", label: "OptionOptionOptionOption 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const options2 = [
    { value: "option1", label: "OptionOptionOptionOption 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const [selected, setSelected] = useState([]);
  return (
    <main className="flex flex-col items-center justify-between min-h-screen gap-16 p-24">
      {/* <DropDown
        label="test"
        organization="op org"
        id="2"
        company="Op Test Company2"
        img="/test.png"
        side="top"
        isOpen={false}
      /> */}

      {/* <SingleSelect
        options={options1}
        selectedOption={selected}
        setSelectedOption={setSelected}
      /> */}
      <MultipleSelect
        options={options2}
        selectedOptions={selected}
        setSelectedOptions={setSelected}
      />
    </main>
  );
}
