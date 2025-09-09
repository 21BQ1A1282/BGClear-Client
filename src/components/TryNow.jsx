const TryNow = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white-50 px-4 py-20">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
        Try it{" "}
        <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-transparent bg-clip-text">
          instantly
        </span>
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 mb-10 text-center max-w-xl">
        Upload your photo and get a clean, professional cutout in seconds — no
        design skills required.
      </p>

      {/* Upload Box */}
      <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center space-y-6 w-full max-w-md">
        <input type="file" id="upload2" hidden accept="image/*" />
        <label
          htmlFor="upload2"
          className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white font-semibold py-3 px-8 rounded-full text-lg cursor-pointer transition-transform hover:scale-105 hover:opacity-90 shadow-md"
        >
          Upload an Image
        </label>

        <p className="text-gray-500 text-sm text-center">
          or drag & drop a file, paste an image, or{" "}
          <a
            href="#"
            className="text-orange-500 font-medium hover:underline"
          >
            try a sample
          </a>
        </p>
      </div>
    </div>
  );
};

export default TryNow;
