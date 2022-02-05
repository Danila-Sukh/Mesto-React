import React from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';
import CardContext from '../contexts/CardContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const cards = React.useContext(CardContext)


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__main">
          <div className="profile__edit-avatar" onClick={props.onEditAvatar}>
            <img className="profile__avatar" src={currentUser.avatar} alt="Фотография владельца профил" />
          </div>

          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements">
      {cards.map((card) => <Card key={card._id} card={card} onCardClick={props.onCardClick } onCardDelete={props.onCardDelete} onCardLike={props.onCardLike} />)}
      </section>
    </main>
  )
}

export default Main;

