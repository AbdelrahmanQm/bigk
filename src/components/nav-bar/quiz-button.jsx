import Link from "next/link";
import React from "react";

const QuizButton = () => {
  return (
    <button className="hover:scale-105 scale-100 transform transition-all duration-300">
      <Link
        href="/"
        className="bg-gradient-to-l from-red to-darkRed hover:bg-gradient-to-r hover:border-lightRed transition-all duration-300
           text-xl font-bold text-white transform  active:bg-red
         py-4 px-6 border-red border rounded-full shadow-lg"
      >
        Start Your Quiz
      </Link>
    </button>
  );
};

export default QuizButton;
