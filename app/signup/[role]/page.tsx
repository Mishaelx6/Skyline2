"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  params: {
    role: string;
  };
}

export default function SignupRolePage({ params }: Props) {
  // params is a promise in client components per Next.js rules; unwrap with React.use
  // React.use returns unknown so cast its result before destructuring
  const { role } = (React.use(params as any) as { role: string });
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  if (role !== "student" && role !== "instructor") {
    return <p className="p-6">Invalid role</p>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to API
    console.log("signing up", role, form);
    router.push("/");
  };

  return (
    <main className="min-h-screen flex">
      {/* left panel with gradient and decorative bubbles */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-indigo-400 text-white p-12">
        {/* bubble decorations */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-500 rounded-full opacity-40 mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-indigo-700 rounded-full opacity-30 mix-blend-multiply" />
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-indigo-400 rounded-full opacity-50 mix-blend-multiply" />
        {/* additional bubbles */}
        <div className="absolute top-1/4 right-1/6 w-24 h-24 bg-indigo-600 rounded-full opacity-35 mix-blend-multiply" />
        <div className="absolute bottom-1/3 left-1/5 w-28 h-28 bg-indigo-500 rounded-full opacity-25 mix-blend-multiply animate-pulse" />
        <div className="absolute top-2/3 left-3/4 w-20 h-20 bg-indigo-700 rounded-full opacity-20 mix-blend-multiply" />
        <div className="absolute bottom-10 right-1/3 w-36 h-36 bg-indigo-400 rounded-full opacity-45 mix-blend-multiply" />
        <h1 className="text-4xl font-bold mb-4">Hello</h1>
        <p className="text-lg max-w-xs text-center">
          Enter your personal details and stay connected with us.
        </p>
      </div>

      {/* right panel (form) with subtle bubble highlight */}
      <div className="flex-1 flex items-center justify-center p-6 relative">
        {/* small bubbles behind form */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-teal-200 rounded-full opacity-20" />
        <div className="absolute bottom-8 right-8 w-32 h-32 bg-teal-300 rounded-full opacity-15" />
        {/* extra form bubbles */}
        <div className="absolute top-0 right-24 w-20 h-20 bg-teal-100 rounded-full opacity-10" />
        <div className="absolute bottom-16 left-16 w-28 h-28 bg-teal-200 rounded-full opacity-12" />
        <div className="absolute top-12 left-1/2 w-16 h-16 bg-teal-300 rounded-full opacity-08" />
        <div className="absolute bottom-4 right-40 w-22 h-22 bg-teal-150 rounded-full opacity-18" />
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-5 bg-white p-8 rounded-lg shadow-lg relative"
        >
          <h2 className="text-2xl font-bold capitalize">{role} sign up</h2>
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full rounded border px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full rounded border px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              className="mt-1 w-full rounded border px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-teal-500 py-2 text-white hover:bg-teal-600 transition"
          >
            Create account
          </button>
        </form>
      </div>
    </main>
  );
}
