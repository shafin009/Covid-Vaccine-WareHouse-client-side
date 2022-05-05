import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';


const AddNewItem = () => {


    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);


        //post to backend

        fetch("http://localhost:5000/item", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
    };

    return (
        <>
            <br />
            <h1 className='text-center text-green-700 fw-2'>Add Item Here</h1>

            <br />
            <div className="w-50 mx-auto">

                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>


                    <input className='mb-3' value={user?.email} {...register("email", { required: true })} readOnly />
                    <input className='mb-3' placeholder='Item Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-3' placeholder='Description' {...register("description")} />
                    <input className='mb-3' placeholder='Quantity' type="number"
                        min="0" {...register("quantity")} />
                    <input className='mb-3' placeholder='Image URL' type="text" {...register("image")} />
                    <br />
                    <div className="flex justify-center">
                        <button className="bg-sky-700 w-full py-2">Add Item</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddNewItem;