import React from 'react';
//import SchoolFacilities from '../Components/cards/SchoolFacilities';
import Navigation from '../Components/Navigation';
import { useParams } from 'react-router-dom';
import { useGetProfileQuery, useGetSchoolDetailsQuery } from '../App/api/school/school';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetAllSpotsQuery } from '../App/api/spots/spot';
import SeatCard from '../Components/seats/InfoSeatsCard';
import { useGetAllGalleryQuery } from '../App/api/gallery/Gallery';
import GallerCard from '../Components/cards/GalleryCard';

const SchoolInfoPage: React.FC = () => {
  const {id}=useParams();
  const {data}=useGetProfileQuery(id??skipToken);
  const{data:informations}=useGetSchoolDetailsQuery(id??skipToken);
  const {data:spots}=useGetAllSpotsQuery(id??skipToken);
   const { data:gallery } = useGetAllGalleryQuery(id ?? skipToken);

  console.log(spots?.data.spots);
  //console.log(id);


 

  return (
    <>
    <Navigation/>
    <div className="min-h-screen pt-[60px]  ">
      {
        data?.data.profiles.map((profiles)=>(
          <div key={profiles.id}>
            <div 
  className="relative  h-[400px] bg-cover bg-center " 
  style={{ backgroundImage: `url(${profiles.profilePhoto})` }}
>

  {/* Blue overlay */}
  <div className="absolute inset-0 bg-blue-400 opacity-30"></div>

  {/* Content */}
  <div className="absolute flex bottom-7 left-0 right-0 items-center justify-center gap-5">
    <div className="w-1/3 bg-gradient-to-r from-[#F09C00] via-[#FFB833] to-[#F09C00] py-2">
      <h1 className="text-primary-color text-2xl font-bold text-center">
        {informations?.data.schoolName}
      </h1>
    </div>
    
    <div>
      <button className="bg-white text-primary-color px-4 py-2 rounded text-sm font-medium transition-colors duration-200 cursor-pointer">
        Apply For a Child
      </button>
    </div>
  </div>
</div>


          </div>
        ))
      }

      <div className="p-6">
        <div className="mx-6">
          <div className="bg-white rounded-lg p-6">
            
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold font-family-playfair text-primary-color">School Information</h2>
              {/* <span className="bg-[#F4A30D] text-black px-4 py-1 rounded-sm text-sm font-medium">
                Available Seats: 262
              </span> */}
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-black mb-4">Location</h3>
              <div className="grid grid-cols-4 gap-8 bg-gradient-to-r  from-[#FFFFFF] to-[#CFDCEA] rounded-lg py-7">
                <div>
                  <div className="text-sm font-medium text-[#F4A30D] mb-1">District</div>
                  <div className="font-semibold text-black">{informations?.data.district}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#F4A30D] mb-1">Sector</div>
                  <div className="font-semibold text-black">{informations?.data.sector}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#F4A30D] mb-1">Cell</div>
                  <div className="font-semibold text-black">{informations?.data.cell}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#F4A30D] mb-1">Village</div>
                  <div className="font-semibold text-black">{informations?.data.village}</div>
                </div>
              </div>
            </div>
   {
    data?.data.profiles.map((profiles)=>(
      <div className="mb-6">
              <h3 className="text-lg text-black font-bold mb-3">Mission</h3>
              <p className="text-primary-color leading-relaxed py-3">
               {profiles.mission}
              </p>
            </div>
    ))
   }
           

            <div>
              <h3 className="text-lg font-semibold text-[#282C34] mb-6">Available Seats</h3>
              
              <div className="grid grid-cols-3 gap-4">
               {
                spots?.data.spots.map((spot)=>(
                  <SeatCard level={spot.level} totalSeats={Number(spot.totalSpots)} occupiedSeats={Number(spot.occupiedSpots)}/>
                ))
               }
              </div>
            </div>
          {/* school facilities */}

          <div>
            <h1 className='text-primary-color text-[16px] font-family-playfair py-3.5 text-center'>Our Facilities</h1>

            <div className='grid grid-cols-4 gap-7'>
              {gallery?.data.images.map((gallery)=>(
                <GallerCard image={gallery.imageUrl} title={gallery.category} description={gallery.caption}/>
              ))}
               
            </div>
          </div>
           
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SchoolInfoPage;