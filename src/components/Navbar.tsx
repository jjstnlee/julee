import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-20 px-21 py-5">
      <div className="flex items-center justify-between text-3xl font-bold">
        <Link href="/">
          <h1 className="text-5xl font-extrabold">ㅈ ㅅ</h1>
        </Link>
        <div className="flex gap-17">
          <Link href="/">home</Link>
          <Link href="/lucy">lucy</Link>
        </div>
      </div>
    </nav>
  );
}
