function Card (props){

    function handleClick() {
      props.onCardClick(props.card);
    }  
  
    return(
      <div className="card">
      <button
        className="element__delete"
        type="button"
        ></button>
      <img
        className="card__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="card__description">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="card__like-button" type="button"></button>
          <p className="element__likes-count">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
  
  export default Card;