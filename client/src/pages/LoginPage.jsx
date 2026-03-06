import React, { useContext, useState } from "react";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {

  const { login } = useContext(AuthContext);

  const [currState, setCurrState] = useState("Sign up");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // STEP 1 → show bio
    if (currState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    if (loading) return;

    setLoading(true);

    try {

      if (currState === "Sign up") {

        await login("signup", {
          fullName: fullName.trim(),
          email: email.trim().toLowerCase(),
          password,
          bio
        });

      } else {

        await login("login", {
          email: email.trim().toLowerCase(),
          password
        });

      }

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center gap-8 max-sm:flex-col backdrop-blur-2xl">

      <img
        src={assets.logo_big}
        alt=""
        className="w-[min(30vw,250px)]"
      />

      <form
        onSubmit={onSubmitHandler}
        className="border-2 bg-white/8 text-white border-gray-500 p-8 flex flex-col gap-6 rounded-lg shadow-lg w-[420px] max-w-[90%]"
      >

        <h2 className="font-medium text-2xl flex justify-between items-center">
          {currState}

          {isDataSubmitted && (
            <img
              onClick={() => setIsDataSubmitted(false)}
              src={assets.arrow_icon}
              alt=""
              className="w-5 cursor-pointer"
            />
          )}
        </h2>

        {currState === "Sign up" && !isDataSubmitted && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="p-3 border border-gray-500 rounded-md bg-transparent"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 border border-gray-500 rounded-md bg-transparent"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 border border-gray-500 rounded-md bg-transparent"
            />
          </>
        )}

        {currState === "Sign up" && isDataSubmitted && (
          <textarea
            placeholder="Provide a short bio..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
            className="p-3 border border-gray-500 rounded-md bg-transparent"
          />
        )}

        {currState === "Login" && (
          <>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-3 border border-gray-500 rounded-md bg-transparent"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-3 border border-gray-500 rounded-md bg-transparent"
            />
          </>
        )}

        <button
          type="submit"
          disabled={loading}
          className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 rounded-md"
        >
          {loading ? "Please wait..." : currState === "Sign up" ? "Create Account" : "Login Now"}
        </button>

        <p className="text-sm text-gray-400">
          {currState === "Sign up" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setCurrState("Login");
                  setIsDataSubmitted(false);
                }}
                className="text-violet-400 cursor-pointer"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              Create an account?{" "}
              <span
                onClick={() => {
                  setCurrState("Sign up");
                  setIsDataSubmitted(false);
                }}
                className="text-violet-400 cursor-pointer"
              >
                Click here
              </span>
            </>
          )}
        </p>

      </form>
    </div>
  );
};

export default LoginPage;
