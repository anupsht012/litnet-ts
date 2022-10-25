
import More from './More/More';
import'../Review/review.scss';
import Rockpool from './Rockpool/Rockpool';

import Footer from '../Homepage/Footer/Footer';
import Navbar from '../Homepage/Navbar/Navbar';

const Review = () => {
  return (
   <>
    <Navbar logo="LitNet"/>
    <Rockpool/>
    <More/>
    <Footer/>
    </>
  )
}

export default Review