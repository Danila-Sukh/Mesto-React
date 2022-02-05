import PopupWithForm from './PopupWithForm';
import React from 'react';

function EditAvatarPopup(props) {   
    const avatarRef = React.useRef();

    React.useEffect(() => {
      avatarRef.current.value = ''
    }, [props.isOpen])

    function handleSubmit(e) {
        e.preventDefault(); 

        props.onUpdateAvatar({
          avatar : avatarRef.current.value
        });
    } 

      return (
        <PopupWithForm 
        name='profile-update' 
        title='Обновить аватар' 
        isOpen={props.isOpen}
        onClose={props.onClose}
        buttonText={'Сохранить'}
        onSubmit={handleSubmit}
        isLoadingData={props.isLoadingData}>
          <input
            id="avatar"
            className="popup__input popup__input_avatar"
            type="url"
            name="avatar"
            placeholder="Ссылка на картинку"
            required 
            ref={avatarRef}
             />
          <span id="avatar-error" className="error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;