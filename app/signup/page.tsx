"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex">
      {/* site logo (visible on all screen sizes) */}
      <div className="absolute top-6 left-6 z-10">
        <Link href="/" className="text-2xl font-bold text-white">
          Skilline
        </Link>
      </div>

      {/* left panel with gradient + bubbles */}
      <div className="hidden lg:flex flex-1 h-screen relative overflow-hidden flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-indigo-400 text-white p-12">
        <div className="absolute top-12 left-16 w-40 h-40 bg-indigo-500 rounded-full opacity-35 mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-20 right-24 w-56 h-56 bg-indigo-700 rounded-full opacity-30 mix-blend-multiply" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-indigo-400 rounded-full opacity-45 mix-blend-multiply" />
        <h1 className="text-4xl font-bold mb-4">Join Us</h1>
        <p className="text-lg max-w-xs text-center">
          Choose the role that fits you and start building your skills.
        </p>
      </div>

      {/* right panel */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
        {/* bubbles around buttons */}
        <div className="absolute -top-8 -left-8 w-20 h-20 bg-teal-200 rounded-full opacity-15" />
        <div className="absolute bottom-12 right-12 w-24 h-24 bg-teal-300 rounded-full opacity-10" />
        <h1 className="mb-8 text-4xl font-bold">Sign Up as</h1>
        <div className="flex space-x-4">
          <Link
            href="/signup/student"
            className="rounded bg-orange-500 px-6 py-3 text-white hover:bg-orange-600"
          >
            Student
          </Link>
          <Link
            href="/signup/instructor"
            className="rounded bg-orange-500 px-6 py-3 text-white hover:bg-orange-600"
          >
            Instructor
          </Link>
        </div>
        <div className="mt-8">
          <button
            onClick={() => signIn('google')}
            className="rounded bg-white px-6 py-3 text-indigo-600 hover:bg-gray-100 transition"
          >
            Continue with Google
          </button>
        </div>
        <p className="mt-6 text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-orange-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}
