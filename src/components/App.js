import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: '', link: '' })
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  return (
    <>
  <div className="page">
  <Header />
  <Main
    onEditProfile={handleEditProfileClick}
    onAddPlace={handleAddPlaceClick}
    onEditAvatar={handleEditAvatarClick}
    onCardClick={handleCardClick}
  />
  <Footer />

  <PopupWithForm
    name='edit'
    title='Редактировать профиль'
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
    buttonText={'Сохранить'}>
    <input
      id="user-name"
      className="popup__input popup__input_is_name"
      type="text"
      name="name"
      placeholder="Имя пользователя"
      required
      minLength="3"
      maxLength="40" />
    <span id="user-name-error" className="error"></span>

    <input
      id="about"
      className="popup__input popup__input_is_job"
      type="text"
      name="about"
      placeholder="О себе"
      required
      minLength="3"
      maxLength="200" />
    <span id="about-error" className="error"></span>
  </PopupWithForm>

  <PopupWithForm
    name='add'
    title='Новое место'
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
    buttonText={'Создать'}>
    <input
      id="name-card"
      className="popup__input popup__input_card_name"
      type="text"
      name="name"
      placeholder="Название"
      required minLength="3"
      maxLength="30" />
    <span id="name-card-error" className="error"></span>

    <input
      id="link"
      className="popup__input popup__input_card_link"
      type="url"
      name="link"
      placeholder="Ссылка на картинку"
      required />
    <span id="link-error" className="error"></span>
  </PopupWithForm>

  <PopupWithForm
    name='profile-update'
    title='Обновить аватар'
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
    buttonText={'Сохранить'}>
    <input
      id="avatar"
      className="popup__input popup__input_avatar"
      type="url"
      name="avatar"
      placeholder="Ссылка на картинку"
      required />
    <span id="avatar-error" className="error"></span>
  </PopupWithForm>

  <ImagePopup card={selectedCard} onClose={closeAllPopups} />
  </div> 
  </>      
    )}

export default App;