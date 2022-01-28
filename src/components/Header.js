import Logo from '../images/logo.svg';

function Header () {
    return (
        <header className="header">
        <img className="logo" src={Logo} alt="Логотип" />
      </header>
)}

export default Header;