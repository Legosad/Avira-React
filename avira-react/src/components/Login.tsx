import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-[calc(100vh-68px)] bg-[var(--primary-color)]">
      {isLogin ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col justify-center items-center gap-4 rounded-xl p-6 bg-white w-90 "
        >
          <h1 className="text-[var(--primary-color)] font-semibold text-2xl">
            Welcome Back
          </h1>
          <input
            type="email"
            placeholder="Enter Email"
            className="border-b py-2 outline-none w-70"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="border-b py-2 outline-none w-70"
          />
          <div className="text-[var(--primary-color)] flex justify-between w-full px-4">
            <button
              type="button"
              className="border-b border-[var(--primary-color)]"
            >
              Forgot Password
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className="border-b border-[var(--primary-color)]"
            >
              Sign up
            </button>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-sm hover:scale-105 hover:bg-[var(--primary-color)]"
          >
            Submit
          </button>
        </form>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col justify-center items-center gap-4 rounded-xl p-6 bg-white w-90 "
        >
          <h1 className="text-[var(--primary-color)] font-semibold text-2xl">
            Welcome to Avira
          </h1>
          <input
            type="email"
            placeholder="Enter Email"
            className="border-b py-2 outline-none w-70"
          />
          <input
            type="password"
            placeholder="Create Password"
            className="border-b py-2 outline-none w-70"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="border-b py-2 outline-none w-70"
          />
          <div className="text-[var(--primary-color)] flex justify-between w-full px-4">
            <button
              type="button"
              className="border-b border-[var(--primary-color)]"
            >
              Need Help
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className="border-b border-[var(--primary-color)]"
            >
              Sign in
            </button>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-sm hover:scale-105 hover:bg-[var(--primary-color)]"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
