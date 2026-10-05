import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    const savedEmail =
      localStorage.getItem("userEmail");

    if (savedEmail && email !== savedEmail) {
      alert("No account found with this email");
      return;
    }

    alert(
      "Password reset instructions sent to your email!"
    );

    navigate("/login");
  };

  return (
    <main className="forgot-page">

      <div className="forgot-container">

        {/* LEFT SIDE */}

        <div className="forgot-left">

          <div className="forgot-brand">
            Blog<span>Sphere</span>
          </div>

          <div className="forgot-character-wrapper">

            <div className="forgot-mascot-avatar">

              <div className="forgot-mascot-head">

                <div className="forgot-eye left"></div>

                <div className="forgot-eye right"></div>

                <div className="forgot-beak"></div>

              </div>

            </div>

            <div className="forgot-mascot-shadow"></div>

          </div>

          <div className="forgot-brand-text">

            <h1>
              Don't worry.
            </h1>

            <p>
              It happens to everyone. Enter your
              email address and we'll help you get
              back into your BlogSphere account.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="forgot-card">

          <div className="forgot-heading">

            <div className="forgot-icon">
              🔑
            </div>

            <h2>
              Forgot Password?
            </h2>

            <p>
              Enter your email address and we'll
              help you reset your password.
            </p>

          </div>

          <form
            onSubmit={handleReset}
            autoComplete="off"
          >

            <div className="forgot-form-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="forgot-email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                autoComplete="off"
              />

            </div>

            <button
              type="submit"
              className="forgot-btn"
            >
              Send Reset Link
            </button>

          </form>

          <div className="forgot-footer">

            <Link to="/login">
              ← Back to Sign In
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ForgotPassword;