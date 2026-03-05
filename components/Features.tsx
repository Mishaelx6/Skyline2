export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* trust line and logos */}
        <p className="text-center text-sm text-gray-500 mb-4">
          Trusted by 5,000+ Companies Worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
          {["Google", "Netflix", "Airbnb", "Amazon", "Facebook", "Grab"].map((name) => (
            <div
              key={name}
              className="flex-shrink-0 h-8 px-4 bg-gray-200 flex items-center justify-center rounded-md text-xs font-medium text-gray-500 opacity-60"
            >
              {name}
            </div>
          ))}
        </div>

        {/* heading and description */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            All-In-One Cloud Software.
          </h2>
          <p className="mt-4 text-gray-600">
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </div>

        {/* feature cards */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              {/* icon placeholder */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-7V7a1 1 0 112 0v4a1 1 0 01-2 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold text-xl">
              Online Billing, Invoicing &amp; Contracts
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Simple and secure control of your organization’s financial and
              legal transactions. Send customized invoices and contracts.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 mx-auto bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M3 3a1 1 0 000 2h14a1 1 0 100-2H3zM3 7a1 1 0 000 2h14a1 1 0 100-2H3zM3 11a1 1 0 000 2h8a1 1 0 100-2H3z"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold text-xl">
              Easy Scheduling &amp; Attendance Tracking
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Schedule and reserve classrooms at one campus or multiple campuses.
              Keep detailed records of student attendance.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-16 h-16 mx-auto bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v2a4 4 0 108 0V6a4 4 0 00-4-4zM6 16a4 4 0 118 0H6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-semibold text-xl">
              Customer Tracking
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              Automate and track emails to individuals or groups. Skilline’s built-in
              system helps organize your organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
