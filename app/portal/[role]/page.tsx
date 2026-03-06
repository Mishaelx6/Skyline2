import Link from "next/link";

interface Props {
  params: {
    role: string;
  };
}

export default async function PortalPage({ params }: Props) {
  // params comes in as a promise in some Next.js versions/environments
  const { role } = await params;
  const isStudent = role === "student";
  const isInstructor = role === "instructor";

  if (!isStudent && !isInstructor) {
    return <p className="p-6">Invalid portal</p>;
  }

  return (
    <main className="min-h-screen flex bg-gray-50">
      {/* sidebar with navigation and role info */}
      <aside className="w-64 bg-indigo-600 text-white hidden lg:block">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 capitalize">
            {isStudent ? "Student" : "Instructor"} Dashboard
          </h2>
          <nav className="space-y-2">
            {isStudent && (
              <>
                <a href="#courses" className="block rounded px-3 py-2 hover:bg-indigo-500">
                  My Courses
                </a>
                <a href="#progress" className="block rounded px-3 py-2 hover:bg-indigo-500">
                  Progress
                </a>
                <a href="#settings" className="block rounded px-3 py-2 hover:bg-indigo-500">
                  Settings
                </a>
              </>
            )}
            {isInstructor && (
              <>
                <a href="#classes" className="block rounded px-3 py-2 hover:bg-indigo-500">
                  Classes
                </a>
                <a href="#create" className="block rounded px-3 py-2 hover:bg-indigo-500">
                  Create Course
                </a>
                <a href="#reports" className="block rounded px-3 py-2 hover:bg-indigo-500">
                  Reports
                </a>
              </>
            )}
            {/* logout link always present at bottom of sidebar */}
            <div className="mt-6 pt-4 border-t border-indigo-500">
              <Link
                href="/login"
                className="block rounded px-3 py-2 hover:bg-indigo-500"
              >
                Log out
              </Link>
            </div>
          </nav>
        </div>
      </aside>

      {/* main dashboard area */}
      <section className="flex-1 p-8">
        <h1 className="text-3xl font-semibold mb-6 capitalize">
          Welcome, {isStudent ? "Learner" : "Instructor"}!
        </h1>
        <div className="space-y-8">
          {isStudent && (
            <>
              <div id="courses" className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-2">Your Courses</h2>
                <p className="text-gray-600">You haven’t enrolled in any courses yet.</p>
              </div>
              <div id="progress" className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-2">Progress Overview</h2>
                <p className="text-gray-600">Track your learning over time.</p>
              </div>
            </>
          )}

          {isInstructor && (
            <>
              <div id="classes" className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-2">Your Classes</h2>
                <p className="text-gray-600">You have not created any classes yet.</p>
              </div>
              <div id="reports" className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-2">Student Reports</h2>
                <p className="text-gray-600">View student progress and analytics here.</p>
              </div>
            </>
          )}
        </div>
        <div className="mt-12">
          <Link href="/login" className="rounded bg-orange-500 px-6 py-3 text-white hover:bg-orange-600 transition">
            Log out
          </Link>
        </div>
      </section>
    </main>
  );
}
