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
        <div className="w-50 mx-auto">
            <br />
            <h1>Add Item</h1>
            <br />
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Item Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3' placeholder='Description' {...register("description")} />
                <input className='mb-3' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-3' placeholder='Image URL' type="text" {...register("image")} />
                <br />
                <input type='submit' value="Add Service" />
            </form>
        </div>
    );
};

export default AddNewItem;