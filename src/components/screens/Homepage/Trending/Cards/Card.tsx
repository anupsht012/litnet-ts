
import '../Cards/card.scss';
import { getFeaturedArticles } from '../../../../../utils/mock/article';
export const Card = (props:any) => {
  const { id,title, tags,createdBy, createdDate, shortDescription, rating } = props;
  
  return (
    <div className="cards">
    <div className="sub-title">
      <div className="num">01</div>
      <div className="card-title">{title}</div>
    </div>
    <div className="stars">
      <i className="fa-regular fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <i className="fa-regular fa-star"></i>
      <i className="fa-regular fa-star"></i>
    </div>
    <div className="name">
      <div className="author">
       <span> <img src='/images/Ellipse 8.png' alt="image icon" /></span>
       <span> <p>{createdBy.userDetail.name}</p></span>
      </div>
      <div className="time">{createdDate}</div>
    </div>
  </div>
  )
}
