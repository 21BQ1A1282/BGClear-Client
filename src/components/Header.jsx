import { assets } from "../assets/assets.js";

export const Header = () => {

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Left side: video banner */}
            <div className="order-2 md:order-1 flex justify-center">
                <div className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden">
                    <video 
                        src={assets.video_banner} 
                        autoPlay 
                        loop 
                        muted 
                        className="w-full max-w-[400px] h-auto object-cover"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Right side: Text content */}
            <div className="order-1 md:order-2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Remove{" "}<span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-transparent bg-clip-text">backgrounds instantly.</span>
                </h1>
                
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Easily remove unwanted backgrounds from your photos in just a few seconds.
                    Create clean, professional images that are perfect for profiles, products, and presentations.
                    No complex tools or editing skills required — simply upload and let the magic happen.
                </p>
                
                <div>
                    <input 
                        type="file" 
                        accept="image/*" 
                        id="upload1" 
                        hidden 
                    />
                    <label htmlFor="upload1" className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 text-white font-medium px-8 py-4 rounded-full cursor-pointer transition-transform hover:scale-105 hover:opacity-90 text-lg shadow-lg">
                        Upload your image
                    </label>
                </div>
            </div>


        </div>
    )
}