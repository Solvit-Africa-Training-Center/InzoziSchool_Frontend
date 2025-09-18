import React, { useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import Input from '../../Components/Input';
import Select from '../../Components/Select';
import { category } from '../../Types/Category';
import Button from '../../Components/Button';
import {
  useAddGalleryMutation,
  useGetAllGalleryQuery,
} from '../../App/api/gallery/Gallery';
import { useUser } from '../../Hooks/useUser';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { ErrorResponse } from '../Login';
import { useDeleteGalleryMutation } from '../../App/api/gallery/Gallery';
import GallerCard from '../../Components/cards/GalleryCard';
import { MdOutlineDomain } from 'react-icons/md';
import { MdOutlineLocalLibrary } from 'react-icons/md';
import { MdComputer } from 'react-icons/md';
import { MdSportsBasketball } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';

export default function Gallery() {

  // selection
  const selectedLibrary = 'library';
  const selectedClassRoom = 'classroom';
  const selectedSports ='sports';
  const selectedcomputerLab = 'computerLab';
  const selectedDomitory = 'dormitory';

  const [open, setOpen] = useState(false);
  const { user } = useUser();

  const [createGallery, { isError, isLoading, error }] =
    useAddGalleryMutation();
  const { data, refetch } = useGetAllGalleryQuery(user?.schoolId ?? '');
  const [deleteGallery] = useDeleteGalleryMutation();

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
  const [formData, setFormData] = useState({
    caption: '',
    category: '',
    imageUrl: null,
  });

  // errors
  const [errors, setErrors] = useState<{
    category?: string;
    caption?: string;
    imageUrl?: string;
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

  const handleButton = () => {
    setOpen(!open);
  };

  const handleCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const form = new FormData();
      form.append('caption', formData.caption);
      form.append('category', formData.category);
      if (formData.imageUrl) {
        form.append('imageUrl', formData.imageUrl); // Match backend field name
      }

      await createGallery({ data: form, schoolId: user?.schoolId ?? '' });
      setFormData({
        caption: '',
        category: '',
        imageUrl: null,
      });
      refetch();

      setOpen(false);
    } catch (error) {
      console.log('error is ', error);
    }

    console.log('sent data are', formData);
  };
  return (
    <>
      <div>
        <div className="bg-gradient-to-r  from-[#FFFFFF] to-[#CFDCEA]">
          <div className="flex justify-between pr-5 py-4">
            <h1 className="font-bold  text-[24px] text-black px-[30px] font-family-playfair">
              Facilities
            </h1>
            <button
              onClick={handleButton}
              className="border flex justify-center gap-2 items-center border-none text-[12px] bg-[#F09C00] px-3 cursor-pointer text-white rounded-sm"
            >
              {' '}
              <IoIosAdd /> <p> gallery</p>
            </button>
          </div>

          <div>
            <div className='bg-white py-[20px] my-[30px] mx-[22px] rounded-md'>
                <h1 className='text-black flex gap-2 justify-center font-bold text-[18px] text-center font-family-playfair py-2'>  <MdOutlineDomain className='pt-1 text-2xl'/> <h2>Hosteles</h2> </h1>
            <div className="grid grid-cols-3">
              {data?.data.images.filter((gallery)=>gallery.category === selectedDomitory).map((gallery) => (
                <GallerCard image={gallery.imageUrl} title={gallery.category} description={gallery.caption} onDelete={()=>DeleteImage(gallery.id)}/>
                
              ))}
            </div>
            </div>

             <div className='bg-white py-[20px] my-[30px] mx-[22px] rounded-md'>
                <h1 className='text-black font-bold text-[18px] flex justify-center gap-2 text-center font-family-playfair py-2'>  <MdOutlineLocalLibrary className='pt-1 text-2xl'/> <h2>Library</h2></h1>
                <div className="grid grid-cols-3">
               {data?.data.images.filter((gallery)=>gallery.category === selectedLibrary).map((gallery) => (
                <GallerCard image={gallery.imageUrl} title={gallery.category} description={gallery.caption} onDelete={()=>DeleteImage(gallery.id)}/>
                
              ))}
            </div>
            </div>

             <div className='bg-white py-[20px] my-[30px] mx-[22px] rounded-md'>
                <h1 className='text-black font-bold text-[18px] flex justify-center gap-2 text-center font-family-playfair py-2'>  <MdComputer className='pt-1 text-2xl'/> <h2>Computer Lab</h2></h1>
                <div className="grid grid-cols-3">
               {data?.data.images.filter((gallery)=>gallery.category===selectedcomputerLab).map((gallery) => (
                <GallerCard image={gallery.imageUrl} title={gallery.category} description={gallery.caption} onDelete={()=>DeleteImage(gallery.id)}/>
                
              ))}
            </div>
            </div>

             <div className='bg-white py-[20px] my-[30px] mx-[22px] rounded-md'>
                <h1 className='text-black font-bold text-[18px] flex justify-center gap-2 text-center font-family-playfair py-2'>  <MdSportsBasketball className='pt-1 text-2xl'/> <h2>PlayGround</h2></h1>
                <div className="grid grid-cols-3">
               {data?.data.images.filter((gallery)=>gallery.category===selectedSports).map((gallery) => (
                <GallerCard image={gallery.imageUrl} title={gallery.category} description={gallery.caption} onDelete={()=>DeleteImage(gallery.id)}/>
                
              ))}
            </div>
            </div>

             <div className='bg-white py-[20px] my-[30px] mx-[22px] rounded-md'>
                <h1 className='text-black font-bold text-[18px] flex justify-center gap-2 text-center font-family-playfair py-2'>  <SiGoogleclassroom className='pt-1 text-2xl'/> <h2>Classroom</h2></h1>
                <div className="grid grid-cols-3">
               {data?.data.images.filter((gallery)=>gallery.category===selectedClassRoom).map((gallery) => (
                <GallerCard image={gallery.imageUrl} title={gallery.category} description={gallery.caption} onDelete={()=>DeleteImage(gallery.id)}/>
                
              ))}
            </div>
            </div>
          </div>

          <div>
            {open && (
              <div className="fixed inset-0 bg-black/72 flex items-center justify-center z-50">
                <div className="relative bg-white w-[500px] rounded-md p-6">
                  {/* closing button */}
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>

                  <div className="py-[30px] text-center">
                    <h1 className="font-bold font-family-poppins text-[24px] text-black">
                      Add Facilities
                    </h1>
                  </div>

                  <form onSubmit={handleCreate} className='px-[42px]'>
                    <Select
                      options={category}
                      value={formData.category}
                      onChange={handleSelectChange('category')}
                    />
                    {errors.category && (
                      <p className="text-red-500 text-sm">{errors.category}</p>
                    )}

                    <Input
                      label="Caption"
                      placeholder="Caption"
                      value={formData.caption}
                      name="caption"
                      type="text"
                      onChange={handleChange}
                    />
                    {errors.caption && (
                      <p className="text-red-500 text-sm">{errors.caption}</p>
                    )}

                    <Input
                      label="imageUrl"
                      placeholder="imageUrl"
                      name="imageUrl"
                      type="file"
                      onChange={handleChange}
                    />
                    {errors.imageUrl && (
                      <p className="text-red-500 text-sm">{errors.imageUrl}</p>
                    )}

                    <div className="py-[20px]">
                      <Button
                        label={isLoading ? 'Adding....' : 'Add Facility'}
                        variant="loginForm"
                        type="submit"
                        disabled={isLoading}
                      />
                    </div>
                  </form>

                  {isError && (
                    <p className="text-red-500 text-[13px] font-family-poppins pt-[10px]">
                      {'status' in (error as FetchBaseQueryError)
                        ? (
                            error as FetchBaseQueryError & {
                              data: ErrorResponse;
                            }
                          ).data?.message || 'Failed to register school'
                        : 'Failed to register school'}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
