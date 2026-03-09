"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOutButton({ redirectTo = "/login" }: { redirectTo?: string }) {
  const router = useRouter();
  const handle = async () => {
    await signOut({ redirect: false });
    router.push(redirectTo);
  };
  return (
    <button
      onClick={handle}
      className="block rounded px-3 py-2 hover:bg-indigo-500"
    >
      Log out
    </button>
  );
}
