import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <div>
        <div className="text-4xl font-extrabold">
          Help Us Help You Find The Best Match
        </div>
        <div className="py-4 text-xl font-semibold">
          Approved by you and your pandit
        </div>
      </div>
      <Link href="/search">
        <button 
          type="button" 
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mt-4">
          Dark
        </button>
      </Link>
    </div>
  );
}
