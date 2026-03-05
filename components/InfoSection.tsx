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
              src="/images/student.png"
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
        <div className="md:flex md:items-center md:gap-12 relative">
          {/* decorative shapes */}
          <span className="hidden md:block absolute -top-10 -left-10 w-24 h-24 bg-orange-100 rounded-full -z-10" />
          <span className="hidden md:block absolute -bottom-10 -right-10 w-32 h-32 bg-blue-100 rounded-xl -z-10" />

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800">
              <span className="inline-block">
                <span className="relative inline-block">
                  <span className="absolute -left-2 -top-2 w-8 h-8 bg-orange-500 rounded-full animate-pulse" />
                  <span className="relative z-10">Ev</span>
                </span>
                erything
              </span>{' '}
              you can do in a physical classroom,{' '}
              <span className="text-orange-500">you can do with Skilline</span>
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
          <div className="mt-8 md:mt-0 md:w-1/2 relative overflow-visible">
          <div className="mt-12 md:mt-0 md:w-1/2 relative px-6">
  {/* Container for the video card and shapes */}
  <div className="relative inline-block w-full">
    
    {/* Decorative Blue Shape */}
    <span className="absolute -top-6 -left-6 w-32 h-32 bg-[#22d3ee] rounded-3xl -z-10" />
    
    {/* Decorative Orange Shape */}
    <span className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#fbbf24] rounded-3xl -z-10" />

    {/* Video Card Container */}
    <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl relative z-10 bg-gray-200">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/b4ba60j_4o8"
        title="Next.js 15 Tutorial"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      
      {/* Custom Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-white/90 rounded-full p-6 shadow-lg">
          <svg
            className="w-10 h-10 text-blue-500 ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>
          
          
          </div>
        </div>
      </div>
    </section>
  );
}
