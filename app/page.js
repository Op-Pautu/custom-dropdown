import DropDown from "@/components/DropDown";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen gap-16 p-24">
      <DropDown
        label="test"
        organization="op org"
        id="2"
        company="Op Test Company2"
        img="/test.png"
        side="top"
        isOpen={false}
      />
    </main>
  );
}
