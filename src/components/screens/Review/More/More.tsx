import { classicNameResolver } from 'typescript';
import { Card } from '../../Homepage/Trending/Cards/Card';

import './more.scss';
import { getFeaturedArticles } from '../../../../utils/mock/article';

const More = () => {
  const articles= getFeaturedArticles();
  console.log(articles);
  return (
    <section className='more'>
      <div className='trending'>
        <div className="container">
          <div className="title">More from Jane Doe</div>
          <div className="all-cards ">
          {
            articles.map((article) =>(
              <Card key={article.id} id={article.id} title={article.title} tags={article.tags} createdBy={article.createdBy} shortDescription={article.shortDescription} rating={article.rating} createdDate={article.createdDate} />
            ))
          } 

          </div>

        </div>

      </div>
    </section>
    

  )
}

export default More