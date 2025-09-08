import { steps } from "../assets/assets.js";

export const BgRemovalSteps = () => {
  return (
    <div className="text-center mb-20 pt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
        How to{" "}
        <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
          remove a background
        </span>{" "}
        in seconds?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {steps.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            <span className="inline-block bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              {item.step}
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
