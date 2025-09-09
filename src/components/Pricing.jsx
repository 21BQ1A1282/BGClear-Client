import { plans } from "../assets/assets.js";

function Pricing() {
  return (
    <div className="py-20 md:px-20 lg:px-20 bg-white-50">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Choose your{" "}
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
              perfect membership
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-lg">
            Select from our carefully crafted plans designed to match your
            workflow, goals, and budget.
          </p>
        </div>

        {/* Section body */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.planId}
              className={`relative pt-6 p-6 rounded-2xl shadow-md ${
                plan.isPopularChoice
                  ? "border-2 border-orange-400 bg-white"
                  : "bg-white border border-gray-200"
              } transform hover:-translate-y-2 transition-all duration-300`}
            >
              {/* Most Popular badge */}
              {plan.isPopularChoice && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 px-4 py-1 text-white text-sm font-semibold shadow-md">
                  Most Popular
                </div>
              )}

              {/* Plan Info */}
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  {plan.planName}
                </h3>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
                    ₹{plan.subscriptionFee}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="px-4 pb-8">
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center text-gray-700 font-medium">
                    {plan.includedCredits}
                  </li>
                  <li className="flex items-center text-gray-600">
                    {plan.summary}
                  </li>
                </ul>

                {/* CTA Button */}
                <button className="w-full py-3 px-6 text-center text-white font-semibold rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 shadow-lg hover:opacity-90 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                  Choose Membership
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
