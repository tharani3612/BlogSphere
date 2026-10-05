import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Get registered user details
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    // Check login details
    if (
      email === savedEmail &&
      password === savedPassword
    ) {
      localStorage.setItem("isLoggedIn", "true");

      alert("Login successful!");

      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <main className="login-page">

      <div className="login-container">

        {/* LEFT SIDE */}
        <div className="login-left">

          <div className="login-brand">
            Blog<span>Sphere</span>
          </div>

          <div className="character-wrapper">

            <div className="mascot-avatar">

              <div className="mascot-head">

                <div className="eye left"></div>
                <div className="eye right"></div>
                <div className="beak"></div>

              </div>

            </div>

            <div className="mascot-shadow"></div>

          </div>

          <div className="brand-text">

            <h1>
              Welcome back.
            </h1>

            <p>
              Sign in to explore insightful articles,
              discover new ideas and continue learning.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="login-card">

          <div className="login-heading">

            <h2>
              Sign In
            </h2>

            <p>
              Enter your details to continue
            </p>

          </div>

          <form
            onSubmit={handleLogin}
            autoComplete="off"
          >

            {/* EMAIL */}
            <div className="form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="login-email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                autoComplete="off"
              />

            </div>

            {/* PASSWORD */}
            <div className="form-group">

              <label>
                Password
              </label>

              <input
                type="password"
                name="login-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                autoComplete="new-password"
              />

            </div>

            {/* OPTIONS */}
            <div className="login-options">

              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <a href="/forgotpassword">
                Forgot password?
              </a>

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="login-btn"
            >
              Sign In
            </button>

          </form>

          {/* FOOTER */}
          <div className="login-footer">

            <span>
              Don't have an account?
            </span>

            <a href="/register">
              Create account
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Login;