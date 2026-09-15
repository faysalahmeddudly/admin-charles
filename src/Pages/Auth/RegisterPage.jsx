export default function RegisterPage() {
  return (
    <>
      <div className="relative w-full max-w-[590px] border border-gray-400 rounded-md pt-8 sm:pt-10 p-6 sm:p-8">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4">
        <img src="assets/logo-black.png" alt="Charles Prints Logo" className="w-[120px] sm:w-[150px] h-auto object-contain" />
      </div>

      <h2 className="text-2xl sm:text-[32px] font-semibold text-[#636363] mb-6">Create an account</h2>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="block text-sm font-medium text-[#000116]"> Your name </label>
          <input type="text" placeholder="ex: Adil Hasan" className="w-full rounded-[8px] text-sm border border-[#636363]/20 bg-[#F3F3F3] px-4 py-3 placeholder:text-[#636363] outline-none" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-1 w-full sm:w-1/2">
            <label className="block text-sm font-medium text-[#000116]"> Phone number </label>
            <input type="tel" placeholder="ex: 0123456789" className="w-full rounded-[8px] text-sm border border-[#636363]/20 bg-[#F3F3F3] px-4 py-3 placeholder:text-[#636363] outline-none" />
          </div>

          <div className="flex flex-col gap-1 w-full sm:w-1/2">
            <label className="block text-sm font-medium text-[#000116]"> Email </label>
            <input type="email" placeholder="example@email.com" className="w-full rounded-[8px] text-sm border border-[#636363]/20 bg-[#F3F3F3] px-4 py-3 placeholder:text-[#636363] outline-none" />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="block text-sm font-medium text-[#000116]"> Password </label>
          <input type="password" placeholder="Enter a password" className="w-full rounded-[8px] text-sm border border-[#636363]/20 bg-[#F3F3F3] px-4 py-3 placeholder:text-[#636363] outline-none" />
        </div>

        <div className="flex flex-col gap-1">
          <label className="block text-sm font-medium text-[#000116]"> Re-enter password </label>
          <input type="password" placeholder="Re-enter given password" className="w-full rounded-[8px] text-sm border border-[#636363]/20 bg-[#F3F3F3] px-4 py-3 placeholder:text-[#636363] outline-none" />
        </div>

        <button className="w-full py-3 rounded-md bg-[#EF252C] hover:bg-[#d81f26] text-white text-base sm:text-[16px] font-bold transition duration-200">Create</button>
      </div>

      <p className="text-sm text-[#636363] leading-tight mt-4">
        By continuing, you agree to Charles Prints
        <a href="#" className="text-[#EF252C]">Conditions of Use</a>
        and
        <a href="#" className="text-[#EF252C]">Privacy Notice</a>.
      </p>

      <div className="flex items-center justify-center gap-3 mt-4">
        <span className="text-sm text-[#636363]">or login with</span>
      </div>

      <div className="flex justify-center items-center gap-3 mt-1">
        <img src="assets/google-logo.png" alt="Google" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />

        <img src="assets/logo-facebook.png" alt="Facebook" className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
      </div>

      <p className="text-center text-sm text-[#636363] mt-4">Already have an account? <a href="#" className="text-[#EF252C] font-medium">Sign in</a></p>
    </div>

    <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-[#636363] mt-4 text-center">
      <a href="#">Conditions of Use</a>
      <a href="#">Privacy Notice</a>
      <a href="#">Help</a>
    </div>

    <p className="text-xs text-[#000116] mt-3 text-center">© 2026, charlesprints.com</p>
    </>
  );
}
