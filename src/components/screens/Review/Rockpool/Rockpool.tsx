
import Card3 from '../../Homepage/Discover/Card3/Card3'
import { Card } from '../../Homepage/Trending/Cards/Card'
import '../Rockpool/rockpool.scss'
import { getFeaturedArticles } from '../../../../utils/mock/article';

const Rockpool = () => {
    const articles = getFeaturedArticles();
    console.log(articles);
    return (
        <section className="rockpool">
            <div className="container">
                <div className="left">
                    <div className="top">
                        <div className="top-part">
                            <div className="title">
                                <div className="sub-title">Rock Pool</div>
                                <div className="author">Jane Doe</div>
                            </div>
                            <div className="rating">
                                <div className="stars">
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <div className="contents">
                            <p> Water roared everywhere around us, yet from the bank
                                all we could see of it were quick spumes and flashes
                                here and there, in among the boulders. Cautiously,
                                as if they might awaken, we clambered over
                                the gigantic slabs and humps, the sun-baked ovals
                                lumpy as hammered clay, and saw downstream below us
                                only the vague shapes of others, almost billowy,
                                like magnified amoebas, stretching away to even
                                vaguer ones beyond them, turning the narrow
                                streambed through the valley to a lunar seam.</p>

                            <p>  Easing ourselves down over the massive sides
                                (we were hot and tired, eager for the pools below)
                                we could make out older water in the rough grain,
                                undulating and immobile currents, band swirled on band,
                                mica-speckled, cloudy, each seeming to move off,
                                as it faded, through the stone—each one a glacial rune,
                                each boulder an innumerable pebble in the ice sheet’s
                                tidal suck and drag: two hundred thousand years,
                                two billion, five, the molten core, spoor
                                of gasses in the vast night, at our fingertips.</p>

                            <p>  Then the pool: your clothes shed, with one hand braced
                                against the rock ledge you had slipped into the hip-high
                                rushing water, and were wading out, bent over, reaching
                                like the blind before you for the slippery boulder
                                you slid across, pushing against the white weight
                                of the pouring mist, your skin goose-fleshed, speckled
                                bright as mica, and then, part mist yourself,
                                you turned back, smiling, calling though I couldn’t
                                hear you, calling and waving for me to climb down
                                to where you were, to join you there. And so I did.</p>

                        </div>
                    </div>

                </div>
                <div className="right">
                    <div className="heading sub-title">
                        Top writers this month
                    </div>
                    <div card-writer>
                        {
                            articles.slice(0, 5).map((article) => (
                                <Card3 key={article.id} id={article.id} title={article.title} tags={article.tags} createdBy={article.createdBy} shortDescription={article.shortDescription} rating={article.rating} createdDate={article.createdDate} />
                            ))
                        }
                    </div>
                    <div className="heading">
                        Discover what you like
                    </div>
                    <div className="hashtags">
                        <div>Comedy</div>
                        <div>History</div>
                        <div>College life</div>
                        <div>Romance</div>
                        <div>Drama</div>
                        <div>Poetry</div>
                        <div>Thriller</div>
                    </div>
                    <div className='trending'>
                        <div className="container">
                            <div className="title">Trending on LitNet</div>
                            <div className="all-cards ">
                                {
                                    articles.slice(0, 5).map((article) => (
                                        <Card key={article.id} id={article.id} title={article.title} tags={article.tags} createdBy={article.createdBy} shortDescription={article.shortDescription} rating={article.rating} createdDate={article.createdDate} />
                                    ))
                                }
                            </div>

                        </div>

                    </div>



                </div>
            </div>
        </section >
    )
}

export default Rockpool