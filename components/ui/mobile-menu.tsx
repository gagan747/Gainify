"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu({ isAuthorized }: any) {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden"; // Stop body scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow body scrolling
    }

    // Cleanup function to reset overflow when unmounted
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is allowed when component unmounts
    };
  }, [mobileNavOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={
          mobileNavOpen
            ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className="bg-gray-800 px-4 py-2 text-gray-200 hover:text-green-600">
          <li>
            <Link
              href="/#testimonials"
              className="flex font-medium w-full py-2 justify-center"
              onClick={() => setMobileNavOpen(false)}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/#services"
              className="flex font-medium w-full  py-2 justify-center"
              onClick={() => setMobileNavOpen(false)}
            >
              Contact Us
            </Link>
          </li>{" "}
          <li>
            <Link
              href="/#services"
              className="flex font-medium w-full py-2 justify-center"
              onClick={() => setMobileNavOpen(false)}
            >
              Our Services
            </Link>
          </li>
          {isAuthorized.value ? (
            <>
              <li
                className="flex font-medium w-full  py-2 justify-center items-center"
                onClick={() => setMobileNavOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  strokeWidth={2.0}
                  stroke="currentColor"
                  className="w-7 h-8 "
                  viewBox="0 0 23 25"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span className="px-2 below220:px-2 text-center truncate">
                  {isAuthorized.details.fullName}
                </span>
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out"
                  onClick={() => {
                    setMobileNavOpen(false);
                    localStorage.removeItem("authorization");
                    window.dispatchEvent(new CustomEvent("forceRenderHeader"));
                  }}
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="/signin"
                className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out"
                onClick={() => setMobileNavOpen(false)}
              >
                Sign in
              </Link>
            </li>
          )}
        </ul>
        <div
          className="h-screen"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        ></div>
      </nav>
    </div>
  );
}
