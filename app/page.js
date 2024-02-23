import DropDown from "@/components/DropDown";
import RadixDropDown from "@/components/RadixDropDown";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <DropDown
        id="1"
        company="Op Test Company"
        img="/empty.png"
        isOpen={false}
      />
      {/* <DropDown
        label="test"
        organization="op org"
        id="2"
        company="Op Test Company2"
        img="/test.png"
        isOpen={false}
      /> */}
      {/* <RadixDropDown /> */}
    </main>
  );
}
