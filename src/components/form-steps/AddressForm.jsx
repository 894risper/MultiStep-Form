import React from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../ui/inputs';
const AddressForm = () => {
const {register,handleSubmit,formState,reset}= useForm();


useForm (()=>{
    reset({streetAddress:"" ,city :"",state:"",zipCode:""})
},[reset]);

const handleFormSubmit=()=>{
    reset()
}
  return (
    <div className='border border-gray-200 '>
<div>
<h1>Address Information</h1>
<p>Step 1/4</p>

</div>
<form onSubmit={handleSubmit(handleFormSubmit)}  >

    <div>
        <label htmlFor="streetAddress">Street Address
<Input type="text"
{...register ("streetAddress",{
    required:"the street address is required",
pattern:{
    value:/^[a-zA-Z0-9\s,.'-]{3,}$/,
    message:"enter a valid street address"
}

})}
/>
{formState.errors.streetAddress &&(
    <p>
        {formState.errors.fullname.message}
    </p>
)}
        </label>
    </div>
<div>
    <label htmlFor="city">City
        <Input type="text" 
        {...register("city",{
          required:"the name of the city is required" ,
          pattern:{
            value:/^[a-zA-z]+$/,
            message:"the city should oly contain letters"
          }
 
        })}
        />
        {formState.errors.city &&(
            <p>
                {formState.errors.city.message}
            </p>
        )}
    </label>
</div>
<div>
<label htmlFor="state">State
<Input
className="flex"
type="text"
{...register("state",{
    required:"the state is required",
    pattern:{
     value:   /^[a-zA-Z ]+$/,
    message:"state should only contain letters"
    }
})}
/>

{formState.errors.state &&(
    <p>
        {formState.errors.message.state}
    </p>
)}

</label>

</div>
<div>
    <label htmlFor="zipCode">Zip code
        <Input type="text" 
        {...register("city",{
          required:"the name of the city is required" ,
          pattern:{
            value:/^\d{5}$|^\d{5}-\d{4}$/,
            message:"the city should oly contain letters"
          }
 
        })}
        />
        {formState.errors.zipCode &&(
            <p>
                {formState.errors.zipCode.message}
            </p>
        )}
    </label>
</div>

</form>

    </div>
  )
}

export default AddressForm