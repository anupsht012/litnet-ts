import '../Banner/banner.scss';
const Banner = () => {
    return (
        <section className="banner">
         <div className="container">
         <div className="text-area">
                <div className="text-contents">
                        <div className='title'>Bring your work</div>
                        <div className='para'>to the masses</div>
                        <div className="buttons">
                            <button className='hero-btn1'>Become a member</button>
                           
                        </div>
                    </div>
                </div>
                <div className="image-area">
                <img src='/images/banner.png' alt="hero image" />
                </div>
         </div>
              
            </section>
        
    )
}

export default Banner