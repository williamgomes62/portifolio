import { about } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { profileImageLink } = about

  return (
    <header className='header center'>
      <picture>
        <source srcSet={profileImageLink} media='(max-width: 50px)' />
        <img src={profileImageLink} alt='Profile' className='profile-img' />
      </picture>
      <Navbar />
    </header>
  )
}
export default Header
