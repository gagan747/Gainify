"use client"; // Mark as a Client Component

import "./css/style.css";
import { Inter, Architects_Daughter } from "next/font/google";
import { Provider } from "react-redux"; // Import the Provider
import store from "../store/store"; // Adjust the import based on your structure
import Header from "@/components/ui/header";
import Banner from "@/components/banner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body
          className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
        >
          <div className="flex flex-col min-h-screen overflow-hidden bg-black font-poppins">
            <Header />
            {children}
            <Banner />
          </div>
        </body>
      </html>
    </Provider>
  );
}
