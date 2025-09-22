

import { TextInput } from '../../Components/seats/InputSeats';
import { SelectInput } from '../../Components/seats/SelectInput';
import {Levels, StudentType, MinimumGrade} from '../../Types/Seats';
import {Button} from '../../Components/seats/AddSeats';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRegisterSpotMutation } from '../../App/api/spots/spot';
import { useUser } from '../../Hooks/useUser';

export interface SeatAvailability{
  level: string;
  studentType: string;
  academicYear: string;
  yearofstudy: string;
  totalSpots: number;
  occupiedSpots?: number;
  registrationOpen?: boolean;
  waitingListCount?: number;
  combination?: string[];
  admissionConditions?: {
    minGrade?: string;
    requiredSubjects?: string[];
    examScore?: string; // e.g. "75%"
    interviewRequired?: boolean;
    documents?: string[];
    notes?: string;
}
}

  

export default function AddSeats() {
 
  const{user}=useUser();
  const[registerSpot]=useRegisterSpotMutation();
    // handle select 
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const { name, value } = event.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};


    // handle input 
const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
) => {
  const { name, value, type } = e.target;
  
  setFormData((prev) => ({
    ...prev,
    [name]: type === 'number' ? Number(value) : value, // convert numeric fields
  }));
};

    const [formData, setFormData] = useState<SeatAvailability>({
    level: '',
    studentType: '',
    academicYear: '',
    yearofstudy: '',
    totalSpots: 0,
  });



   const [errors, setErrors] = useState({
    level: '',
    studentType: '',
    academicYear: '',
    yearofstudy: '',
    totalSpots: '',
   });

  // Validation function
const validateFields = () => {
  const newErrors: Record<string, string> = {};

  if (!formData.level) {newErrors.level = 'Level is required';}
  if (!formData.studentType) {newErrors.studentType = 'Student type is required';}
  if (!formData.academicYear) {
    newErrors.academicYear = 'Enter a valid academic year (e.g. 2025/2026)';
  }
  if (!formData.yearofstudy) {newErrors.yearofstudy = 'Year of study is required';}
  if (!formData.totalSpots) {newErrors.totalSpots = 'Total spots must be greater than 0';}

  setErrors(newErrors);
  return newErrors;
};

const createSeats = async(e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const validationResult = validateFields();

  if (Object.keys(validationResult).length > 0) {
    console.log('Validation failed:', validationResult);
    return;
  }

  try {
    // Map the fields correctly
    const payload = {
      level: formData.level,
      studentType: formData.studentType,
      academicYear: formData.academicYear,
      yearofstudy: formData.yearofstudy,
      totalSpots: formData.totalSpots,
    };

    await registerSpot({ data: payload, id: user?.schoolId ?? '' }).unwrap();
    console.log('Submitted successfully:', payload);
    navigate('/schoolAdmin/seats');
  } catch (error) {
    console.log('error is', error);
  }
};




  const navigate = useNavigate();  

  const handleCancel=()=>{
    navigate('/schoolAdmin/seats');
  };



 
  return (
    <div className='px-6 py-6'>
         <div className='border border-gray-300 py-5 px-3 rounded-lg'>
            <h1 className='text-primary-color font-bold text-[22px] px-8 pb-10 font-family-playfair'>Add Available Seats</h1>

            <div>
                <form action="" onSubmit={createSeats} className='px-10'>
                    <div className='flex gap-13'>
                     <SelectInput options={Levels} label=' Level' placeholder='Select Level' name='level' value={formData.level} onChange={handleSelectChange} />
                     {errors &&(
                      <span className='text-red-600 text-[15px]'>{errors.level}</span>
                     )}
                     <SelectInput options={StudentType} label=' Student Type' placeholder='Select Student Level' onChange={handleSelectChange} name='studentType' value={formData.studentType} />
                     {errors &&(
                      <span className='text-red-600 text-[15px]'>{errors.studentType}</span>
                     )}
                    </div>
                     
                    <div className='flex gap-13 py-2'>
                      <TextInput label={'Academic Year *'} placeholder='e.g., 2025/2026' type='number' name='academicYear' onChange={handleInputChange}/>
                      {errors &&(
                      <span className='text-red-600 text-[15px]'>{errors.academicYear}</span>
                     )}
                      <TextInput label={'Year of Study *'} onChange={handleInputChange} value={formData.yearofstudy} name='yearofstudy'/>
                      {errors &&(
                      <span className='text-red-600 text-[15px]'>{errors.yearofstudy}</span>
                     )}
                    </div>

                    <div className='flex gap-13 py-2'>
                      <TextInput label={'Total Spots *'} placeholder='50' type='number' name='totalSpots' value={formData.totalSpots.toString()} onChange={handleInputChange} />
                      {errors &&(
                      <span className='text-red-600 text-[15px]'>{errors.totalSpots}</span>
                     )}
                      <TextInput label={'Occupied Spots *'} type='number' placeholder='0'/>
                    </div>

                    <div>
                      
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
                         <Button label='Cancel' variant='third' onClick={handleCancel}/>
                    </div>
                </form>
            </div>
         </div>

         
    </div>
  );
}
