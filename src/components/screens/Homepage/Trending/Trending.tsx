
import '../Trending/trending.scss';

import { Card } from './Cards/Card';
import { getFeaturedArticles } from '../../../../utils/mock/article';

export const Trending = () => {
const articles= getFeaturedArticles();
console.log(articles);
  return (
    <section className='trending'>
      <div className="container">
        <div className="title">Trending on LitNet</div>
        <div className="all-cards">
         {
            articles.map((article) =>(
              <Card key={article.id} id={article.id} title={article.title} content={article.content} tags={article.tags} createdBy={article.createdBy} shortDescription={article.shortDescription} rating={article.rating} createdDate={article.createdDate} />
            ))
          } 
        </div>
  
      </div>

    </section>
  )
}
