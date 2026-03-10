"use client";

import { signIn } from "next-auth/react";

interface GoogleSignInButtonProps {
  callbackUrl?: string;
  label?: string;
}

export default function GoogleSignInButton({ callbackUrl, label = "Continue with Google" }: GoogleSignInButtonProps) {
  return (
    <button
      type="button"
      onClick={() => signIn("google", callbackUrl ? { callbackUrl } : undefined)}
      className="flex w-full items-center justify-center gap-2 rounded border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
    >
      <span className="h-5 w-5">
        <svg viewBox="0 0 533.5 544.3" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M533.5 278.4c0-18.5-1.5-37-4.6-54.7H272v103.6h146.9c-6.3 34-25 62.9-53.6 82.1v68.1h86.7c50.7-46.6 81.5-115.7 81.5-199.1z"
            fill="#4285F4"
          />
          <path
            d="M272 544.3c72.8 0 133.9-24.1 178.5-65.5l-86.7-68.1c-24.1 16.2-55 25.7-91.8 25.7-70.6 0-130.4-47.6-151.8-111.4H30.2v69.8c44.6 88.5 137.3 149.5 241.8 149.5z"
            fill="#34A853"
          />
          <path
            d="M120.2 323.9c-10.8-32.4-10.8-67.4 0-99.8V154.2H30.2c-42.5 83.8-42.5 183.6 0 267.4l90-69.7z"
            fill="#FBBC05"
          />
          <path
            d="M272 107.7c38.9 0 74 13.4 101.6 39.6l76.1-76.1C405.8 24.3 344.7 0 272 0 167.6 0 74.9 61 30.2 154.2l90 69.8C141.6 155.3 201.4 107.7 272 107.7z"
            fill="#EA4335"
          />
        </svg>
      </span>
      {label}
    </button>
  );
}
