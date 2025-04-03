import AboutSection from "../Sections/AboutSection";
import HeroSection from "../Sections/HeroSection";
import FooterSection from "../Sections/FooterSection";
import LaptopNavbar from "../Components/LaptopNavbar";
import MobileNavbar from "../Components/MobileNavbar";
import GetStartedSection from "../Sections/GetStartedSection";
import VoiceBoxesSection from "../Sections/VoiceBoxesSection.jsx";
import IntegrationSection from "../Sections/IntegrationSection.jsx";


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
            <VoiceBoxesSection />
            <IntegrationSection />
            <GetStartedSection />  
            <FooterSection />

        </>
    );
}

export default HomePage;