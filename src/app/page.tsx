import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Link href="/blog">Blog</Link>
      <span className="font-bold">Hello World</span>
    </div>
  );
}
