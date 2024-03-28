import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col ">
      <Link href="/">Home</Link>
      <span className="font-bold">Hello World</span>
    </div>
  );
}
