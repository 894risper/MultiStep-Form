import React, { useEffect } from 'react'
import {useForm} from "react-hook-form"
import { Input } from '../ui/inputs';
const ContactForm = () => {
  const {register,handleSubmit,formState,reset}= useForm();
   
  //the effect is resetting form values whenever the reset function changes
  useEffect(()=>{
    reset({fullname:"",email:"",phoneNumber:""})
   },[reset]);
const handleFormSubmit=()=>{
  reset()
}


  return (
    <div className='border border-gray-100  w-full'>

<div>
  <h1>Contact Information</h1>
  <p>Step 1/4</p>
<form onSubmit={handleSubmit(handleFormSubmit)}>
  <div>
    <label htmlFor="fullname">FullName
      <Input
      type="text"
      placeholder='Fullname'
{...register("fullname",{
  required:"your full name is required",
  pattern:{
    value:/^[a-zA-Z]+$/,
    message:"fullname should only contain letters"
  }
})}

      />
      {formState.errors.fullname &&(
  <p>
    {formState.errors.fullname.message}
  </p>
)}
    </label>
  </div>
</form>

</div>

    </div>
  )
}

export default ContactForm