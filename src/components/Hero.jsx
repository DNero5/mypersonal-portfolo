"use client";

import Image from "next/image";
// Use React Icons instead of remixicon-react
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div>
        <div className="flex flex-col items-center justify-center gap-3 font-light capitalize">
          <div className="relative flex items-center justify-center">
            {/* Correctly using the Next.js Image component */}
            <Image
              src="/person1.png" // Replace with the correct image file path
              alt="A descriptive text about the person" // Ensure meaningful alt text
              width={400} // Adjust width
              height={400} // Adjust height
              priority={true} // Ensures the image is optimized for loading
              className="h-auto w-[150px]"
            />
            <span className="absolute text-3xl font-semibold text-white">
              Hi
            </span>
          </div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500">
            My Name Is DNeRo
          </h1>
          <p className="text-lg tracking-wider text-gray-700">
            I like Coding 👩‍💻
          </p>
        </div>
        <div className="flex justify-center gap-x-10 mt-7 text-3xl text-yellow-600">
          {/* Social Icons */}
          <a
            href="#"
            aria-label="Instagram"
            className="0 hover:text-purple-800 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className=" hover:text-sky-700 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className=" hover:text-blue-800 transition-colors"
          >
            <FaFacebook size={24} />
          </a>
        </div>
        <a
          href="#"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
        >
          Talk To Me
        </a>
      </div>
    </div>
  );
};

export default Hero;
