"use client"; // This makes the component a client component
import Link from "next/link";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block group" aria-label="Cruip">
              <img
                src={"/images/gurmanLogo.png"}
                className="group-hover:border-b-2 group-hover:border-green-600 group-hover:mb-[-1.5px]"
                style={{ width: "8rem" }}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:!block md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center below900:mt-5">
              <li>
                <Link
                  href={"/#testimonials"}
                  className=" text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href={"/#services"}
                  className=" text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href={"/#"}
                  className=" text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href={"/#services"}
                  className=" text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link
                  href={"/#services"}
                  className=" text-green-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/signin"
                  className="btn-sm text-white bg-green-600 hover:bg-green-700 ml-3"
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
