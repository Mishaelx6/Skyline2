import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="mb-8 text-4xl font-bold">Sign Up as</h1>
      <div className="flex space-x-4">
        <Link
          href="/signup/student"
          className="rounded bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
        >
          Student
        </Link>
        <Link
          href="/signup/instructor"
          className="rounded bg-green-500 px-6 py-3 text-white hover:bg-green-600"
        >
          Instructor
        </Link>
      </div>
    </main>
  );
}
