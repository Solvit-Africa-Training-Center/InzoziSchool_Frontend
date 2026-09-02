import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import HowItWorks from '../Components/HowItWorks';
import Navigation from '../Components/Navigation';
import ParentSection from '../Components/ParentSection';
import PowerfulFeaturesSection from '../Components/PowerfulFeaturesSection';
import ResourcesSupportSection from '../Components/ResourcesSupportSection';
import SchoolOwnerSection from '../Components/SchoolOwnerSection';
import SchoolSection from '../Components/SchoolSection';
import TrustedBySection from '../Components/TrustedBySection';
import WhyChooseInzoziSection from '../Components/WhyChooseInzoziSection';
import { useUser } from '../Hooks/useUser';
import { emptySchoolFilters } from '../Types/SchoolFilters';
import type { SchoolFilters } from '../Types/SchoolFilters';

export default function LandingPage() {
  const { user } = useUser();
  console.log(user);

  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<SchoolFilters>({
    ...emptySchoolFilters,
    keyword: searchParams.get('q') ?? '',
  });

  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null) {
      setFilters((prev) => ({ ...prev, keyword: q }));
      document.getElementById('schools-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  const scrollToSchools = () => {
    document.getElementById('schools-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navigation />
      <div className="pt-[40px]">
        <Hero filters={filters} onFilterChange={setFilters} onSearch={scrollToSchools} />
      </div>

      <SchoolSection filters={filters} />
      <WhyChooseInzoziSection />
      <ParentSection />
      <PowerfulFeaturesSection />
      <SchoolOwnerSection />
      <div id="howitWorks">
        <HowItWorks />
      </div>

      <ResourcesSupportSection />
      <TrustedBySection />
      <Footer />
    </div>
  );
}
