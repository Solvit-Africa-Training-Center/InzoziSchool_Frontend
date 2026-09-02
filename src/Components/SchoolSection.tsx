import { useMemo } from 'react';
import { useGetAllApprovedSchoolQuery } from '../App/api/school/school';
import SchoolCard from './SchoolCard';
import type { SchoolFilters } from '../Types/SchoolFilters';

type SchoolSectionProps = {
  filters: SchoolFilters;
};

export default function SchoolSection({ filters }: SchoolSectionProps) {
  const{data , isLoading , isError , error}=useGetAllApprovedSchoolQuery();

  if (isLoading) {
  console.log('Loading...');
}

if (isError) {
  console.log('Error fetching schools', error);
}

console.log(data?.data.schools);

  const schools = useMemo(() => {
    const all = data?.data.schools ?? [];
    const keyword = filters.keyword.trim().toLowerCase();

    return all.filter((school) => {
      const matchesKeyword =
        !keyword || school.schoolName.toLowerCase().includes(keyword);
      const matchesDistrict =
        !filters.district || school.district === filters.district;
      const matchesLevel =
        !filters.level || !school.schoolLevel || school.schoolLevel === filters.level;
      const matchesType =
        !filters.type || !school.schoolType || school.schoolType === filters.type;

      return matchesKeyword && matchesDistrict && matchesLevel && matchesType;
    });
  }, [data, filters]);

  const hasActiveFilters =
    !!filters.keyword || !!filters.district || !!filters.level || !!filters.type;

  return (
    <div id="schools-section" className="bg-gradient-to-r from-[#FFFFFF] to-[#CFDCEA] py-[40px] px-[80px] max-sm:px-[20px] scroll-mt-[80px]">
      <h1 className="font-bold text-[30px] text-[#282C34] font-family-playfair">Featured Schools</h1>
      <p className="text-[#6B7280] text-[16px] py-1 mb-5 font-family-poppins">
        Discover quality education opportunities across Rwanda
      </p>

      {!isLoading && schools.length === 0 && (
        <p className="text-[#6B7280] font-family-poppins py-10 text-center">
          {hasActiveFilters
            ? 'No schools match your search. Try adjusting your filters.'
            : 'No schools are available yet.'}
        </p>
      )}

      <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
        {
          schools.map((school)=>(
          <SchoolCard
          id={school.id}
          key={school.id}
          title={school.schoolName}
          rating={4.6}
          location={school.district}
          seats={12}
          category={''}
          images={school.profilePhoto}
        />
          ))
        }


      </div>
    </div>
  );
}
