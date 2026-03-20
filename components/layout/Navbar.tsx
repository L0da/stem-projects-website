import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-700">
          STEM Projects
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/about-school">About School</Link>
          <Link href="/about-stem">About STEM</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}