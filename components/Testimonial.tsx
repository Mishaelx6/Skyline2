/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

const testimonials = [
  {
    quote: "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking.",
    author: "Gloria Rose",
    source: "12 reviews at Yelp",
    rating: 5,
    image: "/images/image14.png", // placeholder file
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* text side */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-sm text-gray-500 uppercase mb-2">Testimonial</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What They Say?</h2>
          <p className="text-gray-600 mb-2">
            Skilline has got more than 100k positive ratings from our users around the world.
          </p>
          <p className="text-gray-600 mb-4">
            Some of the students and teachers were greatly helped by the Skilline.
          </p>
          <p className="text-gray-600 mb-6">Are you too? Please give your assessment</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-orange-500 text-orange-500 px-8 py-3 hover:bg-orange-50 transition"
          >
            Write your assessment
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* carousel card */}
        <div className="lg:w-1/2 relative">
          <img
            src={item.image}
            alt={item.author}
            className="w-130 rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-5/6 bg-white rounded-3xl shadow-2xl p-6">
            <p className="text-gray-700 italic">&quot;{item.quote}&quot;</p>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{item.author}</p>
                <p className="text-xs text-gray-500">{item.source}</p>
              </div>
              <div className="flex items-center">
                {[...Array(item.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.385 2.462c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.615 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* navigation arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}