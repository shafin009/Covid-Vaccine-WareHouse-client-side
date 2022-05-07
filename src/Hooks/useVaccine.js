import { useEffect, useState } from 'react';


const useVaccine = () => {
    const [vaccine, setVaccine] = useState([])


    useEffect(() => {


        fetch('https://desolate-basin-05597.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setVaccine(data))

    }, [])
    return [vaccine, setVaccine]

};

export default useVaccine;