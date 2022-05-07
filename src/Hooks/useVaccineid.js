import { useEffect, useState } from 'react';


const useVaccineid = (_id) => {
    const [vaccine, setVaccine] = useState({})


    useEffect(() => {


        fetch(`https://desolate-basin-05597.herokuapp.com/item/${_id}`)
            .then(res => res.json())
            .then(data => setVaccine(data))

    }, [_id])
    return [vaccine, setVaccine]

};

export default useVaccineid;