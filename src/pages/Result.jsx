import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const { image, resultImage } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="mx-4 lg:mx-44 mt-16 min-h-[75vh]">
      <div className="bg-gradient-to-r from-orange-50 via-yellow-50 to-red-50 rounded-2xl px-8 py-8 shadow-xl">
        {/* Image container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left side - Original */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
              Original
            </p>
            <div className="rounded-xl overflow-hidden border border-gray-300 shadow-md bg-white">
              <img
                src={image ? URL.createObjectURL(image) : ""}
                alt="original"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Result */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">
              Background Removed
            </p>
            <div className="rounded-xl border border-gray-300 shadow-md h-full bg-white relative overflow-hidden">
              <img
                src={resultImage ? resultImage : ""}
                alt="result"
                className="w-full object-cover"
              />
              {/* Loader */}
              {!resultImage && image && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/70">
                  <div className="border-4 border-gradient-to-r from-red-500 via-orange-500 to-yellow-400 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        {resultImage && (
          <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-10">
            <button
              className="border border-gray-300 text-gray-700 font-medium py-2.5 px-6 rounded-full text-base hover:scale-105 hover:bg-gray-100 transition-all duration-300 shadow-sm"
              onClick={() => navigate("/")}
            >
              Try another image
            </button>
            <a
              href={resultImage}
              download
              className="cursor-pointer bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 py-3 px-8 text-center text-white font-semibold rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Download Image
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
