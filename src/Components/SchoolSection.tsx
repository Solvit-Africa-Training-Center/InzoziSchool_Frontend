import { useGetAllApprovedSchoolQuery } from '../App/api/school/school';
import SchoolCard from './SchoolCard';

export default function SchoolSection() {
  const{data , isLoading , isError , error}=useGetAllApprovedSchoolQuery();

  if (isLoading) {
  console.log('Loading...');
}

if (isError) {
  console.log('Error fetching schools', error);
}

console.log(data?.data.schools);

 
  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#CFDCEA] py-[40px] px-[80px] max-sm:px-[20px]">
      <h1 className="font-bold text-[30px] text-[#282C34] font-family-playfair">Featured Schools</h1>
      <p className="text-[#6B7280] text-[16px] py-1 mb-5 font-family-poppins">
        Discover quality education opportunities across Rwanda
      </p>

      <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
        {
          data?.data.schools.map((school)=>(
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
