import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const submit = (e: any) => {
    e.preventDefault()
    axios.post(`https://reqres.in/api/login`, user)
    .then(data => console.log(data))
    .catch(e => console.error(e))
  }

  return (
    <div className="container">
      <form action="" onSubmit={submit}>
        <div className="mb-3 row mt-2">
          <div className="col-6">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                required
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                }}
                type="email"
                name="email"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-6">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                required
                onChange={(e) => {
                  setUser({
                    ...user,
                    password: e.target.value,
                  });
                }}
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <input
            type="submit"
            className="w-25 btn btn-success"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
