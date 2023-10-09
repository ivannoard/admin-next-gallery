import React from "react";
import { Button, FormGroup } from "../../components/atoms";
import { AuthLayout } from "../../components/layouts";
import "./auth.scss";
import { useLocation, useNavigate } from "react-router-dom";

type LoginType = {
  username?: string;
  password?: string;
};

const Login = () => {
  const [fields, setFields] = React.useState<LoginType>();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  console.log(pathname);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(
    e: React.MouseEvent | React.FormEvent<HTMLFormElement>
  ): void {
    e.preventDefault();
    localStorage.setItem(
      "data_user",
      JSON.stringify({ username: fields?.username, password: fields?.password })
    );
    navigate("/");
  }

  return (
    <AuthLayout>
      <div className="auth-login-form-wrapper">
        <form className="auth-login-form" onSubmit={handleSubmit}>
          <FormGroup
            type="text"
            labelFor="username"
            onChange={handleChange}
            required
          />
          <FormGroup
            type="password"
            labelFor="password"
            onChange={handleChange}
            required
          />
          <Button name="login" classButton={"auth-button"} />
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
