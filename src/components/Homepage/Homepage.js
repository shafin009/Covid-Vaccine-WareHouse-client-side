import React from 'react'
import { Link } from 'react-router-dom';

import { Carousel } from 'react-bootstrap';
import useVaccine from '../../Hooks/useVaccine'





const Homepage = () => {

  const [vaccine, setVaccine] = useVaccine()


  return (

    <div>

      <div className="d-block">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={''}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={''}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block selection:w-100"
              src={''}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <br />
      <h1 className='text-center text-4xl font-serif underline text-stone-700'>Our Items</h1>



      <Link to='/'><button className="btn btn-primary d-grid gap-2 col-6 mx-auto" >Manage Inventory</button>
      </Link>

    </div >

  );
}

export default Homepage;
