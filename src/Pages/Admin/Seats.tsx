import{ useState } from 'react';
import {Button} from '../../Components/seats/AddSeats';
import { useNavigate } from 'react-router-dom';
import { SeatCapacityCard } from '../../Components/seats/CardSeats';
import { SearchInput } from '../../Components/seats/Search';
import { SelectInput } from '../../Components/seats/SelectInput';
import {Levels, StudentType} from '../../Types/Seats';
import { useDeleteSpotMutation, useGetAllSpotsQuery } from '../../App/api/spots/spot';
import { useUser } from '../../Hooks/useUser';
import { skipToken } from '@reduxjs/toolkit/query';
import { ConfirmDialog } from '../../Components/seats/Confirm';

export default function Seats() {
    const{user}=useUser();
    const{data , refetch}=useGetAllSpotsQuery(user?.schoolId ?? skipToken);

  //  console.log(data);
    const navigate = useNavigate();

  const [deleteId, setDeleteId] = useState<string | null>(null); // 👈 track which id to delete
  const [deleteSpot] = useDeleteSpotMutation();

    const handleAddSeats =()=>{
        navigate('/schoolAdmin/addSeats');
    };

    const handleDelete=(id:string)=>{
         setDeleteId(id);
    };

      const confirmDelete = async () => {
    if (deleteId) {
      try {
        await deleteSpot({schoolId:user?.schoolId ?? '' , spotId:deleteId}).unwrap();
      //  console.log('Deleted:', deleteId);
        refetch();
      } catch (error) {
        return error;
       // console.error('Delete failed', error);
      } finally {
        setDeleteId(null); // close modal
      }
    }
  };
    
  return (
    <div>
        <div className='flex  items-center gap-[35%]'>
            <div className=' px-[30px] py-5'>
                <h1 className='text-black text-2xl font-family-playfair font-bold py-1'>Available Seats</h1>
                <p className='text-[14px] text-gray-400 font-family-poppins '>Manage seat availability across all education levels</p>
            </div>

            <div>
                <Button label={'Add Available Seats'} onClick={handleAddSeats} />
            </div>
        </div>
<div className='grid grid-cols-3 gap-7 px-5 py-10'>
  {data?.data.spots.length? (
    data.data.spots.map((seat) => (
      <SeatCapacityCard
        key={seat.level}
        title={seat.yearofstudy}
        totalSeats={Number(seat.totalSpots)}
        occupied={seat.occupiedSpots ?? 0}
        onDelete={()=>handleDelete(seat.id)}
      />
    ))
  ) : (
    <p>No seats available</p>
  )}
</div>



        <div className='border border-gray-200 rounded-lg px-5 py-5 mx-5 '>

            <div className=''>
               <h1 className='text-black text-xl font-family-playfair font-bold py-1'>Seat Availability Records</h1>

               <div className='py-3 flex justify-between'>
                 <div>
                    <SearchInput/>
                 </div>
                 <div className='flex gap-3'>
                    <SelectInput options={Levels}/>
                    <SelectInput options={StudentType}/>
                 </div>
               </div>
            </div>

        </div>
        
      {/* Confirmation Popup */}
      <ConfirmDialog
        isOpen={!!deleteId}
        title="Delete Sport Level?"
        message="Are you sure you want to delete this sport level? Click OK to delete it permanently."
        onConfirm={confirmDelete}
        onCancel={() => setDeleteId(null)}
      />
    </div>
  );
}
