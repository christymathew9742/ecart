// "use client";

// import React from "react";
// import { useMediaQuery } from "@mui/material";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { routesList } from "./Routes";

// const StyledLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
//   <Link href={href} className="w-full h-[60px] flex items-center text-inherit">
//     <p className="md:text-sm lg:text-base font-semibold text-center cursor-pointer">{children}</p>
//   </Link>
// );

// const Header = () => {
//   const isMobile = useMediaQuery("(max-width:600px)");
//   const currentPath = usePathname();

//   return (
//     <header className="sticky top-0 z-50 shadow-md bg-white font-sans tracking-wide border-b border-gray-200">
//       <section className="flex items-center justify-between w-full px-4 py-3 lg:px-10 lg:min-h-[80px] max-lg:min-h-[60px]">
//         {/* Logo */}
//         <div className="mr-10">
//           <Link href="/">
//             <Image src="/logo.svg" alt="Company Logo" width={120} height={80} priority />
//           </Link>
//         </div>

//         {/* Navigation Links - Desktop */}
//         <nav className="hidden md:flex flex-1 space-x-6 items-center">
//           {routesList.map(({ name, to }) => (
//             <StyledLink key={name} href={to}>
//               {name}
//             </StyledLink>
//           ))}
//         </nav>

//         {/* Search - Desktop only */}
//         {!isMobile && (
//           <div className="flex items-center max-lg:w-full xl:w-96 bg-gray-100 px-6 py-3 rounded focus-within:outline focus-within:outline-[#007bff] focus-within:bg-white">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full text-sm bg-transparent outline-none pr-2"
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 192.904 192.904"
//               width="16"
//               className="cursor-pointer fill-gray-400"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
//               />
//             </svg>
//           </div>
//         )}

//         {/* Hamburger - Mobile only */}
//         {isMobile && (
//           <button id="toggleOpen" className="ml-auto">
//             <svg className="w-8 h-8" fill="#000" viewBox="0 0 20 20">
//               <path
//                 fillRule="evenodd"
//                 clipRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               />
//             </svg>
//           </button>
//         )}
//       </section>
//     </header>
//   );
// };

// export default Header;


"use client";

import React from "react";
import { useMediaQuery } from "@mui/material";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { routesList } from "./Routes";

const StyledLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const currentPath = usePathname();
  const isActive = currentPath === href;

  return (
    <Link
      href={href}
      className={`w-[30px] h-[60px] flex items-center text-inherit transition-colors duration-200 ${
        isActive
          ? "text-[#007bff]"
          : "text-gray-800 hover:text-[#007bff]"
      }`}
    >
      <p className="md:text-sm lg:text-base font-semibold text-center cursor-pointer">
        {children}
      </p>
    </Link>
  );
};

const Header = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <header className="sticky top-0 z-50 shadow-md bg-white font-sans tracking-wide border-b border-gray-200">
      <section className="flex items-center justify-between w-full px-4 py-3 lg:px-10 lg:min-h-[80px] max-lg:min-h-[60px]">
        {/* Logo */}
        <div className="mr-10">
          <Link href="/">
            <Image src="/logo.svg" alt="Company Logo" width={120} height={80} priority />
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex flex-1 space-x-6 items-center">
          {routesList.map(({ name, to }) => (
            <StyledLink key={name} href={to}>
              {name}
            </StyledLink>
          ))}
        </nav>

        {/* Search - Desktop only */}
        {!isMobile && (
          <div className="flex items-center max-lg:w-full xl:w-96 bg-gray-100 px-6 py-3 rounded focus-within:outline focus-within:outline-[#007bff] focus-within:bg-white">
            <input
              type="text"
              placeholder="Search..."
              className="w-full text-sm bg-transparent outline-none pr-2"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="16"
              className="cursor-pointer fill-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M190.707 180.101l-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
              />
            </svg>
          </div>
        )}

        {/* Hamburger - Mobile only */}
        {isMobile && (
          <button id="toggleOpen" className="ml-auto">
            <svg className="w-8 h-8" fill="#000" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              />
            </svg>
          </button>
        )}
      </section>
    </header>
  );
};

export default Header;



