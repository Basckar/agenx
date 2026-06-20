"use client";
import { useEffect, useRef, useState } from "react";
import { X, ArrowLeft } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: Props) {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(120);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (!open) return;
    if (step !== "otp") return;
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, step, open]);

  useEffect(() => {
    if (!open) {
      setPhone("");
      setPhoneError("");
      setOtp(["", "", "", "", ""]);
      setStep("phone");
      setTimer(120);
    }
  }, [open]);

  // وقتی مرحله otp میشه، فوکوس روی اولین فیلد
  useEffect(() => {
    if (step === "otp") {
      inputsRef.current[otp.length - 1]?.focus();
    }
  }, [step]);

  if (!open) return null;

  // مدیریت تغییر شماره + اعتبارسنجی خودکار
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);

    // اگر شماره کامل شد (۱۱ رقم)
    if (value.length === 11) {
      const valid = /^09\d{9}$/;
      if (valid.test(value)) {
        setPhoneError("");
        setStep("otp");
      } else {
        setPhoneError("شماره همراه باید با 09 شروع شود و 11 رقم باشد");
      }
    } else {
      setPhoneError("");
    }
  };

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;
    const copy = [...otp];
    copy[index] = value;
    setOtp(copy);

    if (value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (!value && index < 4) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const resendCode = () => {
    setTimer(120);
    setOtp(["", "", "", "", ""]);
    inputsRef.current[otp.length - 1]?.focus();
  };

  const formatTime = () => {
    const m = Math.floor(timer / 60);
    const s = timer % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const goBackToPhone = () => {
    setStep("phone");
    setOtp(["", "", "", "", ""]);
    setTimer(120);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-xl">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full mx-auto flex h-[92vh] flex-col justify-center gap-6 max-w-md rounded-[36px] border border-white/10 bg-white/20 backdrop-blur-xl p-8 backdrop-blur-3xl">
        {step === "phone" && (
          <>
            <button
              onClick={onClose}
              className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:text-primary">
              <X size={18} />
            </button>

            <img src="/icones/logo.svg" alt="logo" className="h-12" />
            <h2 className="text-center text-3xl font-black">ثبت نام / ورود</h2>
            <p className="text-center text-md text- black/50">
              دانشت رو با ایجنت خودت به درامد برسون
            </p>

            <div className="relative w-full">
              <input
                value={phone}
                maxLength={11}
                onChange={handlePhoneChange}
                placeholder="شماره تماس"
                className={`w-full rounded-full border-2 px-8 py-4 outline-none transition-all duration-300 ${
                  phoneError
                    ? "border-states-error2 bg-states-error2/10"
                    : "border-white/30 bg-white/5"
                }`}
              />
              {phone.length > 0 && (
                <button
                  onClick={() => {
                    setPhone("");
                    setPhoneError("");
                    const input = document.querySelector(
                      'input[placeholder="09123456789"]',
                    ) as HTMLInputElement;
                    input?.focus();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2  w-8 h-8 flex items-center justify-center   rounded-full border-2 border-white/30  hover:border-states-error2 hover:bg-states-error2/20  hover:scale-110 transition-all duration-300  bg-transparent cursor-pointer"
                  aria-label="پاک کردن شماره">
                  <X
                    size={18}
                    className="text-white/50 hover:text-states-error2 transition-colors duration-200"
                  />
                </button>
              )}
            </div>

            {/* نمایش پیام خطا */}
            {phoneError && (
              <p className="mt-1 text-sm text-states-error2 text-center">
                {phoneError}
              </p>
            )}
          </>
        )}

        {step === "otp" && (
          <>
            <button
              onClick={goBackToPhone}
              className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
              <ArrowLeft size={18} className="text-white" />
            </button>
            <img src="/icones/logo.svg" alt="logo" className="mb-2 h-12" />

            <h2 className="mb-3 text-center text-3xl font-black">
              ثبت نام / ورود
            </h2>

            <p className="mb-2 text-center text-sm text- black/50">
              کد تایید به <span className="mx-2 text-white">{phone}</span> ارسال
              شد
            </p>

            {/* ۵ فیلد OTP */}
            <div className="flex justify-center gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputsRef.current[index] = el;
                  }}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  maxLength={1}
                  className="h-14 w-14 rounded-full border-2 border-white/20 bg-white/5 text-center text-xl outline-none focus:border-primary"
                />
              ))}
            </div>

            <div className=" text-center text-sm">
              {timer > 0 ? (
                <span className="text- black/50">
                  ارسال مجدد تا {formatTime()}
                </span>
              ) : (
                <button onClick={resendCode} className="text-primary">
                  ارسال مجدد کد
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
