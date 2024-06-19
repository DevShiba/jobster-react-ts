import { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormRow, Logo } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement; 
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="container">
      <form className="form" onSubmit={onSubmit}>
        <Logo className="logo" />
        <h3 className="title">{values.isMember ? "Login" : "Register"}</h3>

        {/*User Field*/}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/*Email Field*/}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/*User Field*/}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn" disabled={isLoading}>
          {isLoading ? "Loading..." : values.isMember ? "Login" : "Register"}
        </button>
        <button
          type="button"
          className="btn test-btn"
          disabled={isLoading}
          onClick={() => {
            dispatch(
              loginUser({ email: "testUser@test.com", password: "secret" })
            );
          }}
        >
          {isLoading ? "loading..." : "demo"}
        </button>
        <p className="member-verification">
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <a onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </a>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
