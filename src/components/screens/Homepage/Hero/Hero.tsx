import '../../../screens/Homepage/Hero/hero.scss';
// import HeroImg from '../../../../assets/images/Frame.png';
import { NavLink } from 'react-router-dom';

export const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="image-area">
                    <img src='/images/Frame.png' alt="hero image" />
                </div>
                <div className="text-area">
                    <div className="text-contents">
                        <div className='title'>Express your</div>
                        <div className='para'>Inner writer</div>
                        <div className="buttons">
                            <button className='hero-btn1'><NavLink to={'/login'}>Join Poem Net</NavLink></button>
                            <button className='hero-btn'><NavLink to={'/register'}>Join Poem Net</NavLink></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

