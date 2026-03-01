"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";

type FormState = {
  title: string;
  description: string;
  date: string;
  category: string;
};

const initialState: FormState = {
  title: "",
  description: "",
  date: new Date().toISOString().slice(0, 10),
  category: "",
};

async function uploadToCloudinary(file: File) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error(
      "Cloudinary env missing: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET"
    );
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    throw new Error("Cloudinary upload failed");
  }

  const data = await res.json();
  return data.secure_url as string;
}

export default function BlogCreatePage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChange =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!coverFile) {
      setMessage("Cover image is required.");
      return;
    }

    try {
      setLoading(true);
      const coverImage = await uploadToCloudinary(coverFile);

      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          date: new Date(form.date).toISOString(),
          type: form.category || undefined,
          coverImage,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.message || "Failed to create blog");
      }

      setForm(initialState);
      setCoverFile(null);
      setMessage(`Blog created: ${data?.blog?.slug || ""}`);
    } catch (error: any) {
      setMessage(error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,#f3f8ff_0%,#edf6ff_42%,#f7fbff_100%)]" />
      <div className="relative mx-auto w-full max-w-[1000px] px-4 md:px-6">
        <div className="rounded-[24px] border border-primary/15 bg-white/90 p-6 shadow-[0_18px_40px_rgba(47,115,242,0.14)] md:p-8">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-13 font-semibold uppercase tracking-[0.12em] text-primary">Blog CMS</p>
              <h1 className="mt-2 text-30 font-semibold text-midnight_text md:text-36">Create New Blog</h1>
            </div>
            <Link href="/blog" className="rounded-full border border-primary/20 px-4 py-2 text-14 font-semibold text-primary">
              View Blogs
            </Link>
          </div>

          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-5">
            <div>
              <label className="mb-2 block text-14 font-semibold text-midnight_text">Title *</label>
              <input
                required
                value={form.title}
                onChange={onChange("title")}
                className="w-full rounded-xl border border-primary/20 px-4 py-3 text-15 outline-none focus:border-primary"
                placeholder="Enter blog title"
              />
            </div>

            <div>
              <label className="mb-2 block text-14 font-semibold text-midnight_text">Description *</label>
              <textarea
                required
                value={form.description}
                onChange={onChange("description")}
                className="h-56 w-full rounded-xl border border-primary/20 px-4 py-3 text-15 outline-none focus:border-primary"
                placeholder="Write blog description..."
              />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-14 font-semibold text-midnight_text">Date *</label>
                <input
                  required
                  type="date"
                  value={form.date}
                  onChange={onChange("date")}
                  className="w-full rounded-xl border border-primary/20 px-4 py-3 text-15 outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-2 block text-14 font-semibold text-midnight_text">Category (Optional)</label>
                <select
                  value={form.category}
                  onChange={onChange("category")}
                  className="w-full rounded-xl border border-primary/20 px-4 py-3 text-15 outline-none focus:border-primary"
                >
                  <option value="">Select category</option>
                  <option value="Heavy Engineering">Heavy Engineering</option>
                  <option value="Renewable Energy">Renewable Energy</option>
                  <option value="Wealth Management">Wealth Management</option>
                  <option value="Robotics">Robotics</option>
                  <option value="News">News</option>
                  <option value="Project Update">Project Update</option>
                </select>
              </div>
              <div>
                <label className="mb-2 block text-14 font-semibold text-midnight_text">Cover Image *</label>
                <input
                  required
                  type="file"
                  accept="image/*"
                  onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
                  className="w-full rounded-xl border border-primary/20 px-4 py-2.5 text-15 outline-none file:mr-3 file:rounded-md file:border-0 file:bg-primary/10 file:px-3 file:py-1.5 file:font-medium file:text-primary"
                />
              </div>
            </div>

            <div className="mt-1 flex items-center justify-between gap-4">
              <p className="text-14 text-muted">{message}</p>
              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-primary px-7 py-3 text-15 font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Publishing..." : "Publish Blog"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
