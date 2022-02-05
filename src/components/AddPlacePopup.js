import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup (props) {
    const [title, setTitle] = React.useState('');
    const [link, setLink] = React.useState('');

    React.useEffect(() => {
        setTitle('')
        setLink('')
    }, [props.isOpen]);


    function handleChangeTitle(e) {
        setTitle(e.target.value)
    }

    function handleChangeLink(e) {
        setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();       
        props.onAddPlace({
            title: title,
            link: link,            
        });
    }

    return (
        <PopupWithForm 
        name='add' 
        title='Новое место' 
        isOpen={props.isOpen} 
        onClose={props.onClose}
        buttonText={'Создать'}
        onSubmit={handleSubmit} 
        isLoadingData={props.isLoadingData} >        
          <input
            id="name-card"
            className="popup__input popup__input_card_name"
            type="text"
            name="name"
            placeholder="Название"
            required 
            minLength="3"
            maxLength="30" 
            value={title || ''}
            onChange={handleChangeTitle} />
            <span id="name-card-error" className="error"></span>

          <input
            id="link"
            className="popup__input popup__input_card_link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required 
            value={link || ''}
            onChange={handleChangeLink}/>
            <span id="link-error" className="error"></span>
      </PopupWithForm>
    )
}

export default AddPlacePopup;