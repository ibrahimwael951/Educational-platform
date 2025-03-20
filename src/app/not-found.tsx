"use client";

import Link from "next/link";
import Image from "next/image";

const Error = () => {
  return (
    <section className="container mx-auto flex items-center justify-between min-h-screen px-6 md:px-16">
    
      <div className="w-1/2 text-left">
        <p className="text-base font-semibold text-indigo-600">Oops!</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Something went wrong
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          There was an error processing your request.
        </p>

        <div className="mt-10 flex items-center gap-x-6">
          <Link
            href="/"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            Go back home
          </Link>
          <a href="#" className="text-sm font-semibold text-gray-900">
            Contact support
          </a>
        </div>
      </div>

      <div className="w-1/2 flex justify-end">
        <Image
          src="/error.png"
          alt="error image"
          width={400}
          height={400}
          className="max-w-full"
        />
      </div>
    </section>
  );
};

export default Error;
