function Card({ title, subtitle, price, description, category, imgUrl }) {
  return (
    <div>
      <div className="card">
        <div className="card-img">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="card-content">
          <h2>{title}</h2>
          <p className="card-subtitle">{subtitle}</p>
          <p className="card-description">{description}</p>
          <p className="card-link menu-btn">View item</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
