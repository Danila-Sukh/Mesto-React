import React from 'react';
function PopupWithForm (props) {  
  const popupClass = `popup popup_type_${props.name} ${props.isOpen ? "popup__opened" : ""}`
  const isLoadingData = (props.isLoadingData ? 'Сохранение...' : props.buttonText);
  
    return (
      <div className={popupClass} onClick={props.onClose}>
        <div className="popup__container" onClick={e=> {e.stopPropagation()}}>
          <button className="popup__close" type="button" onClick={props.onClose}></button>
          <h3 className="popup__description">{props.title}</h3>
          <form className="popup__form" name={`form-${props.name}`} onSubmit={props.onSubmit} noValidate>
            {props.children}
            <button className="popup__button" type="submit">{isLoadingData}</button>        
          </form>
        </div>
      </div> 
    )
  }
  
  export default PopupWithForm;