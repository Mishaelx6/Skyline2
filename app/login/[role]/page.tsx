"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
  params: {
    role: string;
  };
}

export default function LoginRolePage({ params }: Props) {
  const { role } = React.use(params);
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
    <main className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 bg-white p-8 rounded shadow"
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
          className="w-full rounded bg-orange-500 py-2 text-white hover:bg-orange-600"
        >
          Sign in
        </button>
      </form>
    </main>
  );
}
