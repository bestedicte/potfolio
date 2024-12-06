import React from "react";
import "./style.css";
import {Archivo_Black} from "next/font/google";

const archivoBlack = Archivo_Black({
    subsets: ["latin"],
    weight: "400",
});

const Name: React.FC = () => {
  return (
    <div>
      <h1
        className={`${archivoBlack.className} playful flex flex-col h-full align-baseline m-1`}
        aria-label="Benedicte"
      >
        <span className="block">
          {["B", "e", "n", "e", "d", "i", "c", "t", "e"].map((char, index) => (
            <span key={`first-name-${index}`} aria-hidden="true">
              {char}
            </span>
          ))}
        </span>
        <span className="block">
          {["V", "i", "k", "v", "a", "m"].map((char, index) => (
            <span key={`last-name-${index}`} aria-hidden="true">
              {char}
            </span>
          ))}
        </span>
      </h1>
    </div>
  );
};

export default Name;
