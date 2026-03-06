import Link from "next/link";

export default function LoginPage() {
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
        <div className="absolute top-10 right-20 w-44 h-44 bg-indigo-500 rounded-full opacity-35 mix-blend-multiply animate-pulse" />
        <div className="absolute bottom-24 left-16 w-52 h-52 bg-indigo-700 rounded-full opacity-25 mix-blend-multiply" />
        <div className="absolute top-1/4 left-1/3 w-28 h-28 bg-indigo-400 rounded-full opacity-45 mix-blend-multiply" />
        <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
        <p className="text-lg max-w-xs text-center">
          Select your role and sign in to continue.
        </p>
      </div>

      {/* right panel */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative">
        {/* bubbles around buttons */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-orange-200 rounded-full opacity-15" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-300 rounded-full opacity-10" />
        <h1 className="mb-8 text-4xl font-bold">Login as</h1>
        <div className="flex space-x-4">
          <Link
            href="/login/student"
            className="rounded bg-orange-500 px-6 py-3 text-white hover:bg-orange-600"
          >
            Student
          </Link>
          <Link
            href="/login/instructor"
            className="rounded bg-orange-500 px-6 py-3 text-white hover:bg-orange-600"
          >
            Instructor
          </Link>
        </div>
        <p className="mt-6 text-sm">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-orange-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
