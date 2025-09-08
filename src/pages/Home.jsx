import { BgRemovalSteps } from "../components/BgRemovalSteps"
import { BgSlider } from "../components/BgSlider"
import { Header } from "../components/Header"

export const Home = () => {
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-['Outfit']">
            
            {/* Hero section */}
            <Header />

            {/* Background removal steps section */}
            <BgRemovalSteps />

            {/* Background removal slider section */}
            <BgSlider />

            {/* Buy credits plan section */}

            {/* User testimonials section */}

            {/* Try now section */}
        </div>
    )
}