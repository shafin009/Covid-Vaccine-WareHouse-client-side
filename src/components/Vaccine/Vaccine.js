import React from 'react';
import useVaccine from '../../Hooks/useVaccine';
import VaccineDetails from './VaccineDetails';


const Vaccine = () => {
    const [vaccines] = useVaccine();

    return (
        <div>
            <h1 className='text-center text-2xl font-serif underline text-stone-700'>My Inventory</h1>
            <br />
            <section className="text-gray-700 bg-white body-font">

                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center '>

                    {vaccines.map(vaccine => <VaccineDetails
                        key={vaccines._id}
                        vaccine={vaccine}

                    />
                    )}
                </div>
            </section>
        </div>
    );
};

export default Vaccine;