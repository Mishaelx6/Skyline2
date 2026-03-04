export default function InfoSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* what is skilline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-gray-800">
            What is <span className="text-orange-500">Skilline?</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Skilline is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-20">
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/instructor.png"
              alt="For Instructors"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <h3 className="text-xl font-semibold">For Instructors</h3>
              <a
                href="#"
                className="mt-2 inline-block rounded-full bg-orange-500 px-6 py-2 text-sm font-medium hover:bg-orange-600 transition"
              >
                Start a class today
              </a>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/student.jpg"
              alt="For Students"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <h3 className="text-xl font-semibold">For Students</h3>
              <a
                href="#"
                className="mt-2 inline-block rounded-full bg-blue-500 px-6 py-2 text-sm font-medium hover:bg-blue-600 transition"
              >
                Enter access code
              </a>
            </div>
          </div>
        </div>

        {/* second block */}
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800">
              Everything you can do in a physical classroom, you can do with Skilline
            </h3>
            <p className="mt-4 text-gray-600">
              Skilline’s school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
            <a
              href="#"
              className="mt-6 inline-block text-orange-500 font-medium hover:underline"
            >
              Learn more
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 relative">
            <img
              src="/images/classroom.jpg"
              alt="Classroom video"
              className="w-full rounded-lg shadow-lg"
            />
            <button className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white bg-orange-500 rounded-full p-4 opacity-90 hover:opacity-100 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
