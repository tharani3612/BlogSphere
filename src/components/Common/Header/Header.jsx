import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="header-container">

        {/* Logo */}
        <a href="/home" className="logo">
          Blog<span>Sphere</span>
        </a>


        {/* Navigation */}
        <nav className="nav-links">

          <a href="/home">
            Home
          </a>

          <a href="/blogs">
            Blogs
          </a>

          <a href="/categories">
            Categories
          </a>

        </nav>


        {/* Right Side */}
        <div className="header-actions">

          <a
            href="/login"
            className="login-link"
          >
            Login
          </a>

          <a
            href="/blogs"
            className="header-btn"
          >
            Explore Blogs
            <span>→</span>
          </a>

        </div>

      </div>

    </header>
  );
}

export default Header;