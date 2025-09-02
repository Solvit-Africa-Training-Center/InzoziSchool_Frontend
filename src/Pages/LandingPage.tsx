import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import HowItWorks from '../Components/HowItWorks';
import Navigation from '../Components/Navigation';
import ParentSection from '../Components/ParentSection';
import PowerfulFeaturesSection from '../Components/PowerfulFeaturesSection';
import ResourcesSupportSection from '../Components/ResourcesSupportSection';
import SchoolOwnerSection from '../Components/SchoolOwnerSection';
import SchoolSection from '../Components/SchoolSection';
import WhyChooseInzoziSection from '../Components/WhyChooseInzoziSection';

export default function LandingPage() {
  return (
    <div>
        <Navigation/>
        <Hero/>
        <SchoolSection/>
        <WhyChooseInzoziSection/>
        <ParentSection/>
        <PowerfulFeaturesSection/>
        <SchoolOwnerSection/>
        <HowItWorks/>
        <ResourcesSupportSection/>
        <Footer/>
    </div>
  );
}
