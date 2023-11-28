import './Navigation.css';
import logo from './Assets/logo.png';

const Navigation = () => {
  return (
    <div className="navigation">
      <img className={'logo'} src={logo} alt="logo" />
      <div className="navMenuItemsContainer">
        <p className="navElement">Термопомпи</p>
        <p className="navElement">Климатици</p>
        <p className="navElement">Контакт</p>
      </div>
    </div>
  );
};

export default Navigation;
