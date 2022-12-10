import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./auth.scss";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const passwordRef = useRef();
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    passwordRef.current.focus();
  }, []);

  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Reset your password</h2>
        {error && <h2>{error}</h2>}
        {message && <h2>{message}</h2>}
        <form className="form form--login" onSubmit={submit}>
          <div className="form__group ma-bt-md">
            <label htmlFor="password" className="form__label">
              New Password
            </label>
            <input
              type="password"
              className="form__input"
              value={password}
              ref={passwordRef}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength="8"
            />
          </div>
          <div className="form__group ma-bt-md">
            <label htmlFor="password" className="form__label">
              Confirm New Password
            </label>
            <input
              type="password"
              className="form__input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength="8"
            />
          </div>
          <Link to="/login" className="forgot">
            <p>Login</p>
          </Link>
          <div className="form__group">
            {loading ? (
              <button className="btn btn--green" type="button" disabled>
                <BeatLoader loading={loading} size={10} color={"#fff"} />
              </button>
            ) : (
              <button className="btn btn--green" type="submit">
                PROCEED
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
}
