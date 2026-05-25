import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import './Navbar.css'

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuthStore()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="url(#logoGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8"/>
                  <stop offset="100%" stopColor="#6366f1"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-text">SolanAI</span>
        </Link>

        {/* Nav Links */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">Khám phá</Link>
          <Link to="/" className="nav-link">Tính năng</Link>
          <Link to="/" className="nav-link">Models</Link>
          <Link to="/" className="nav-link">Bảng giá</Link>
        </div>

        {/* Actions */}
        <div className="navbar-actions">
          {isAuthenticated && user ? (
            <>
              <div className="user-badge">
                <div className="user-avatar">{user.fullName.charAt(0).toUpperCase()}</div>
                <span className="user-name">{user.fullName}</span>
              </div>
              <button className="btn-outline" onClick={handleLogout}>Đăng xuất</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Đăng nhập</Link>
              <Link to="/register" className="btn-primary-nav">Bắt đầu ngay</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
