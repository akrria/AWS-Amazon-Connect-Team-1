import { Link } from 'react-router-dom'
import avator from '../../assets/images/Avatars - Default with Backdrop.png'
import logo from '../../assets/images/Monsters - Standing.png'
import './NavMenu.css'
import avatar2 from './avatar2.jpg'

export default function NavMenu() {
    const signOut = () => {
        console.log(signOut)
    }
    return(
        <header className="header">
            <div className="container">
                <nav className="nav-menu">
                    <div className="brand">
                        <img className='brand-img' src={logo} alt="" />
                        <h2 className='nav-logo'>Appleton Care</h2>
                    </div>
                    <ul className="nav-menu-wrp">
                        <li className='nav-menu-item'>
                            <Link className='nav-menu-link' to='/'>Dashboard</Link>
                        </li><li className='nav-menu-item'>
                            <Link className='nav-menu-link' to='/recordings'>Recordings</Link>
                        </li>
                    </ul>
                    <div className="log-btn-wrp">
                        <button onClick={signOut} className='log-btn'>
                            <img className='log-btn-img' src={avatar2} alt="avatar" />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}