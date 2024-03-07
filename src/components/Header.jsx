import React from "react";

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img src="Logo.svg" alt="" width={80} height={60} />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-8 text-sm">
                <li>
                  <a
                    className="text-gray-700 font-medium transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Crypto Taxes{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition font-medium hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Free Tools{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-700 transition font-medium hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Resource Center{" "}
                  </a>
                </li>
                <div className="sm:flex sm:gap-4 ml-8">
                  <a
                    className="rounded-md bg-[#0000FF] px-6 py-2 text-sm font-medium text-white shadow"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
