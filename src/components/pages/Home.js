import '../../App.css';
import Hero from '../Hero';
import Whyonlogis from '../Whyonlogis';
import Features from '../Features';
import DifferentiateUs from '../DifferentiateUs';
import Testimonials from '../Testimonials';
import Clients from '../Clients';

function Home(){
    return (
        <>
          <Hero/>
          <Whyonlogis/>
          <Features/>
          <DifferentiateUs/>
          <Testimonials/>
          <Clients/>
        </>
    )
}

export default Home;