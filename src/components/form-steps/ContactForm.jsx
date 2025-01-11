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
    <div className='border border-gray-100  w-full margin rounded-lg h-full'>

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
    value:/^[a-zA-Z ]+$/,
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
  <div>
    <label htmlFor="email">Email
<Input type="text"
placeholder='Email'
{...register("email",{
  required:"your email is required",
  pattern:{
    value:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    message:"please enter a valid email"
  }
})}
/>
{formState.errors.email &&(
  <p>
    {formState.errors.email.message}
  </p>
)}

    </label>

  </div>
  <div>
    <label htmlFor="phoneNummber">Phone Number 
<Input
 type="text" 
placeholder='PhoneNumber'
{...register("phoneNumber",{
  required:"phone number required",
  pattern:{
    value:/^[0-9]$/,
    message:"phone number should only contain numbers"
  },
  
maxLength:{
  value:"10",
  message:"phone number should contain 10 numbers"
}
}

)}
/>
{formState.errors.phoneNumber &&(
  <p>
    {formState.errors.phoneNumber.message}
  </p>
)}
    </label>
  </div>

  <button onClick={handleSubmit(handleFormSubmit)}>Submit</button>
</form>

</div>

    </div>
  )
}

export default ContactForm