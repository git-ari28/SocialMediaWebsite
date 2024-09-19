import "./Login.css";

export default function Login() {
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
            <button className="loginbutton">Login</button>
            <span className="loginforgot">Forgot Password</span>
            <button className="loginregisterbutton">Create a new account</button>
          </div>
        </div>
      </div>
    </div>
  );
}


        
        

