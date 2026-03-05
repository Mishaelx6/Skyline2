"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  params: {
    role: string;
  };
}

export default function LoginRolePage({ params }: Props) {
  // params arrives as a promise in client code – unwrap it
  const { role } = (React.use(params as any) as { role: string });
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  if (role !== "student" && role !== "instructor") {
    return <p className="p-6">Invalid role</p>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to API
    console.log("logging in", role, form);
    router.push("/");
  };

  return (
    <main className="min-h-screen flex">
      {/* left panel with gradient and decorative bubbles */}
      <div className="hidden lg:flex flex-1 relative overflow-hidden flex-col justify-center items-center bg-gradient-to-br from-indigo-600 to-indigo-400 text-white p-12">
        <div className="absolute top-8 right-16 w-44 h-44 bg-indigo-500 rounded-full opacity-35 mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-24 left-20 w-52 h-52 bg-indigo-700 rounded-full opacity-25 mix-blend-multiply" />
        <div className="absolute top-1/3 left-1/3 w-28 h-28 bg-indigo-400 rounded-full opacity-45 mix-blend-multiply" />
        {/* additional bubbles */}
        <div className="absolute top-20 left-10 w-30 h-30 bg-indigo-600 rounded-full opacity-30 mix-blend-multiply" />
        <div className="absolute bottom-10 right-40 w-26 h-26 bg-indigo-500 rounded-full opacity-20 mix-blend-multiply animate-pulse" />
        <div className="absolute top-2/5 right-1/4 w-22 h-22 bg-indigo-700 rounded-full opacity-40 mix-blend-multiply" />
        <div className="absolute bottom-1/2 left-1/3 w-34 h-34 bg-indigo-400 rounded-full opacity-15 mix-blend-multiply" />
        <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
        <p className="text-lg max-w-xs text-center">
          Enter your credentials to access your account.
        </p>
      </div>

      {/* right panel (form) with subtle bubble highlight */}
      <div className="flex-1 flex items-center justify-center p-6 relative">
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-teal-200 rounded-full opacity-20" />
        <div className="absolute bottom-6 left-6 w-32 h-32 bg-teal-300 rounded-full opacity-15" />
        {/* extra form bubbles */}
        <div className="absolute top-4 left-20 w-20 h-20 bg-teal-100 rounded-full opacity-10" />
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-teal-200 rounded-full opacity-12" />
        <div className="absolute top-16 right-1/3 w-18 h-18 bg-teal-300 rounded-full opacity-08" />
        <div className="absolute bottom-8 left-36 w-22 h-22 bg-teal-150 rounded-full opacity-18" />
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-5 bg-white p-8 rounded-lg shadow-lg relative"
        >
          <h2 className="text-2xl font-bold capitalize">{role} login</h2>
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
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
