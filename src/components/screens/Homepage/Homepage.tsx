import '../Homepage/homepage.scss';
import Banner from './Banner/Banner';
import Discover from './Discover/Discover';
import Footer from './Footer/Footer';
import { Hero } from './Hero/Hero';
import Navbar from './Navbar/Navbar';


import { Trending } from './Trending/Trending';

const Homepage = () => {
  return (
  <>
   <Navbar logo="LitNet"/>
   <Hero/>
   <Trending/>
   <Banner/>
   <Discover/>
   <Footer/>
  </>
  )
}

export default Homepage



