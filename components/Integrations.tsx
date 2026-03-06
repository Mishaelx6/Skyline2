/* eslint-disable @next/next/no-img-element */
export default function Integrations() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* left icons column */}
        <div className="lg:w-1/2 flex flex-wrap justify-center lg:justify-start gap-6">
          <img src="/images/image9.png" alt="OneDrive" className="w-28 h-auto" />
          <img src="/images/image10.png" alt="Dropbox" className="w-28 h-auto" />
          <img src="/images/image11.png" alt="Google Drive" className="w-28 h-auto" />
          <img src="/images/image12.png" alt="Teams" className="w-28 h-auto" />
        </div>

        {/* right text column */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-sm text-gray-500 uppercase mb-2">Integrations</p>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            200+ educational tools and platform <span className="text-orange-500">integrations</span>
          </h3>
          <p className="text-gray-600 mb-6">
            Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.
          </p>
          <a
            href="#"
            className="inline-block rounded-full border border-orange-500 text-orange-500 px-8 py-3 hover:bg-orange-50 transition"
          >
            See All Integrations
          </a>
        </div>
      </div>
    </section>
  );
}