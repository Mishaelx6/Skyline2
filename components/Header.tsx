import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="relative h-screen w-full text-white">
      {/* background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/image1.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* navigation */}
      <Navbar />

      {/* hero content (left aligned) */}
      <div className="flex h-full flex-col justify-center px-6 text-left lg:pl-20">
        <h1 className="max-w-2xl text-5xl font-extrabold leading-tight text-white">
          Studying Online is now much easier
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white">
          Skilline is an interesting platform that will teach you in more an interactive way
        </p>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row md:justify-start">
          <a
            href="/signup"
            className="rounded-full bg-orange-500 px-8 py-3 text-base font-semibold hover:bg-orange-600 transition"
          >
            Join for free
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full border border-white px-8 py-3 text-base hover:bg-white/20 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.752 11.168l-4.586-2.721a.75.75 0 00-1.126.66v5.441a.75.75 0 001.126.66l4.586-2.72a.75.75 0 000-1.32z"
              />
            </svg>
            Watch how it works
          </a>
        </div>
      </div>


    </header>
  );
}