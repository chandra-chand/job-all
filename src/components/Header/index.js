import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {BsFillBagFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <nav className="small-container">
        <Link to="/">
          <img
            className="small-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          />
        </Link>

        <div className="icons-container">
          <Link to="/" className="link-item">
            <button className="home-button" type="button">
              <AiFillHome size={30} />
            </button>
          </Link>

          <Link to="/jobs">
            <button className="bag-button" type="button">
              <BsFillBagFill size={30} />
            </button>
          </Link>
          <button className="out-button" type="button" onClick={onClickLogout}>
            <FiLogOut size={30} />
          </button>
        </div>
      </nav>
      <nav className="large-container">
        <Link to="/">
          <img
            className="large-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          />
        </Link>
        <ul className="un-container">
          <Link to="/" className="link-item">
            <li className="home-item">Home</li>
          </Link>
          <Link to="/jobs" className="link-item">
            <li className="jobs-item">Jobs</li>
          </Link>
        </ul>
        <button className="logout-button" type="button" onClick={onClickLogout}>
          Logout
        </button>
      </nav>
    </>
  )
}
export default withRouter(Header)
