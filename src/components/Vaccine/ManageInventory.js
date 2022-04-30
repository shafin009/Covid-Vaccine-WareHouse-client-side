import React from 'react';
import useVaccine from '../../Hooks/useVaccine'
import Managedetails from './Managedetails';
import { Link } from 'react-router-dom'

const ManageInventory = () => {

    const [vaccines, setVaccine] = useVaccine()
    return (
        <div>
            <section className="text-gray-700 bg-white body-font">

                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center '>
                    {vaccines.map(vaccine => <Managedetails
                        key={vaccines._id}
                        vaccine={vaccine}

                    />
                    )}
                </div>
            </section>
            <Link to='/addnewitem'>
                <button class="flex mx-auto text-black bg-purple-500 border-0 py-2 px-8 focus:outline-none rounded text-lg">Add New Item</button>
            </Link>
        </div >
    );
};

export default ManageInventory;