import '../Card3/card3.scss';
// import DisImg from '../../../../../assets/images/Ellipse.png';
const Card3 = (props: any) => {
  const { id, title, tags, createdBy, createdDate, shortDescription, rating } = props;

  return (
    <div className="writers">
      <div className="author">
        <div><img src='/images/Ellipse.png' alt="" /></div>
        <div className="writer">
          <div className="name">{createdBy.userDetail.name}</div>
          <div>NCCS</div>
        </div>

      </div>
      <p>300 views</p>
    </div>
  )
}

export default Card3