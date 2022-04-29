import React from 'react'
import { Link } from 'react-router-dom';

import { Carousel } from 'react-bootstrap';
import useVaccine from '../../Hooks/useVaccine'
import Banner1 from './BannerPic/1.jpg'
import Banner2 from './BannerPic/2.jpg'
import Banner3 from './BannerPic/3.jpg'




const Homepage = () => {

  const [vaccine, setVaccine] = useVaccine()


  return (

    <div>
      <br />
      <div className="d-block">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Banner1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Banner2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block selection:w-100"
              src={Banner3}
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
