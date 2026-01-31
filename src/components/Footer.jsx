import React from "react";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "hsla(20, 10%, 88%, 1)" }}
      className="py-14 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h3 className="text-lg font-semibold text-primary">
          Dr. Maya Reynolds, PsyD
        </h3>

        <p className="mt-2 text-gray-700">
          Santa Monica, CA · In-person & California Telehealth
        </p>

        <div className="w-24 h-[1px] bg-primary/40 mx-auto my-6"></div>

        <div className="flex justify-center gap-6 text-sm text-gray-600">
          <span className="cursor-pointer hover:text-primary transition">
            Privacy
          </span>
          <span className="cursor-pointer hover:text-primary transition">
            Terms
          </span>
          <span className="cursor-pointer hover:text-primary transition">
            Disclaimer
          </span>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          All Rights Reserved © 2024
        </p>
      </div>
    </footer>
  );
}
