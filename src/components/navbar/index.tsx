"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [changeHeader, setChangeHeader] = useState(false);

  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onChangeHeader);
    return () => {
      window.removeEventListener("scroll", onChangeHeader);
    };
  }, []);

  const headerClassName = changeHeader
    ? "bg-gray-900 text-white font-semibold fixed z-50 top-0 left-0 w-full shadow-md transition duration-500"
    : "bg-transparent text-gray-900 font-semibold fixed z-50 top-0 left-0 w-full transition duration-500";

  return (
    <header className={headerClassName}>
      <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
        <div className="flex flex-grow">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAB-3jVWoi0uKpMGmB8EhBUvH-FJagwXqg4hC2lBv7-RB8lzZs2BvkZ3S8cTOFL8Loww&usqp=CAU"
            alt=""
            width={100}
            height={100}
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-end space-x-6">
          <p>Winston Steven Ruiz</p>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
