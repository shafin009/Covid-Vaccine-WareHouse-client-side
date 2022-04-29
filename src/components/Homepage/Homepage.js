import React from 'react'
import { Link } from 'react-router-dom';

import { Carousel, Accordion } from 'react-bootstrap';
import useVaccine from '../../Hooks/useVaccine'
import Banner1 from './BannerPic/1.jpg'
import Banner2 from './BannerPic/2.jpg'
import Banner3 from './BannerPic/3.jpg'
import storeVaccine from './Extra/vaccine.jpg'
import storeVaccine2 from './Extra/vaccine2.jpg'




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
      <h1 className='text-center text-2xl font-serif underline text-stone-700'>Preparing for the Vaccine Rollout</h1>
      <br />
      <div className="container row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={storeVaccine} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">Some vaccines have to be stored at extremely low temperatures.</h5>
              <p className="card-text">Toward the end of 2020, the world watched as COVID-19 vaccine developers made history, creating a silver lining that promises to end the coronavirus pandemic. Now, humanity turns its attention to the challenge of producing enough doses to vaccinate the population and safely delivering each precious jab into the arms of people everywhere. Effective vaccine distribution logistics will be key to success.The past year has reminded us how essential resilient emergency medical supply chains can be. After the first wave of COVID-19 infections revealed several problems in the supply of personal protective equipment (PPE), DHL  began focusing on the next logistics hurdle: rolling out the vaccine. </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={storeVaccine2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold">Storage and distribution at -70 degrees Celsius present a challenge.</h5>
              <p className="card-text">At the time, we determined that inbound logistics, temperature requirements, and vaccine distribution would pose the most significant challenges.  The PPE supply shortages in early 2020 demonstrated the limitations of geographically concentrated production. With four of the six vaccine frontrunners based on new or even experimental platforms, we projected varying and, in some cases, very stringent temperature requirements starting as low as -80°C. We also estimated needing up to 200,000 pallet shipments, 15 million cooling boxes, and 15,000 flights across the various supply chain setups to provide global coverage of the anticipated 10 billion doses needed worldwide.</p>
            </div>
          </div>
        </div>
      </div>
      <br />




      <Link to='/'><button className="btn btn-primary d-grid gap-2 col-6 mx-auto" >Manage Inventory</button>
      </Link>
      <br />
      <h1 className='text-center text-2xl font-serif underline text-stone-700'>Fequently Asked Question</h1>
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
