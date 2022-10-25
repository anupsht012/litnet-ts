import '../Card2/card2.scss';
// import imgIcon from '../../../../../assets/images/Ellipse 8.png';
import { features } from 'process';

const Card2 = (props: any) => {
  const { id, title, tags, createdBy, createdDate, content, shortDescription, rating } = props;

  return (
    <div className="cards2">
      <div className="person">
        <div className="author">
          <span> <img src='/images/Ellipse 8.png' alt="image icon" /></span>
          <span> <p>{createdBy.userDetail.name}</p></span>
        </div>
        <div className="time">{createdDate}</div>
      </div>
      <div className="subject-title">
        {shortDescription}
      </div>
      <div className="subject-review">
        {content}
      </div>
      <div className="stars">
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </div>

    </div>
  )
}

export default Card2