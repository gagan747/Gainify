"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function SignUp() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const dispatch = useDispatch(); // Initialize useDispatch
  const [success, setIsSuccess] = useState(null);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      dispatch({ type: "SHOW_LOADER" }); // Show the loader
      const formData = new FormData(event.target); // Create a FormData object

      // Extract form values
      const email = formData.get("email");
      const password = formData.get("password");
      const fullName = formData.get("fullName");

      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, fullName }),
      });

      const data = await response.json();

      if (response.ok) {
        setError(null);
        setIsSuccess(data.message);
        data.token && localStorage.setItem("authorization", data?.token);
        window.dispatchEvent(new CustomEvent("forceRenderHeader"));
        router.push("/");
      } else {
        setIsSuccess(null);
        setError(data.message || "Signup failed");
      }
    } catch (err) {
      //@ts-ignore
      setError(`Something went wrong: ${err?.toString()}`);
    } finally {
      dispatch({ type: "HIDE_LOADER" }); // Show the loader
    }
  };
  useEffect(() => {
    let isSuccess: any, isError: any;

    if (success) {
      isSuccess = setTimeout(() => {
        setIsSuccess(null);
      }, 4000);
    }

    if (error) {
      isError = setTimeout(() => {
        setError(null);
      }, 4000);
    }

    return () => {
      // Clear the timeouts on component unmount or when dependencies change
      if (isSuccess) clearTimeout(isSuccess);
      if (isError) clearTimeout(isError);
    };
  }, [success, error]);

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">
              Welcome. We exist to make entrepreneurship easier.
            </h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                    <svg
                      className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span
                      className="h-6 flex items-center border-r border-white border-opacity-25 mr-4"
                      aria-hidden="true"
                    ></span>
                    <span className="flex-auto pl-16 pr-8 -ml-16">
                      Sign up with Google
                    </span>
                  </button>
                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div
                className="border-t border-gray-700 border-dotted grow mr-3"
                aria-hidden="true"
              ></div>
              <div className="text-gray-400">Or, register with your email</div>
              <div
                className="border-t border-gray-700 border-dotted grow ml-3"
                aria-hidden="true"
              ></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="full-name"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    name="fullName"
                    className="form-input w-full text-gray-300"
                    placeholder="First and last name"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Your Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-input w-full text-gray-300"
                    placeholder="you@yourcompany.com"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="password"
                  >
                    Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-input w-full text-gray-300"
                    placeholder="Password (at least 10 characters)"
                    required
                  />
                </div>
              </div>
              <div
                className={`${
                  error ? "text-red-500" : "text-green-700"
                } text-center my-3 h-11`}
              >
                {error || success}
              </div>
              <div className="text-sm text-gray-500 text-center">
                I agree to be contracted by Gainify about this offer as per the
                Gainify Policies{" "}
                <Link
                  href="#"
                  className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </Link>
                .
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    className="btn text-white bg-green-600 hover:bg-green-700 w-full"
                    type="submit"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              Already using Open PRO?{" "}
              <Link
                href="/signin"
                className="text-green-600 hover:text-gray-200 transition duration-150 ease-in-out"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
