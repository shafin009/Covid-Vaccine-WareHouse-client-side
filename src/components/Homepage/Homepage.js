import React from 'react'
import { Link } from 'react-router-dom';

import { Carousel, Accordion } from 'react-bootstrap';
import useVaccine from '../../Hooks/useVaccine'
import Banner1 from './BannerPic/1.jpg'
import Banner2 from './BannerPic/2.jpg'
import Banner3 from './BannerPic/3.jpg'
import storeVaccine from './Extra/vaccine.jpg'
import storeVaccine2 from './Extra/vaccine2.jpg'
import HomeVaccine from '../Homevaccine/HomeVaccine';




const Homepage = () => {

  const [vaccines, setVaccine] = useVaccine();


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
            <Carousel.Caption>
              <h4>COVID VACCINE WAREHOUSE.</h4>

              <p>We are keeping vaccines safe for the global rollout of COVID-19 vaccines.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Banner2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h4>COVID VACCINE WAREHOUSE.</h4>

              <p>We are keeping vaccines safe for the global rollout of COVID-19 vaccines.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Banner3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h4>COVID VACCINE WAREHOUSE.</h4>

              <p>We are keeping vaccines safe for the global rollout of COVID-19 vaccines.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <br />
      <section className="text-gray-600 bg-white body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={storeVaccine2} />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Storage and distribution at -70 degrees Celsius present a challenge.</h1>
            <p className="leading-relaxed mb-8">At the time, we determined that inbound logistics, temperature requirements, and vaccine distribution would pose the most significant challenges.  The PPE supply shortages in early 2020 demonstrated the limitations of geographically concentrated production. With four of the six vaccine frontrunners based on new or even experimental platforms, we projected varying and, in some cases, very stringent temperature requirements starting as low as -80°C. We also estimated needing up to 200,000 pallet shipments, 15 million cooling boxes, and 15,000 flights across the various supply chain setups to provide global coverage of the anticipated 10 billion doses needed worldwide.</p>
          </div>
        </div>
      </section>
      <br />
      <h1 className='text-center text-2xl font-serif underline text-stone-700'>My WearHouse Items</h1>
      <br />
      <section className="text-gray-700 bg-white body-font">

        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center '>
          {vaccines.slice(0, 6).map(vaccine => <HomeVaccine
            key={vaccines._id}
            vaccine={vaccine}

          />
          )}
        </div>
      </section>

      <br />
      <Link to='/manageinventory'><button className="btn btn-primary d-grid gap-2 col-6 mx-auto" >Manage Inventory</button>
      </Link>
      <br />
      <section className="text-gray-600 bg-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Preparing for
              <br className="hidden lg:inline-block" />The Vaccine Rollout
            </h1>
            <p className="mb-8 leading-relaxed">Toward the end of 2020, the world watched as COVID-19 vaccine developers made history, creating a silver lining that promises to end the coronavirus pandemic. Now, humanity turns its attention to the challenge of producing enough doses to vaccinate the population and safely delivering each precious jab into the arms of people everywhere. Effective vaccine distribution logistics will be key to success.The past year has reminded us how essential resilient emergency medical supply chains can be. After the first wave of COVID-19 infections revealed several problems in the supply of personal protective equipment (PPE), DHL  began focusing on the next logistics hurdle: rolling out the vaccine.</p>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={storeVaccine} />
          </div>
        </div>
      </section>
      <br />
      <h1 className='text-center text-2xl font-serif underline text-stone-00'>Read More</h1>
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
