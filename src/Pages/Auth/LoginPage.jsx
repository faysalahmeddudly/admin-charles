import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import Icon from "../../components/shared/Icon";
import authService from "../../redux/api/authService";
import { loginStarted, loginSucceeded, loginFailed } from "../../redux/slices/authSlice";
import { ROUTES } from "../../lib/constants";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStarted());

    try {
      const data = await authService.login({ email, password });
      const authData = data?.data ?? data;

      dispatch(
        loginSucceeded({
          token: authData?.token,
          name: authData?.name,
          role: authData?.role,
          avatar: authData?.avatar,
        })
      );

      navigate(location.state?.from?.pathname || ROUTES.DASHBOARD, { replace: true });
    } catch (requestError) {
      dispatch(
        loginFailed(
          requestError?.message || "Unable to log in. Please check your credentials and try again."
        )
      );
    }
  };

  return (

<div className="flex justify-center items-center min-h-screen ">

  <div className="">
      {/* Sign In Card */}
    <form onSubmit={onSubmit} className="relative w-full max-w-[410px] border border-gray-400 rounded-md pt-8 sm:pt-10 p-6 sm:p-8">
      {/* Logo */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4">
        <img src="/assets/logo-black.png" alt="Charles Prints Logo" className="w-[120px] sm:w-[150px] h-auto object-contain" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl sm:text-[32px] font-semibold text-[#636363] mb-6">Sign in</h2>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="block text-sm font-medium text-[#000116]"> Email </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-[8px] text-sm border border-[#636363]/20 bg-[#F3F3F3] px-4 py-3 placeholder:text-[#636363] outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex flex-wrap justify-between items-center gap-x-2 gap-y-1">
            <label className="block text-sm font-medium text-[#000116]"> Password </label>

            <a href="#" className="text-xs text-[#EF252C]"> Forgot your password? </a>
          </div>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-[8px] text-sm border border-[#636363]/20 bg-[#F3F3F3] px-4 py-3 placeholder:text-[#636363] outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error ? (
          <p className="text-sm font-medium text-[#EF252C]">{error}</p>
        ) : null}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-md bg-[#EF252C] hover:bg-[#d81f26] text-white text-base sm:text-[16px] font-bold transition duration-200 disabled:opacity-60"
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-1 mt-6">
        <input type="checkbox" className="h-4 w-4 shrink-0" />

        <span className="text-sm sm:text-[16px]"> Keep me signed in. </span>

        <a href="#" className="text-sm sm:text-[16px] text-red-400"> Details</a>
        <Icon name="chevron-down" className="h-3.5 w-3.5 shrink-0 text-[#000116]" />
      </div>

      <p className="text-xs text-[#636363] leading-tight mt-3 sm:px-3">Choosing "Keep me signed in" reduces the number of times you’re asked to sign-in on this device. To keep your account secure, use this option only on your personal devices.</p>
    </form>

    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-[#636363] mt-4 text-center">
      <a href="#">Conditions of Use</a>
      <a href="#">Privacy Notice</a>
      <a href="#">Help</a>
    </div>

    <p className="text-xs text-[#000116] mt-3 text-center">© 2026, charlesprints.com</p>
    </div>
</div>


  );
}
