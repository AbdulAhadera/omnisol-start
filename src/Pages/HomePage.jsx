import AboutSection from "../Sections/AboutSection";
import HeroSection from "../Sections/HeroSection";
import FooterSection from "../Sections/FooterSection";
import LaptopNavbar from "../Components/LaptopNavbar";
import MobileNavbar from "../Components/MobileNavbar";


function HomePage() {
    return (
        <>
            <div className="hidden md:flex">
                <LaptopNavbar />
            </div>
            <div className="flex md:hidden">
                <MobileNavbar />
            </div>
            <HeroSection />
            <AboutSection />
            <FooterSection />
        </>
    );
}

export default HomePage;