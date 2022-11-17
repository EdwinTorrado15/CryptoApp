import { useRef } from "react";
import Inicio from "./Inicio";
import "../sass/login.scss";

const Login = () => {
  const user = useRef();
  const password = useRef();
  const getUser = localStorage.getItem("user");
  const getPassword = localStorage.getItem("password");
  const handleSubmit = () => {
    if (
      user.current.value === "admin" &&
      password.current.value === "admin123"
    ) {
      localStorage.setItem("user", "admin");
      localStorage.setItem("password", "admin123");
    }
  };

  return (
    <>
      {getUser && getPassword ? (
        <Inicio />
      ) : (
        <div className="login_container">
          <form onSubmit={handleSubmit} className="login">
            <input type="text" placeholder="Usuario" ref={user} />
            <input type="password" placeholder="Contraseña" ref={password} />
            <button className="fadeIn four">Login</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
