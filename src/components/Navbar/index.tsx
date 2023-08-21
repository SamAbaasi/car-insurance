import UserIcon from '../../assets/icons/user.svg';
import LogoIcon from '../../assets/icons/logo.svg';
import './Navbar.css';
import { TRANSLATIONS } from './constants';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect } from 'react';
export default function Navbar() {
  const userContex = useContext(AuthContext);
  const user = userContex?.user;
  useEffect(()=> {

  }, [user])
  return (
    <div className='navbar'>
        {/* Link to home */}
        <img src={LogoIcon} alt='user' className='icon'/>
        <p className='pageTitle'>{TRANSLATIONS.pageTitle}</p>
        {/* Link to signup page */}
        {
            user 
            ? 
            <div className='profile'>
                <img src={UserIcon} alt='user' className='icon'/>
                 {/*TODO: User Name  */}
                <p>{user.firstName}</p>
            </div>
            : <p>{TRANSLATIONS.signUp}</p>
        }
        
    </div>
  )
}
