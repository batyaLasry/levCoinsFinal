import React from 'react'
import { useForm } from 'react-hook-form';
import './register.css';


export default function RegisterForm() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    /**onSubmit להוסיף בה לוגיקה של הוספה למונגו ושליחת מייל ואחר כך חזרה למסך הבית ואז יצטרך להתחבר כמו לקוח רשום  */
    //בנוסף יש לשלוח מייל למנהל לאישור 
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2 className='header'>Sign In</h2>
                <span>please,fill the field</span>

                <form id='RegisterField' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                    <input type="text" {...register("InitialAmount", { required : true, maxLength: 10 })} placeholder='Initial amount $' />

                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Sign In</button>
                </form>

            </div>
            <div className="col-2">
                <img src="https://notaryon-online.com/wp-content/uploads/2020/12/pexels-picjumbocom-461077-1.jpg" alt="" />
            </div>
        </div>
    </section>
  )
}