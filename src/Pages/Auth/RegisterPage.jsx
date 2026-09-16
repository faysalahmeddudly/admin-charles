// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";
// import authService from "../../redux/api/authService";
// import { useToast } from "../../components/shared/Toast";
// import { registerStarted, registerSucceeded, registerFailed } from "../../redux/slices/authSlice";
// import { ROUTES } from "../../lib/constants";

// export default function RegisterPage() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const toast = useToast();
//   const { isLoading, error } = useSelector((state) => state.auth);

//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       dispatch(registerFailed("Passwords do not match."));
//       toast.error("Passwords do not match.");
//       return;
//     }

//     dispatch(registerStarted());

//     try {
//       const data = await authService.register({ name, phone, email, password });
//       const authData = data?.data ?? data;

//       dispatch(
//         registerSucceeded({
//           token: authData?.token,
//           name: authData?.name,
//           role: authData?.role,
//           avatar: authData?.avatar,
//         })
//       );
//       toast.success("Account created successfully");

//       navigate(ROUTES.DASHBOARD, { replace: true });
//     } catch (requestError) {
//       const message = requestError?.message || "Unable to create account. Please try again.";
//       dispatch(registerFailed(message));
//       toast.error(message);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={onSubmit} className="relative w-full max-w-[590px] border border-gray-400 rounded-md pt-8 sm:pt-10 p-6 sm:p-8">
//       <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4">
//         <img src="/assets/logo-black.png" alt="Charles Prints Logo" className="w-[120px] sm:w-[150px] h-auto object-contain" />
//       </div>

//       <h2 className="text-2xl sm:text-[32px] font-semibold text-[#636363] mb-6">Create an account</h2>

//       <div className="flex flex-col gap-4">
//         <div className="flex flex-col gap-1">
//           <label className="block text-sm font-medium text-[#000116]"> Your name </label>
//           <input
//             type="text"
//             placeholder="ex: Adil Hasan"
//             className="w-full rounded-[8px] text-sm border border-[#636363]/20 bg-[#F3F3F3] px-4 py-3 placeholder:text-[#636363] outline-none"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         <div className="flex flex-col sm:flex-row gap-4">
//           <div className="flex flex-col gap-1 w-full sm:w-1/2">
//             <label className="block text-sm font-medium text-[#000116]"> Phone number </label>
//             <input
//               type="tel"
//               placeholder="ex: 0123456789"
//               className="w-full rounded-[8px] text-sm border border-[#636363]/20 bg-[#F3F3F3] px-4 py-3 placeholder:text-[#636363] outline-none"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//             />
//           </div>

//           <div className="flex flex-col gap-1 w-full sm:w-1/2">
//             <label className="block text-sm font-medium text-[#000116]"> Email </label>
//             <input
//               type="email"
//               placeholder="example@email.com"
//               className="w-full rounded-[8px] text-sm border border-[#636363]/20 bg-[#F3F3F3] px-4 py-3 placeholder:text-[#636363] outline-none"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//         </div>

//         <div className="flex flex-col gap-1">
//           <label className="block text-sm font-medium text-[#000116]"> Password </label>
//           <input
//             type="password"
//             placeholder="Enter a password"
//             className="w-full rounded-[8px] text-sm border border-[#636363]/20 bg-[#F3F3F3] px-4 py-3 placeholder:text-[#636363] outline-none"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         <div className="flex flex-col gap-1">
//           <label className="block text-sm font-medium text-[#000116]"> Re-enter password </label>
//           <input
//             type="password"
//             placeholder="Re-enter given password"
//             className="w-full rounded-[8px] text-sm border border-[#636363]/20 bg-[#F3F3F3] px-4 py-3 placeholder:text-[#636363] outline-none"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>

//         {error ? (
//           <p className="text-sm font-medium text-[#EF252C]">{error}</p>
//         ) : null}

//         <button
//           type="submit"
//           disabled={isLoading}
//           className="w-full py-3 rounded-md bg-[#EF252C] hover:bg-[#d81f26] text-white text-base sm:text-[16px] font-bold transition duration-200 disabled:opacity-60"
//         >
//           {isLoading ? "Creating..." : "Create"}
//         </button>
//       </div>

//       <p className="text-sm text-[#636363] leading-tight mt-4">
//         By continuing, you agree to Charles Prints
//         <a href="#" className="text-[#EF252C]">Conditions of Use</a>
//         and
//         <a href="#" className="text-[#EF252C]">Privacy Notice</a>.
//       </p>

//       <div className="flex items-center justify-center gap-3 mt-4">
//         <span className="text-sm text-[#636363]">or login with</span>
//       </div>

//       <div className="flex justify-center items-center gap-3 mt-1">
//         <img src="/assets/google-logo.png" alt="Google" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />

//         <img src="/assets/logo-facebook.png" alt="Facebook" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
//       </div>

//       <p className="text-center text-sm text-[#636363] mt-4">Already have an account? <a href="/login" className="text-[#EF252C] font-medium">Sign in</a></p>
//     </form>

//     <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-[#636363] mt-4 text-center">
//       <a href="#">Conditions of Use</a>
//       <a href="#">Privacy Notice</a>
//       <a href="#">Help</a>
//     </div>

//     <p className="text-xs text-[#000116] mt-3 text-center">© 2026, charlesprints.com</p>
//     </>
//   );
// }
