import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-6 py-12">
      <div className="flex items-center pt-8">
        <div className="grid gap-1 flex-grow">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAB-3jVWoi0uKpMGmB8EhBUvH-FJagwXqg4hC2lBv7-RB8lzZs2BvkZ3S8cTOFL8Loww&usqp=CAU"
            alt=""
            width={100}
            height={100}
            loading="lazy"
          />
          <span className="poppins text-gray-500">
            Developed by 🔥 Winston steven Ruiz
          </span>
        </div>

        <div className="flex justify-end items-center space-x-6">
          <span className="poppins text-white cursor-pointer">
            Privacy Policy
          </span>
          <span className="poppins text-white cursor-pointer">
            Terms of Use
          </span>
          <span className="poppins text-white cursor-pointer">Pricing</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
