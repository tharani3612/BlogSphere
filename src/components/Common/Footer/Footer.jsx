import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <h2>
            Blog<span>Sphere</span>
          </h2>

          <p>
            Explore ideas, learn something new,
            and share your knowledge with the world.
          </p>

        </div>


        {/* Quick Links */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/home">
            Home
          </a>

          <a href="/blogs">
            Blogs
          </a>

          <a href="/categories">
            Categories
          </a>

          <a href="/login">
            Login
          </a>

        </div>


        {/* Social Links */}
        <div className="footer-social">

          <h3>Follow Us</h3>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 BlogSphere. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;