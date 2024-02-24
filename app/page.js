import DropDown from "@/components/DropDown";
import MultipleSelect from "@/components/MultipleSelect";
import SingleSelect from "@/components/SingleSelect";

export default function Home() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ];
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

      <SingleSelect options={options} />
    </main>
  );
}
