import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
  
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
    .then(([userData, cards]) => {
      setUserName(userData.name)
      setUserDescription(userData.about)
      setUserAvatar(userData.avatar)
      setCards(cards)
    })
    .catch(err => {console.log(err)})
  }, [])

  
  return (
    <main className="content">
 <section className="profile">
      <div className="profile__main">
        <div className="profile__edit-avatar" onClick = {props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Фотография владельца профил" />
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" onClick = {props.onEditProfile}></button>
          <p className="profile__description">{userDescription}</p>
        </div>
      </div>
      <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
    </section>
    <section className="elements">
    {cards.map((card) => <Card key={card._id} card={card} onCardClick={props.onCardClick} />)}
    </section>
    </main>
  )    
}

export default Main;

