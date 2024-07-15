// components/Pic.tsx
import React from "react";
import Image from "next/image";

function Pic () {
  return (
    <div className="flex justify-center md:w-1/2">
      <Image
        src="/adobewalipic.png" // Ensure this path is correct
        alt="Zohaib Ismail"
        width={384} // Adjust width and height as needed
        height={384} // Adjust width and height as needed
        className="rounded-full"
      />
    </div>
  );
};

export default Pic;
