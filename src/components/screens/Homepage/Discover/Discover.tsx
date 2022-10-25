import '../Discover/discover.scss';
import Card2 from './Card2/Card2';

import Card3 from './Card3/Card3';
import { getFeaturedArticles } from '../../../../utils/mock/article';

const Discover = () => {
    const articles= getFeaturedArticles();
console.log(articles);
    return (
        <section className="discover">
            <div className="container">
                <div className="left">
                    <div className="rising">
                        <div className="text">Up and Rising</div>
                        <div className="view">View all</div>
                    </div>
                    {
            articles.slice(0,3).map((article) =>(
              <Card2 key={article.id} id={article.id} title={article.title} content={article.content} tags={article.tags} createdBy={article.createdBy} shortDescription={article.shortDescription} rating={article.rating} createdDate={article.createdDate} />
            ))
          } 
                   
                </div>
                <div className="right">
                    <div className="heading">
                    Discover what you like
                    </div>
                    <div className="hashtags">
                        <div>Scifi</div>
                        <div>Comedy</div>
                        <div>History</div>
                        <div>Comics and Movies</div>
                        <div>Career</div>
                        <div>College life</div>
                    </div>
                    <div className="heading sub-title">
                    Top writers this month
                    </div>
                     {
            articles.slice(0,4).map((article) =>(
              <Card3 key={article.id} id={article.id} title={article.title} tags={article.tags} createdBy={article.createdBy} shortDescription={article.shortDescription} rating={article.rating} createdDate={article.createdDate} />
            ))
          } 

                </div>
            </div>
        </section>
    )
}

export default Discover