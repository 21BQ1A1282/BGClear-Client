import { BgRemovalSteps } from "../components/BgRemovalSteps"
import { BgSlider } from "../components/BgSlider"
import { Header } from "../components/Header"
import Pricing from "../components/Pricing"
import Testimonials from "../components/Testimonials"
import TryNow from "../components/TryNow"


export const Home = () => {
    return(
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-outfit">
            
            {/* Hero section */}
            <Header />

            {/* Background removal steps section */}
            <BgRemovalSteps />

            {/* Background removal slider section */}
            <BgSlider />

            {/* Buy credits plan section */}
            <Pricing />

            {/* User testimonials section */}
            <Testimonials />

            {/* Try now section */}
            <TryNow />
        </div>
    )
}