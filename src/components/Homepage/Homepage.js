import React from 'react'
import { Link } from 'react-router-dom';

import { Carousel, Accordion } from 'react-bootstrap';
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
      <br />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Drawing up and handling</Accordion.Header>
          <Accordion.Body>
            All COVID-19 vaccines come in multi-dose vials. ATAGI prefers using a 19 to 21 gauge bevelled needle when drawing up to reduce the risk of coring. If this is not available, a smaller (22 to 25 gauge), or larger (18 gauge) needle is acceptable, but the risk of coring is higher with larger needles. If entering the vial multiple times, ensure that each re-puncture occurs at a different site on the bung. Carry doses you have just withdrawn in syringes with capped administration needles.The room temperature should be less than: 30 °C for the AstraZeneca and Pfizer vaccines and 25 °C for the Moderna vaccine.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Stock control measures</Accordion.Header>
          <Accordion.Body>
            Plan bookings in advance and make appointments available in order to manage the amount of stock you have on hand.We recommend sites vaccinate priority populations as quickly as you can. Do not: stockpile vaccines and reserve second doses for patients who have had a first dose.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div >

  );
}

export default Homepage;
