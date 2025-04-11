import Link from "next/link";
import Image from "next/image";
import "./[locale]/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const Error = () => {
  return (
    <html>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <section className="max-w-5xl mx-auto flex flex-col md:flex-row   items-center justify-center gap-10 min-h-screen px-2 md:px-16">
            <div className=" md:w-1/2">
              <p className="text-base font-semibold text-indigo-600">Oops!</p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Something went wrong
              </h1>
              <p className="mt-6 text-base leading-7 text-gray-600">
                There was an error processing your request.
              </p>

              <div className="mt-10 flex flex-wrap gap-7 items-center gap-x-6">
                <Link
                  href="/"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
                >
                  Go back home
                </Link>
                <a href="support" className="text-sm font-semibold text-gray-900 dark:text-white border-2 py-3 px-6 rounded-lg  border-indigo-600 hover:bg-indigo-600 duration-150">
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
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Error;
