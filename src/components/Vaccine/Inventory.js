import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom'




const Inventory = () => {

    const { id } = useParams()
    const [stock, setStock] = useState({ quantity: '' });

    useEffect(() => {
        fetch(`https://desolate-basin-05597.herokuapp.com/item/${id}`)
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
        const url = `https://desolate-basin-05597.herokuapp.com/item/${id}`
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
        const url = `https://desolate-basin-05597.herokuapp.com/item/${id}`
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
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="" className="object-cover object-center h-full w-full" src={stock.image} />
                        </div>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">{stock.supplier}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{stock.name}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">

                                    <span className="text-gray-600 text-sm ml-3">Price: {stock.price}</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 text-gray-800 text-2xl border-gray-200 space-x-2s">
                                    Quantity: {stock.quantity}
                                </span>
                            </div>
                            <p className="leading-relaxed">{stock.description}</p>
                            {
                                stock.quantity === 0 ? <button
                                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Sold
                                    Out </button> : <button onClick={deliverButton}
                                        className="flex mx-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Deliver
                                    Item</button>
                            }
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                <div className="flex">

                                    <form onSubmit={addStockItem}>
                                        <div className="flex flex-wrap -m-2">
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label for="quantity" className="leading-7 text-sm text-gray-900">Add Quantity:</label>
                                                    <input id="quantity" name="quantity"
                                                        className="form-control block w-full px-4 py-2 text-sm  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        ref={numberRef} type="number" min="0" placeholder="Add Stock" required />
                                                </div>
                                            </div>

                                            <div className="p-2 w-full">
                                                <button type="submit"
                                                    className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Add
                                                    Quantity</button>
                                            </div>
                                        </div>
                                    </form>


                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Link to='/manageinventory'><button className="btn btn-warning d-grid gap-2 col-6 mx-auto" >Manage Inventory</button>
            </Link>
        </div>
    );
};

export default Inventory;