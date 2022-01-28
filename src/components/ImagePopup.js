function ImagePopup(props) {

    const imagePopupClass = `popup popup_big-size-image ${props.card.name && props.card.link ? "popup__opened" : ""}`;
    
    return (
        <div className={imagePopupClass}>
        <div className="popup__content-big-image">
          <img className="popup__big-img" alt={props.card.name} src={props.card.link}/>
          <p className="popup__name-big-img">{props.card.name}</p>
          <button className="popup__close popup__close_type_big-image" type="button" onClick={props.onClose}></button>
        </div>
      </div>
    )
  }
  
  export default ImagePopup;