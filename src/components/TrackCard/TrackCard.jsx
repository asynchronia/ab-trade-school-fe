import './TrackCard.scss';

const TrackCard = ({ icon, title, description, buttonText }) => {
  return (
    <div className="track-card">
      <img src={icon} alt={title} className="track-card__icon" />
      <h3 className="track-card__title">{title}</h3>
      <p className="track-card__description">{description}</p>
      <button className="track-card__button">
        {buttonText} <span className="arrow">→</span>
      </button>
    </div>
  );
};

export default TrackCard;
