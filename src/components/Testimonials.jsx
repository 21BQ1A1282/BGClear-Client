import { testimonials } from "../assets/assets.js";

const Testimonials = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 py-20">
      {/* Title section */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">
        They{" "}
        <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
          love us
        </span>
        . You will too.
      </h2>

      {/* Body section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col max-w-md mx-auto md:mx-0 justify-between rounded-2xl shadow-md hover:shadow-xl transition-all bg-white"
          >
            <div className="flex flex-col px-6 pt-8 mb-8 space-y-5">
              {/* Quote Icon */}
              <svg
                width="28"
                height="22"
                viewBox="0 0 24 18"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-orange-400"
              >
                <path d="M9.5 0H5L0 9v9h9V9H4.5L9.5 0zM24 0h-4.5L14 9v9h9V9h-5L24 0z" />
              </svg>

              {/* Quote Text */}
              <p className="text-gray-700 text-base leading-relaxed m-0 italic">
                “{testimonial.quote}”
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center space-x-3 bg-gray-50 px-6 pt-5 pb-5 rounded-b-2xl">
              <div className="flex flex-col justify-center text-left">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
