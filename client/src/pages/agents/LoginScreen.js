import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from '../../redux/slices/userSlices'
import axios from "../../axios";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [dispatch,isLoggedIn , navigate]);

  const submitHandler = async(e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/user/login', {email,password})
      dispatch(saveUser(data))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      {/* {loading ? "loading" : ( */}
    <div className="max-w-screen-sm mx-auto md:mb-56 mb-36 ">
    <div className="md:mx-20 mx-3 mt-36 md:mt-48">
      <div className="bg-gray-900 rounded-xl py-10">
        <div className="mx-10">
          <form onSubmit={submitHandler}>
            <div className="text-3xl font-extrabold text-blue-600 mb-6">
              Login
            </div>
            <div className="email mb-4">
              <label
                htmlFor="emailField"
                className="text-lg font-bold text-gray-400"
              >
                Email
              </label>
              <input
                id="emailField"
                type="email"
                className="block p-2 w-full text-blue-600 bg-gray-400  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password mb-4">
              <label
                htmlFor="passwordField"
                className="text-lg font-bold text-gray-400"
              >
                password
              </label>
              <input
                id="passwordField"
                type="password"
                className="block p-2  w-full text-blue-600 bg-gray-400  border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end text-blue-600 hover:text-blue-400 font-semibold mb-4">
              <Link to="/password/forgot">Forgot Password?</Link>
            </div>
            <button
              type="submit"
              value="Submit"
              className="text-2xl font-bold bg-gray-600 hover:bg-blue-600 duration-300 text-gray-300 py-2 rounded-lg w-full mb-4"
            >
              Login
            </button>
            <div className="flex justify-end">
              <Link
                to="/register"
                className="text-lg font-bold text-green-600 hover:text-green-400"
              >
                New User?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* )} */}
    </Fragment>
  );
}

export default LoginScreen;