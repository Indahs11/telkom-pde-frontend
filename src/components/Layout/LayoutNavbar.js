// dashboard => utk dasar template biar tampilannya sama semua / layout aja di bagian page content

import React from "react";
import { Link } from "react-router-dom";

export default function LayoutNavbar({ children }) {
  const sidebarContent = [
    {
      label: "Beranda",
      target: "/beranda",
    },
    {
      label: "Berita",
      target: "/blog",
    },
    {
      label: "Kontak",
      target: "/kontak",
    },
    {
      label: "Tentang",
      target: "/tentang",
    },
  ];

  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-100">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <div class="flex items-center">
          <img src="/docs/images/logo.svg" class="mr-3 h-6 sm:h-10" alt="SMK TKJ"></img>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">Platform SMK TKJ</span>
        </div>

        {/*   TOGGLE  */}
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          </svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        {/*  END TOGGLE  */}

        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium bg-red-200">
            {/* NAV-LINK */}
            {sidebarContent.map(({ target, label }, i) => (
              <li>
                <Link to={target} className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-gray-500 md:p-0 dark:text-white bg-green-200" aria-current="page">
                  {label}
                </Link>
              </li>
            ))}

            <Link to="/login" className="">
              <button type="button" className="btn-warning">
                Login
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
