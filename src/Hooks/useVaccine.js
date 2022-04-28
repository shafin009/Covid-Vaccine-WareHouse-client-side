import { useEffect, useState } from 'react';


const useVaccine = () => {
    const [vaccine, setVaccine] = useState([])


    useEffect(() => {


        fetch('data.json')
            .then(res => res.json())
            .then(data => setVaccine(data))

    }, [])
    return [vaccine, setVaccine]

};

export default useVaccine;