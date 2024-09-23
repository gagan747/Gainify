"use client"; // This makes the component a client component
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Header() {
  const [isAuthorized, setIsAuthorized] = useState({
    value: false,
    details: {},
  });
  const dispatch = useDispatch(); // Initialize useDispatch
  const [forceRender, setForceRender] = useState(false);

  useEffect(() => {
    async function getDetails() {
      try {
        dispatch({ type: "SHOW_LOADER" }); // Show the loader
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/details`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("authorization")}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setIsAuthorized({
            value: true,
            details: data.userDetails,
          });
        } else {
          setIsAuthorized({
            value: false,
            details: {},
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        dispatch({ type: "HIDE_LOADER" }); // Hide the loader
      }
    }
    getDetails();
  }, [forceRender]);

  useEffect(() => {
    document.title = "Gainify";
    const forceRenderComponent = () => {
      setForceRender((forceRender) => !forceRender);
    };
    window.addEventListener("forceRenderHeader", forceRenderComponent);

    return () => {
      window.removeEventListener("forceRenderHeader", forceRenderComponent);
    };
  }, []);

  return (
    <header
      className="fixed w-full bg-[#060d15] text-white" // Updated background color
      style={{ zIndex: 999, fontFamily: "'Inter', sans-serif" }} // Apply the Inter font here
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" aria-label="Gainify">
              <img
                src={"/images/logo-nobg.png"}
                style={{ width: "13rem" }}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex md:space-x-6">
            <Link href={"/track-record"} className="hover:text-gray-400">
              Track Record
            </Link>
            <Link href={"/about-us"} className="hover:text-gray-400">
              About Us
            </Link>
            <Link href={"/our-services"} className="hover:text-gray-400">
              Our Services
            </Link>
            <Link href={"/contact-us"} className="hover:text-gray-400">
              Contact Us
            </Link>
            <Link href={"/dashboard"} className="hover:text-gray-400">
              Dashboard
            </Link>
          </nav>

          {/* Action Button */}
          <div className="hidden md:block">
            {!isAuthorized.value && (
              <Link
                href="/signin"
                className="px-4 py-2 rounded-md border border-gray-600 bg-transparent text-white hover:bg-gray-700 flex items-center transition duration-150 ease-in-out"
              >
                Sign in
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </Link>
            )}
          </div>

          {/* Mobile Menu */}
          <MobileMenu isAuthorized={isAuthorized} />
        </div>
      </div>
    </header>
  );
}
