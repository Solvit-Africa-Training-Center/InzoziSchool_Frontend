
import React, { useState } from 'react';
import { TextInput } from '../../Components/seats/InputSeats';
import { ToggleSwitch } from '../../Components/seats/ToggleSwitch';
import { SelectInput } from '../../Components/seats/SelectInput';
import {Levels, StudentType, MinimumGrade} from '../../Types/Seats';
import {Button} from '../../Components/seats/AddSeats';
import { useNavigate } from 'react-router-dom';

export default function AddSeats() {
  const navigate = useNavigate();  
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);

  const handleToggleChange = (newCheckedState: boolean) => {
    
    setIsRegistrationOpen(newCheckedState);
    console.log(`Registration status updated to: ${newCheckedState ? 'OPEN' : 'CLOSED'}`);
  };

  const handleCancel=()=>{
    navigate('/schoolAdmin/seats');
  };
  return (
    <div className='px-6 py-6'>
         <div className='border border-gray-300 py-5 px-3 rounded-lg'>
            <h1 className='text-primary-color font-bold text-[22px] px-8 pb-10 font-family-playfair'>Add Available Seats</h1>

            <div>
                <form action="" className='px-10'>
                    <div className='flex gap-13'>
                     <SelectInput options={Levels} label=' Level' placeholder='Select Level' />
                     <SelectInput options={StudentType} label=' Student Level' placeholder='Select Student Level' />
                    </div>
                    <div className='flex gap-13 py-2'>
                      <TextInput label={'Academic Year *'} placeholder='e.g., 2025/2026' type='date'/>
                      <TextInput label={'Year of Study *'}/>
                    </div>

                    <div className='flex gap-13 py-2'>
                      <TextInput label={'Total Spots *'} placeholder='50' type='number'/>
                      <TextInput label={'Occupied Spots *'} type='number' placeholder='0'/>
                    </div>

                    <div>
                      <ToggleSwitch
                         label="Registration Open" 
                         name="registrationStatus" 
                         checked={isRegistrationOpen} 
                         onChange={handleToggleChange} 
                        />
                    </div>
                    
                    <h1 className='text-black py-12 font-semibold text-[18px] pb-4 font-family-playfair'>Admission Condition</h1>
                        
                    <div className='flex gap-13 py-2'>
                      <SelectInput options={MinimumGrade} label=' minimum grade' placeholder='Select Level' />
                      <TextInput label={'Exam Score *'} type='number' placeholder='e.g.,,75%'/>
                    </div>

                    <div className='flex gap-13 py-2'>
                      <TextInput label={' Required Documents'} type='text' placeholder='transcript and letter'/>
                    </div>

                     <div className='flex gap-13 py-2'>
                      <TextInput label={' Additional Notes'} type='text' placeholder='other unique condition for specific school year'/>
                    </div>

                    <div className='flex justify-between py-2'>
                        <Button label='Add Seat Availability' type='submit' variant='secondary'/>
                         <Button label='Cancel' type='submit' variant='third' onClick={handleCancel}/>
                    </div>
                </form>
            </div>
         </div>

         
    </div>
  );
}
