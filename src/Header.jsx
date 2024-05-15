import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigateTo = useNavigate();
  const [{ basket,user }, dispatch] = useStateValue();
  let naam = user?.email ? user.email.slice(0, user.email.indexOf('@')) : '';
  const handleAuthentication=(e)=>{
    e.preventDefault();
    if(user)
    {
      auth.signOut();
    }
    else
    {
      navigateTo('/login')
    }
  }
  return (
    <div className='header'>
      <Link to='/'>
        <img src="a_logo.png" alt="...." className="header__logo" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchIn" />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className="header__nav">
        <Link to={!user ? '/login' : '#'}>
          <div onClick={(e)=>handleAuthentication(e)} className="header__option">
            <span className="header__optionLineOne">Hello {user? naam:'Guest'}</span>
            <span className="header__optionLineTwo">{user?'Sign-Out':'Sign-In'}</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to='/checkout'>
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
