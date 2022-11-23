import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';

const AddDoctor = () => {

   const { register, handleSubmit, formState: { errors } } = useForm()

   // console.log(imageHostKey);
   const navigate = useNavigate()

   const { data: specialties, isLoading } = useQuery({
      queryKey: ['specialty'],
      queryFn: async () => {
         const res = await fetch('http://localhost:5000/appointmentSpecialty');
         const data = await res.json();
         return data;
      }
   })
   const imageHostKey = process.env.REACT_APP_imgbb_key;

   const handleAddDoctor = data => {
      // console.log(data.image[0]);
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image)
      // console.log(data.image)
      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
      fetch(url, {
         method: 'POST',
         body: formData
      })
         .then(res => res.json())
         .then(imgData => {
            if (imgData.success) {
               console.log(imgData.data.url)
               const doctor = {
                  name: data.name,
                  email: data.email,
                  specialty: data.specialty,
                  image: imgData.data?.url
               }
               //save doctors info to the database
               fetch('http://localhost:5000/doctors', {
                  method: 'POST',
                  headers: {
                     'content-type': 'application/json',
                     authorization: `bearer ${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify(doctor)
               })
                  .then(res => res.json())
                  .then(result => {
                     console.log(result);
                     toast.success(`${data.name} is added successfully`)
                     navigate('/dashboard/managedoctors')
                  })
            }
         })

   }

   if (isLoading) {
      return <Loading></Loading>
   }
   return (
      <div className='w-full max-w-md p-8 space-y-3 rounded-xl   mx-auto my-12 text-black">
      <h1 className="text-2xl font-bold text-center'>
         <h1>Add A Doctor</h1>
         <form onSubmit={handleSubmit(handleAddDoctor)}>
            <div className="form-control  ">
               <label className="label"> <span className="label-text">Name</span></label>
               <input type="text" {...register("name", {
                  required: "Name is Required"
               })} className="input input-bordered w-full " />
               {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            <div className="form-control w-full ">
               <label className="label"> <span className="label-text">Email</span></label>
               <input type="email" {...register("email", {
                  required: true
               })} className="input input-bordered w-full " />
               {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>
            <div className="form-control w-full ">
               <label className="label"> <span className="label-text">Specialty</span></label>
               <select {...register('specialty')}
                  className="select  select-bordered font-bold w-full text-black">
                  {
                     specialties?.map(specialty =>
                        <option className='bg-base-300 text-black'
                           key={specialty._id}
                           value={specialty.name}
                        >{specialty.name}
                        </option>)
                  }
               </select>

            </div>
            <div className="form-control  text-black ">
               <label className="label"> <span className="label-text">Photo</span></label>
               <input type="file" {...register("image", {
                  required: "Photo is Required"
               })} className="input input-bordered w-full " />
               {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
            </div>
            <input
               type="submit"
               value="Add Doctor"
               className="block w-full p-3 text-center rounded-lg dark:text-gray-900 bg-gradient-to-r from-primary to-secondary mt-4" />
         </form >
      </div >
   );
};

export default AddDoctor;