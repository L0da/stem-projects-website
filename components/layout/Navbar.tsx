import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold text-blue-700 dark:text-blue-400"
        >
          STEM Projects
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link href="/" className="hover:text-black dark:hover:text-white">
            Home
          </Link>
          <Link
            href="/about-school"
            className="hover:text-black dark:hover:text-white"
          >
            About School
          </Link>
          <Link
            href="/about-stem"
            className="hover:text-black dark:hover:text-white"
          >
            About STEM
          </Link>
          <Link
            href="/projects"
            className="hover:text-black dark:hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="hover:text-black dark:hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}