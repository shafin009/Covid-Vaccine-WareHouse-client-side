import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import useVaccineid from '../../Hooks/useVaccineid';



const Inventory = () => {

    const { id } = useParams()
    const [stock, setStock] = useState({ quantity: '' });
    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => setStock(data))
    }, [])

    const number = parseInt(stock.quantity);
    const { quantity: qunatity, ...rest } = stock;


    const deliverButton = (event) => {
        event.preventDefault();
        const newNumber = number - 1;
        const vaccine = {
            quantity: newNumber
        }
        const url = `http://localhost:5000/item/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(vaccine)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                setStock({ quantity: newNumber, ...rest });
            })

    }


    const numberOne = parseInt(stock.quantity);
    const numberRef = useRef('');
    const addStockItem = event => {
        event.preventDefault();
        const stocknumber = numberRef.current.value;
        const quantity = parseInt(stocknumber) + numberOne;
        const vaccine = { quantity: quantity };
        const url = `http://localhost:5000/item/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(vaccine)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                setStock({ quantity: quantity, ...rest });
                event.target.reset('')
            })
    }

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-14 mx-auto">
                <div className="lg:w-full mx-auto flex flex-wrap">
                    <div className="lg:w-1/2  lg:h-auto h-80">
                        <img
                            alt="ecommerce"
                            className="w-full lg:h-auto h-80 object-cover object-center rounded"
                            src={stock.image}
                        />
                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                            Name: {stock.name}
                        </h1>
                        <h2 className="text-sm title-font text-gray-500 mb-3 tracking-widest">
                            Supplier: {stock.supplier}
                        </h2>


                        <p className="leading-relaxed">Description: {stock.description}</p>
                        <div className="mt-4 pb-5 border-b-2 border-gray-100 mb-5">
                            <span className="title-font mb-6 block font-medium text-2xl text-gray-900">
                                Price: {stock.price}
                            </span>
                            <div className="flex mb-4">
                                <h2
                                    className="text-xl text-sky-600 font-semibold"
                                    name="number"
                                >
                                    Quantity : {stock.quantity}
                                </h2>
                            </div>
                            <div className="flex mt-5">
                                <button
                                    onClick={deliverButton}
                                    className="flex text-white bg-red-500 border-0 py-1 px-3 h-8 rounded"
                                >
                                    Deliver
                                </button>
                                <form onSubmit={addStockItem}>
                                    <input
                                        ref={numberRef}
                                        type="number"
                                        name="quantity"
                                        className="border-2 text-center mx-3 h-8 rounded w-12"
                                        placeholder="Quantity"
                                    />
                                    <input
                                        className="flex mx-3 text-black bg-green-500 border-0 py-1 px-3 h-8 mt-5 focus:outline-none rounded"
                                        type="submit"
                                        value="Add"
                                    />
                                </form>
                            </div>
                        </div>
                        <Link to='/manageinventory'><button className="btn btn-warning d-grid gap-2 col-6 mx-auto" >Manage Inventory</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inventory;