import "./Register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="logincover">
        <div className="loginleft">
          <h3 className="loginlogo">Connect Social</h3>
          <span className="logindesc">
            Connect with friends and the world around you on Connect Social
          </span>
        </div>
        <div className="loginright">
          <div className="loginbox">
            <input
              placeholder="username"
              className="logininput"
              type="text"
              name="username"
            />
            <input
              placeholder="email"
              className="logininput"
              type="email"
              name="email"
            />
            <input
              placeholder="password"
              className="logininput"
              type="password"
              name="password"
            />
            <input
              placeholder="confirm password"
              className="logininput"
              type="password"
              name="confirmpassword"
            />
            <button className="loginbutton">Sign Up</button>
            <button className="loginregisterbutton">
              Login to your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}





   