"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  IoClose,
  IoShieldCheckmarkOutline,
  IoSparklesOutline,
  IoCheckmarkCircle,
  IoArrowBack,
  IoCallOutline,
} from "react-icons/io5";

export default function LoginModal({ isOpen, onClose }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState("phone"); // 'phone' | 'otp' | 'success'
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const otpInputRefs = useRef([]);

  // Close on Escape key & manage scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
      // Reset state on close
      setTimeout(() => {
        setStep("phone");
        setPhoneNumber("");
        setOtp(["", "", "", ""]);
        setError("");
        setIsLoading(false);
      }, 200);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Resend OTP countdown timer
  useEffect(() => {
    let interval = null;
    if (step === "otp" && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  if (!isOpen) return null;

  // Handle phone submission
  const handleSendOtp = (e) => {
    e.preventDefault();
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    if (cleanNumber.length !== 10) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    setError("");
    setIsLoading(true);

    // Simulate OTP generation
    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
      setTimer(30);
    }, 700);
  };

  // Handle single digit OTP change
  const handleOtpChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Auto-advance to next box
    if (value && index < 3) {
      otpInputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp.some((digit) => digit === "")) {
      setError("Please enter the complete 4-digit code");
      return;
    }
    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setStep("success");
      setTimeout(() => {
        onClose();
      }, 1500);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dimmed backdrop with blur */}
      <div
        className="fixed inset-0 bg-[#031d42]/60 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-[0_25px_70px_rgba(3,29,66,0.3)] overflow-hidden z-10 grid grid-cols-1 md:grid-cols-12 border border-[#e2e8f4] animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-white/90 hover:bg-[#f4f7ff] text-[#4a5a7a] hover:text-[#031d42] flex items-center justify-center transition-all shadow-sm border border-[#e2e8f4] cursor-pointer"
        >
          <IoClose className="w-5 h-5" />
        </button>

        {/* ── Left Column: Luxury Jewellery Image & Brand Message ── */}
        <div className="md:col-span-5 relative bg-[#031d42] text-white p-8 flex flex-col justify-between overflow-hidden min-h-[220px] md:min-h-[490px]">
          {/* Background Jewellery Image with Rich Luxury Overlay */}
          <Image
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=85"
            alt="CaratLuxe Lab Diamond Ring"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover opacity-35 mix-blend-luminosity scale-105"
            priority
          />
          {/* Subtle gold radial shimmer */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(201,168,76,0.25) 0%, transparent 65%), linear-gradient(to top, #031d42 10%, rgba(3,29,66,0.7) 100%)",
            }}
          />

          {/* Top Brand Tag */}
          <div className="relative z-10">
            <h3 className="mt-4 text-2xl font-bold text-white tracking-wide leading-tight">
              Brilliance, <br />
              <span className="text-[#c9a84c]">Pure & Ethical.</span>
            </h3>
          </div>

          {/* Bottom Perks */}
          <div className="relative z-10 mt-6 md:mt-0 space-y-2.5">
            <div className="flex items-center gap-2.5 text-xs text-white/85">
              <span className="w-5 h-5 rounded-full bg-[#c9a84c]/20 text-[#c9a84c] flex items-center justify-center shrink-0">
                ✓
              </span>
              <span>100% Certified Lab-Grown Diamonds</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/85">
              <span className="w-5 h-5 rounded-full bg-[#c9a84c]/20 text-[#c9a84c] flex items-center justify-center shrink-0">
                ✓
              </span>
              <span>Track orders & tailored recommendations</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/85">
              <span className="w-5 h-5 rounded-full bg-[#c9a84c]/20 text-[#c9a84c] flex items-center justify-center shrink-0">
                ✓
              </span>
              <span>Lifetime upgrade & complimentary care</span>
            </div>
          </div>
        </div>

        {/* ── Right Column: Login / OTP Form ── */}
        <div className="md:col-span-7 p-6 sm:p-9 flex flex-col justify-center bg-white">
          {/* STEP 1: Enter Phone Number */}
          {step === "phone" && (
            <div>
              <div className="mb-6">
                <p className="text-[11px] font-bold tracking-[0.2em] text-[#c9a84c] ">
                  Account Access
                </p>
                <h2 className="text-2xl font-bold text-[#0d1535] mt-1">
                  Login or Register
                </h2>
                <p className="text-xs sm:text-sm text-[#4a5a7a] mt-1">
                  Enter your mobile number to receive a one-time verification passcode.
                </p>
              </div>

              <form onSubmit={handleSendOtp} className="space-y-4">
                {/* Mobile Input with +91 Country Badge */}
                <div>
                  <label
                    htmlFor="phone-input"
                    className="block text-xs font-semibold text-[#0d1535] mb-1.5  tracking-wider"
                  >
                    Mobile Number
                  </label>
                  <div className="relative flex items-center rounded-xl border border-[#d2dcf0] focus-within:border-[#c9a84c] focus-within:ring-2 focus-within:ring-[#c9a84c]/20 transition-all bg-[#f8faff]">
                    {/* Country Code Pill */}
                    <div className="flex items-center gap-1.5 px-3 py-3 border-r border-[#d2dcf0] bg-[#eef3fb] text-[#0d1535] font-semibold text-sm select-none">
                      <span className="text-base leading-none">🇮🇳</span>
                      <span>+91</span>
                    </div>

                    {/* Phone Input */}
                    <input
                      id="phone-input"
                      type="tel"
                      maxLength={10}
                      value={phoneNumber}
                      onChange={(e) => {
                        setPhoneNumber(e.target.value.replace(/\D/g, ""));
                        if (error) setError("");
                      }}
                      placeholder="Enter 10-digit number"
                      autoFocus
                      className="w-full px-4 py-3 text-sm text-[#0d1535] placeholder-[#9aa8c2] bg-transparent focus:outline-none font-medium tracking-wide"
                    />

                    <IoCallOutline className="mr-3 w-5 h-5 text-[#8a9ab8]" />
                  </div>
                  {error && (
                    <p className="text-xs text-red-600 mt-1.5 font-medium">
                      {error}
                    </p>
                  )}
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#031d42] hover:bg-[#c9a84c] text-white hover:text-[#031d42] font-bold text-xs sm:text-sm tracking-widest  py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Continue with Mobile</span>
                      <span className="text-base font-normal">→</span>
                    </>
                  )}
                </button>
              </form>

              {/* Disclaimer */}
              <p className="text-[11px] text-[#8a9ab8] text-center mt-6 leading-normal">
                By continuing, you agree to CaratLuxe&apos;s{" "}
                <a href="#" className="underline hover:text-[#c9a84c]">
                  Terms of Service
                </a>{" "}
                &{" "}
                <a href="#" className="underline hover:text-[#c9a84c]">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          )}

          {/* STEP 2: Enter OTP */}
          {step === "otp" && (
            <div>
              <button
                type="button"
                onClick={() => {
                  setStep("phone");
                  setError("");
                }}
                className="inline-flex items-center gap-1.5 text-xs text-[#4a5a7a] hover:text-[#031d42] font-semibold mb-4 cursor-pointer"
              >
                <IoArrowBack className="w-4 h-4" />
                Change number
              </button>

              <div className="mb-5">
                <h2 className="text-2xl font-bold text-[#0d1535]">
                  Verify Passcode
                </h2>
                <p className="text-xs sm:text-sm text-[#4a5a7a] mt-1">
                  We sent a 4-digit code to{" "}
                  <span className="font-bold text-[#0d1535]">
                    +91 {phoneNumber}
                  </span>
                </p>
              </div>

              <form onSubmit={handleVerifyOtp} className="space-y-5">
                {/* 4-Box OTP Input */}
                <div className="flex justify-center gap-3 sm:gap-4 my-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (otpInputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      autoFocus={index === 0}
                      className="w-12 h-14 sm:w-14 sm:h-16 text-center text-xl font-bold text-[#0d1535] bg-[#f8faff] border border-[#d2dcf0] focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 rounded-xl focus:outline-none transition-all"
                    />
                  ))}
                </div>

                {error && (
                  <p className="text-xs text-red-600 text-center font-medium">
                    {error}
                  </p>
                )}

                {/* Verify Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#031d42] hover:bg-[#c9a84c] text-white hover:text-[#031d42] font-bold text-xs sm:text-sm tracking-widest  py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <span>Verify & Login</span>
                  )}
                </button>

                {/* Resend Timer */}
                <div className="text-center pt-2">
                  {timer > 0 ? (
                    <p className="text-xs text-[#8a9ab8]">
                      Resend code in{" "}
                      <span className="font-semibold text-[#0d1535]">
                        00:{timer < 10 ? `0${timer}` : timer}
                      </span>
                    </p>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setTimer(30);
                        setError("");
                      }}
                      className="text-xs font-bold text-[#c9a84c] hover:underline cursor-pointer"
                    >
                      Resend OTP via SMS
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}

          {/* STEP 3: Success Confirmation */}
          {step === "success" && (
            <div className="text-center py-8 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#eefaf4] text-[#1b7a5a] flex items-center justify-center mx-auto mb-4">
                <IoCheckmarkCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold text-[#0d1535]">
                Welcome to CaratLuxe!
              </h2>
              <p className="text-sm text-[#4a5a7a] mt-1.5 max-w-xs mx-auto">
                You are successfully logged in. Redirecting to your curated collection…
              </p>
              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#c9a84c] font-semibold">
                <IoShieldCheckmarkOutline className="w-4 h-4" />
                <span>Verified Diamond Privilege</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

