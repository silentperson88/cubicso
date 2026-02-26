"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import countryOptions from "@/data/countries.json";

type SubmitState = {
  type: "idle" | "success" | "error";
  message: string;
};

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const serviceOptions = [
  "Heavy Engineering",
  "Renewable Energy",
  "Wealth Management",
  "AI Robotics and Automation",
];

type ThemedSelectProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
};

const ThemedSelect = ({
  name,
  value,
  onChange,
  options,
  placeholder,
}: ThemedSelectProps) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="relative w-full cursor-pointer rounded-xl border border-primary/25 bg-[linear-gradient(145deg,#ffffff_0%,#f3f8ff_100%)] px-4 py-3 pr-10 text-left text-15 font-semibold text-midnight_text shadow-[0_6px_16px_rgba(47,115,242,0.10)] outline-none transition-all hover:border-primary/45 focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        <span className={value ? "text-midnight_text" : "text-muted"}>
          {value || placeholder}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-primary/75">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 10l5 5l5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {open && (
        <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-xl border border-primary/20 bg-white shadow-[0_14px_30px_rgba(47,115,242,0.16)]">
          <ul className="max-h-52 overflow-y-auto py-1">
            {options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={`w-full px-4 py-2.5 text-left text-14 transition-colors ${
                    value === option
                      ? "bg-primary/10 font-semibold text-primary"
                      : "text-midnight_text hover:bg-primary/8"
                  }`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const ProjectInquiryWeb3Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [country, setCountry] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "idle",
    message: "",
  });

  const hasAccessKey = useMemo(() => Boolean(ACCESS_KEY), []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState({ type: "idle", message: "" });

    if (!projectType || !country) {
      setSubmitState({
        type: "error",
        message: "Please select both Project Type and Country.",
      });
      return;
    }

    if (!ACCESS_KEY) {
      setSubmitState({
        type: "error",
        message:
          "Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env. Add it and restart the app.",
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const companyName = String(formData.get("company_name") ?? "");
    const designation = String(formData.get("designation") ?? "");
    const email = String(formData.get("email") ?? "");
    const phoneNumber = String(formData.get("phone_number") ?? "");
    const description = String(formData.get("description") ?? "");
    const submittedAt = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const plainTemplate = [
      "CUBICSO - PROJECT INQUIRY",
      "=========================",
      `Name: ${name}`,
      `Project Type: ${projectType}`,
      `Company Name: ${companyName}`,
      `Designation: ${designation}`,
      `Email: ${email}`,
      `Phone Number: ${phoneNumber}`,
      `Country: ${country}`,
      `Submitted At: ${submittedAt}`,
      "",
      "Description:",
      description,
    ].join("\n");

    const payload = {
      access_key: ACCESS_KEY,
      subject: "New Project Inquiry - Cubicso Website",
      from_name: "Cubicso Project Inquiry Form",
      replyto: email,
      botcheck: "",
      name,
      project_type: projectType,
      company_name: companyName,
      designation,
      email,
      phone_number: phoneNumber,
      country,
      description,
      message: plainTemplate,
    };

    try {
      setIsSubmitting(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitState({
          type: "success",
          message: "Project inquiry submitted successfully.",
        });
        setIsSubmitted(true);
        return;
      }

      setSubmitState({
        type: "error",
        message: result.message || "Unable to submit the inquiry right now.",
      });
    } catch {
      setSubmitState({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mt-7 grid gap-5" onSubmit={handleSubmit}>
      <input type="hidden" name="botcheck" className="hidden" />
      {isSubmitted ? (
        <div className="rounded-xl border border-emerald-300/45 bg-emerald-50 p-5">
          <p className="text-14 font-medium text-emerald-700">
            {submitState.message || "Project inquiry submitted successfully."}
          </p>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setSubmitState({ type: "idle", message: "" });
              setProjectType("");
              setCountry("");
            }}
            className="mt-4 inline-flex cursor-pointer items-center justify-center rounded-lg border border-emerald-600 bg-emerald-600 px-4 py-2 text-14 font-semibold text-white transition-colors hover:bg-transparent hover:text-emerald-700"
          >
            Submit New Form
          </button>
        </div>
      ) : (
        <>
      <div>
        <label className="mb-2 block text-14 font-semibold text-midnight_text">Name</label>
        <input name="name" required type="text" className="w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-15 shadow-[0_2px_10px_rgba(47,115,242,0.06)] outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
      </div>
      <div>
        <label className="mb-2 block text-14 font-semibold text-midnight_text">Project Type</label>
        <ThemedSelect
          name="project_type"
          value={projectType}
          onChange={setProjectType}
          options={serviceOptions}
          placeholder="Select Project Type"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-14 font-semibold text-midnight_text">Company Name</label>
          <input name="company_name" required type="text" className="w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-15 shadow-[0_2px_10px_rgba(47,115,242,0.06)] outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
        </div>
        <div>
          <label className="mb-2 block text-14 font-semibold text-midnight_text">Designation</label>
          <input name="designation" required type="text" className="w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-15 shadow-[0_2px_10px_rgba(47,115,242,0.06)] outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-14 font-semibold text-midnight_text">Email</label>
          <input name="email" required type="email" className="w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-15 shadow-[0_2px_10px_rgba(47,115,242,0.06)] outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
        </div>
        <div>
          <label className="mb-2 block text-14 font-semibold text-midnight_text">Phone Number</label>
          <input name="phone_number" required type="tel" className="w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-15 shadow-[0_2px_10px_rgba(47,115,242,0.06)] outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-14 font-semibold text-midnight_text">Country</label>
        <ThemedSelect
          name="country"
          value={country}
          onChange={setCountry}
          options={countryOptions}
          placeholder="Select Country"
        />
      </div>
      <div>
        <label className="mb-2 block text-14 font-semibold text-midnight_text">Description</label>
        <textarea name="description" required rows={6} className="w-full rounded-xl border border-primary/20 bg-white px-4 py-3 text-15 shadow-[0_2px_10px_rgba(47,115,242,0.06)] outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting || !hasAccessKey}
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-primary/80 bg-[linear-gradient(110deg,#2f73f2_0%,#46c4ff_100%)] px-6 py-3 text-15 font-semibold text-white shadow-[0_12px_26px_rgba(47,115,242,0.30)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(47,115,242,0.38)] disabled:cursor-not-allowed disabled:opacity-60 md:w-fit"
      >
        {isSubmitting ? "Sending..." : "Submit Project Inquiry"}
        <span aria-hidden="true">&rarr;</span>
      </button>

      {submitState.type !== "idle" && (
        <p
          className={`rounded-lg border px-3 py-2 text-14 font-medium ${
            submitState.type === "success"
              ? "border-emerald-300/45 bg-emerald-50 text-emerald-700"
              : "border-rose-300/45 bg-rose-50 text-rose-700"
          }`}
        >
          {submitState.message}
        </p>
      )}
        </>
      )}
    </form>
  );
};

export default ProjectInquiryWeb3Form;
