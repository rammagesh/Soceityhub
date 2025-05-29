import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="max-w-container mx-auto xl:px-[0]">
        <Link href="user/">Login</Link>
      </div>
    </div>
  );
}
