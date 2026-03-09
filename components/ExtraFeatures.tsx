/* eslint-disable @next/next/no-img-element */
export default function ExtraFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Features
          </h2>
          <p className="mt-2 text-gray-600">
            This very extraordinary feature can make learning activities more efficient.
          </p>
        </div>

        {/* feature row 1: UI designed for classroom */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-20">
          <div className="lg:w-1/2 relative">
            <img
              src="/images/image3.PNG"
              alt="User interface designed for the classroom"
              className="w-full max-w-sm lg:max-w-none rounded-lg shadow-2xl"
            />
            <span className="absolute -top-8 right-0 w-24 h-24 bg-blue-200 rounded-full -z-10" />
            <span className="absolute -bottom-8 left-0 w-20 h-20 bg-green-200 rounded-full -z-10" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800">
              A <span className="text-orange-500">user interface</span> designed for the classroom
            </h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mt-1" />
                Teachers don’t get lost in the grid view and have a dedicated podium space.
              </li>
              <li className="flex items-start gap-2">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mt-1" />
                AVs and presenters can be moved to the front of the class.
              </li>
              <li className="flex items-start gap-2">
                <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mt-1" />
                Teachers can easily see all students and close data at one time.
              </li>
            </ul>
          </div>
        </div>

        {/* feature row 2: Tools for Teachers and Learners */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-gray-800">
              <span className="text-orange-500">Tools</span> For Teachers And Learners
            </h3>
            <p className="mt-4 text-gray-600">
              Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <img
              src="/images/image5.PNG"
              alt="Tools for teachers and learners"
              className="w-full max-w-sm lg:max-w-none rounded-lg shadow-2xl"
            />
            <span className="absolute -top-6 -right-6 w-20 h-20 bg-purple-200 rounded-full -z-10" />
          </div>
        </div>

        {/* feature row 3: Assessments, Quizzes, Tests */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-20">
          <div className="lg:w-1/2 relative">
            <img
              src="/images/image6.PNG"
              alt="Assessments, Quizzes, Tests"
              className="w-full max-w-sm lg:max-w-none rounded-lg shadow-2xl"
            />
            <span className="absolute -bottom-6 left-0 w-20 h-20 bg-yellow-200 rounded-full -z-10" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800">
              Assessments, <span className="text-orange-500">Quizzes, Tests</span>
            </h3>
            <p className="mt-4 text-gray-600">
              Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
            </p>
          </div>
        </div>

        {/* feature row 4: Class Management Tools */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-gray-800">
              Class Management <span className="text-orange-500">Tools</span> for Educators
            </h3>
            <p className="mt-4 text-gray-600">
              Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the gradebook, teachers can review and grade tests and quizes in real-time.
            </p>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <img
              src="/images/image7.PNG"
              alt="Class management tools"
              className="w-full max-w-sm lg:max-w-none rounded-lg shadow-2xl"
            />
            <span className="absolute -top-6 -left-6 w-20 h-20 bg-green-200 rounded-full -z-10" />
          </div>
        </div>

        {/* feature row 5: One-on-One Discussions */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 relative">
            <img
              src="/images/image8.PNG"
              alt="One-on-One Discussions"
              className="w-full max-w-sm lg:max-w-none rounded-lg shadow-2xl"
            />
            <span className="absolute -bottom-6 right-0 w-20 h-20 bg-blue-200 rounded-full -z-10" />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800">
              One-on-One <span className="text-orange-500">Discussions</span>
            </h3>
            <p className="mt-4 text-gray-600">
              Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block rounded-full border border-orange-500 text-orange-500 px-8 py-3 hover:bg-orange-50 transition"
          >
            See more features
          </a>
        </div>
      </div>
    </section>
  );
}