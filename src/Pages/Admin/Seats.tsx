import React from 'react';
import {Button} from '../../Components/seats/AddSeats';
import { useNavigate } from 'react-router-dom';
import { SeatCapacityCard } from '../../Components/seats/CardSeats';
import { SearchInput } from '../../Components/seats/Search';
import { SelectInput } from '../../Components/seats/SelectInput';
import {Levels, StudentType} from '../../Types/Seats';

export default function Seats() {
    const navigate = useNavigate();

    const handleAddSeats =()=>{
        navigate('/schoolAdmin/addSeats');
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
            <SeatCapacityCard title='Primary' totalSeats={50} occupied={20}/>
            <SeatCapacityCard title='O-level' totalSeats={40} occupied={10}/>
            <SeatCapacityCard title='A-level' totalSeats={30} occupied={10}/>

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
    </div>
  );
}
