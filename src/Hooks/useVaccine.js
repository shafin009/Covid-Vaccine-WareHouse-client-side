import { useEffect, useState } from 'react';


const useVaccine = () => {
    const [vaccine, setVaccine] = useState([])


    useEffect(() => {


        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setVaccine(data))

    }, [])
    return [vaccine, setVaccine]

};

export default useVaccine;