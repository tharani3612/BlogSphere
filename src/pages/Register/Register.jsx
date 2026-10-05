import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      alert("Password must contain at least 6 characters");
      return;
    }

    // Check if email already exists
    const existingEmail = localStorage.getItem("userEmail");

    if (existingEmail === email) {
      alert("Account already exists with this email");
      return;
    }

    // Store registered user details
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Account created successfully!");

    // Go to Login
    navigate("/login");
  };

  return (
    <main className="register-page">

      <div className="register-container">

        {/* LEFT SIDE */}
        <div className="register-left">

          <div className="register-brand">
            Blog<span>Sphere</span>
          </div>

          <div className="register-character-wrapper">

            <div className="register-mascot-avatar">

              <div className="register-mascot-head">

                <div className="register-eye left"></div>
                <div className="register-eye right"></div>
                <div className="register-beak"></div>

              </div>

            </div>

            <div className="register-mascot-shadow"></div>

          </div>

          <div className="register-brand-text">

            <h1>Start your journey.</h1>

            <p>
              Create your BlogSphere account
              and discover ideas, tutorials,
              insights and knowledge from
              across the tech world.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="register-card">

          <div className="register-heading">

            <h2>Create Account</h2>

            <p>
              Join BlogSphere and start exploring
            </p>

          </div>

          <form
            onSubmit={handleRegister}
            autoComplete="off"
          >

            {/* NAME */}
            <div className="register-form-group">

              <label>Full Name</label>

              <input
                type="text"
                name="register-name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                autoComplete="off"
              />

            </div>

            {/* EMAIL */}
            <div className="register-form-group">

              <label>Email Address</label>

              <input
                type="email"
                name="register-email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                autoComplete="off"
              />

            </div>

            {/* PASSWORD */}
            <div className="register-form-row">

              <div className="register-form-group">

                <label>Password</label>

                <input
                  type="password"
                  name="register-password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  autoComplete="new-password"
                />

              </div>

              {/* CONFIRM PASSWORD */}
              <div className="register-form-group">

                <label>Confirm</label>

                <input
                  type="password"
                  name="register-confirm-password"
                  placeholder="Confirm"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  autoComplete="new-password"
                />

              </div>

            </div>

            {/* TERMS */}
            <label className="register-terms">

              <input
                type="checkbox"
                required
              />

              <span>
                I agree to the{" "}
                <a href="#">
                  Terms & Conditions
                </a>
              </span>

            </label>

            {/* BUTTON */}
            <button
              type="submit"
              className="register-btn"
            >
              Create Account
            </button>

          </form>

          {/* FOOTER */}
          <div className="register-footer">

            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Sign In
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}

export default Register;