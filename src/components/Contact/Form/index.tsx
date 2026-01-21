/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useMemo, useState } from "react";
import Trans from "@/components/i18n/Trans";
import { validateEmail } from "@/utils/validateEmail";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorText, setErrorText] = useState<string>("");

  const isEmailValid = useMemo(() => {
    if (!email.trim()) return true;
    return Boolean(validateEmail(email.trim()));
  }, [email]);

  const canSubmit =
    status !== "submitting" &&
    name.trim().length > 0 &&
    email.trim().length > 0 &&
    Boolean(validateEmail(email.trim())) &&
    message.trim().length > 0;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText("");

    if (!canSubmit) {
      setStatus("error");
      setErrorText("Lütfen gerekli alanları doğru şekilde doldurun.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        setStatus("error");
        setErrorText("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorText("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <>
      <section className="bg-AliceBlue dark:bg-darkmode md:py-24 py-12">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="sm:text-[40px] sm:leading-[3rem] text-[28px] leading-[2.25rem] font-bold text-secondary dark:text-white mb-3">
              <Trans tr="Bana Mesaj Gönder" en="Send me a message" />
            </h2>
            <p className="text-SlateBlue dark:text-white/90 text-lg mb-10 leading-relaxed max-w-2xl">
              <Trans
                tr="Formu doldurup mesajını gönderebilirsin. En kısa sürede dönüş yapacağım."
                en="Fill out the form and send your message. I'll get back to you as soon as possible."
              />
            </p>

            <div className="rounded-2xl bg-white dark:bg-darklight border border-BorderLine dark:border-dark_border shadow-lg shadow-light-shadwo dark:shadow-darkmd p-6 sm:p-8 md:p-10">
              <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6">
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                  <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="pb-2 inline-block text-base text-secondary dark:text-white"
                  >
                    <Trans tr="Ad Soyad*" en="Full name*" />
                  </label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-base px-5 py-3.5 rounded-xl border border-BorderLine dark:border-dark_border text-secondary dark:text-white bg-white dark:bg-darkmode/40 transition-all duration-300 focus:outline-0 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20"
                    type="text"
                    autoComplete="name"
                    required
                  />
                  </div>

                  <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="pb-2 inline-block text-base text-secondary dark:text-white"
                  >
                    <Trans tr="E-posta*" en="Email*" />
                  </label>
                  <input
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full text-base px-5 py-3.5 rounded-xl border text-secondary dark:text-white bg-white dark:bg-darkmode/40 transition-all duration-300 focus:outline-0 focus:ring-2 ${
                      isEmailValid
                        ? "border-BorderLine dark:border-dark_border focus:border-primary dark:focus:border-primary focus:ring-primary/20"
                        : "border-red-400 focus:border-red-400 dark:border-red-500 focus:ring-red-400/20"
                    }`}
                    type="email"
                    autoComplete="email"
                    required
                  />
                  {!isEmailValid && (
                    <p className="text-sm text-red-500 mt-2">
                      <Trans tr="Geçerli bir e-posta girin." en="Enter a valid email." />
                    </p>
                  )}
                  </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="pb-2 inline-block text-base text-secondary dark:text-white"
                >
                  <Trans tr="Konu" en="Subject" />
                </label>
                <input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full text-base px-5 py-3.5 rounded-xl border border-BorderLine dark:border-dark_border text-secondary dark:text-white bg-white dark:bg-darkmode/40 transition-all duration-300 focus:outline-0 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20"
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="pb-2 inline-block text-base text-secondary dark:text-white"
                >
                  <Trans tr="Mesaj*" en="Message*" />
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-base px-5 py-3.5 rounded-xl border border-BorderLine dark:border-dark_border text-secondary dark:text-white bg-white dark:bg-darkmode/40 transition-all duration-300 focus:outline-0 focus:border-primary dark:focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[180px] resize-y"
                  required
                />
              </div>

              {status === "success" && (
                <div className="rounded-lg border border-green-400/50 bg-green-500/10 px-4 py-3 text-green-600 dark:text-green-400">
                  <Trans tr="Mesajın gönderildi. Teşekkürler!" en="Your message has been sent. Thank you!" />
                </div>
              )}

              {status === "error" && (
                <div className="rounded-lg border border-red-400/50 bg-red-500/10 px-4 py-3 text-red-600 dark:text-red-400">
                  {errorText || (
                    <Trans tr="Mesaj gönderilemedi." en="Message could not be sent." />
                  )}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`rounded-xl text-white py-4 px-10 inline-flex items-center justify-center transition-all duration-300 font-medium shadow-lg ${
                    canSubmit
                      ? "bg-primary hover:bg-blue-700 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                      : "bg-primary/50 cursor-not-allowed"
                  }`}
                >
                  {status === "submitting" ? (
                    <Trans tr="Gönderiliyor..." en="Sending..." />
                  ) : (
                    <Trans tr="Mesaj Gönder" en="Send Message" />
                  )}
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm
