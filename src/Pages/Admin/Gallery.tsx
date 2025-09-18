
import React, { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import Input from '../../Components/Input';
import Select from '../../Components/Select';
import {category} from '../../Types/Category';
import Button from '../../Components/Button';
import { useAddGalleryMutation, useGetAllGalleryQuery } from '../../App/api/gallery/Gallery';
import { useUser } from '../../Hooks/useUser';
import type{ FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { ErrorResponse } from '../Login';
import { useDeleteGalleryMutation } from '../../App/api/gallery/Gallery';


export default function Gallery() {
    const[open , setOpen]=useState(false);
    const{user}=useUser();

    const[createGallery , {isError , isLoading , error}]=useAddGalleryMutation();
    const {data , refetch}= useGetAllGalleryQuery(user?.schoolId ?? '');
    const[deleteGallery]=useDeleteGalleryMutation();
   
    //delete image
   const DeleteImage = async (id: string) => {
  if (!user?.schoolId) {
    return;
  }

  try {
    await deleteGallery({ id, schoolId: user.schoolId }).unwrap();
    refetch();
  } catch (err) {
    console.error('Failed to delete image:', err);
  }
};

    

    // form data
    const [formData , setFormData]= useState({
      caption:'',
      category:'',
      imageUrl:null,

    });

    // errors 
      const [errors, setErrors] = useState<{
        category?: string
        caption?: string
        imageUrl?: string
      }>({});

      const handleSelectChange = (name: string) => (value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, files } = e.target;
        if (type === 'file' && files) {
          setFormData((prev) => ({ ...prev, [name]: files[0] }));
        } else {
          setFormData((prev) => ({ ...prev, [name]: value }));
        }
        setErrors((prev) => ({ ...prev, [name]: '' }));
      };

      // validate form 

       const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!formData.caption.trim()) {
      newErrors.caption = 'please caption is needed';
    }
    if (!formData.category.trim()) {
      newErrors.category = 'please Select Category';
    }
    if (!formData.imageUrl) {
      newErrors.imageUrl = 'inser an image please';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

    const handleButton =()=>{
         setOpen(!open);
    };

    const handleCreate =async(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();

      if(!validateForm()){ return;}

      try {
         const form = new FormData();
         form.append('caption' , formData.caption);
         form.append('category' , formData.category);
         if (formData.imageUrl) {
      form.append('imageUrl', formData.imageUrl); // Match backend field name
        }

        await createGallery({data:form , schoolId:user?.schoolId ??''});
        setFormData({
        caption:'',
        category:'',
        imageUrl:null,
      });
      refetch();
      
      setOpen(false);
      } catch (error) {
        console.log('error is ', error);
      }
      
    
      console.log('sent data are' , formData);

    };
  return (
    <>
    <div>
        <div className='bg-gradient-to-r  from-[#FFFFFF] to-[#CFDCEA]'>
             <div className='flex justify-between pr-5 py-4'>
                        <h1 className='font-bold font-family-poppins text-[24px] text-black'>Gallery</h1>
                        <button onClick={handleButton} className='border flex justify-center gap-2 items-center border-none text-[12px] bg-[#F09C00] px-3 cursor-pointer text-white rounded-sm'> <IoIosAdd/> <p> gallery</p></button>
             </div>
           
             <div>
              
              <div className='grid grid-cols-3'>
               {data?.data.images.map((gallery)=>(
            
               <div className='py-[20px] px-[40px]'>
                  <div className='w-[full]'>
                     <div><img className='w-[160px] h-[160px]' src={gallery.imageUrl} alt="" /></div>
                     <h1 className='text-[15px] font-bold text-orange-400'>{gallery.category}</h1>
                     <h1 className='text-black text-[12px]'>{gallery.caption}</h1>
                      <div className='flex gap-6'>
                    <button onClick={()=>{DeleteImage(gallery.id);}} className='px-2 py-1 cursor-pointer bg-red-500 text-white border-none'>Delete</button>
                    <button className='px-2 py-1 cursor-pointer bg-green-500 text-white border-none'>Update</button>
                  </div>
                  </div>

                 
               </div>
            ))}
            </div>
              </div>

             
        </div>
    </div>
   
  <div>
  {open &&(
 <div className='bg-white w-[500px] rounded-md flex justify-center items-center absolute top-[160px] left-[400px]'>
        <div>
          <div className='py-[30px]'>
            <h1 className='font-bold font-family-poppins text-[24px] text-black'>Add To Gallery</h1>

          </div>
          
          <form onSubmit={handleCreate}>
             <Select options={category} value={formData.category} onChange={handleSelectChange('category')}/> 
             {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
             <Input label='Caption' placeholder='Caption' value={formData.caption} name='caption' type='text' onChange={handleChange}/>
             {errors.caption && <p className="text-red-500 text-sm">{errors.caption}</p>}
             <Input label='imageUrl' placeholder='imageUrl' name='imageUrl' type='file' onChange={handleChange}/>
             {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl}</p>}
             <div className='py-[20px]'>
                <Button label={isLoading?'Adding....':'Add to gallery'} variant='loginForm' type='submit' disabled={isLoading}/>
             </div>
           
          </form>
            {isError && (
                  <p className="text-red-500 text-[13px] font-family-poppins pt-[10px]">
                    {'status' in (error as FetchBaseQueryError)
                      ? (error as FetchBaseQueryError & { data: ErrorResponse }).data?.message ||
                        'Failed to register school'
                      : 'Failed to register school'}
                  </p>
                )}
        </div>
        
    </div>
 
  )}
  </div>
      </>
  );
}
