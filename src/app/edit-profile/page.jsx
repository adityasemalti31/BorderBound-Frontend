
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import {
  FaArrowLeft,
  FaSave,
  FaUser,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaPhone,
  FaShareAlt,
  FaCamera,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
  FaShieldAlt,
  FaIdCard,
} from "react-icons/fa";

import { useContestantStore } from "@/store/contestantStore";
import api from "@/lib/api";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#111] px-4 py-3 text-sm text-white placeholder:text-gray-600 outline-none transition-all focus:border-red-500/70 focus:ring-2 focus:ring-red-500/10";

const labelClass =
  "mb-2 block text-xs font-bold uppercase tracking-wider text-gray-400";

const initialForm = {
  fullName: "",
  dob: "",
  gender: "",
  mobile: "",
  city: "",
  state: "",
  permanentAddress: "",
  occupation: "",
  education: "",
  bio: "",
  emergencyName: "",
  emergencyMobile: "",
  emergencyRelation: "",
  instagram: "",
  facebook: "",
  youtube: "",
  twitter: "",
};

const Section = ({ icon: Icon, title, description, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-5 sm:p-7"
  >
    <div className="mb-6 flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-500">
        <Icon size={20} />
      </div>

      <div>
        <h2 className="text-base font-black text-white">{title}</h2>
        <p className="mt-1 text-xs text-gray-500">{description}</p>
      </div>
    </div>

    {children}
  </motion.section>
);

const Field = ({ label, children }) => (
  <div>
    <label className={labelClass}>{label}</label>
    {children}
  </div>
);

export default function EditProfilePage() {
  const router = useRouter();
  const { myProfile, fetchMyProfile } = useContestantStore();

  const [form, setForm] = useState(initialForm);
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState("");
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  const [identityProof, setIdentityProof] = useState(null);

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  useEffect(() => {
    const loadProfile = async () => {
      try {
        await fetchMyProfile();
      } catch (error) {
        console.error("Profile loading error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [fetchMyProfile]);

  useEffect(() => {
    if (!myProfile) return;

    const emergency = myProfile.emergencyContact || {};
    const social = myProfile.socialMedia || {};

    setForm({
      fullName: myProfile.fullName || "",
      dob: myProfile.dob
        ? new Date(myProfile.dob).toISOString().split("T")[0]
        : "",
      gender: myProfile.gender || "",
      mobile: myProfile.mobile || "",
      city: myProfile.city || "",
      state: myProfile.state || "",
      permanentAddress: myProfile.permanentAddress || "",
      occupation: myProfile.occupation || "",
      education: myProfile.education || "",
      bio: myProfile.bio || "",

      emergencyName: emergency.name || emergency.fullName || "",
      emergencyMobile: emergency.phone || emergency.mobile || "",
      emergencyRelation: emergency.relation || "",

      instagram: social.instagram || "",
      facebook: social.facebook || "",
      youtube: social.youtube || "",
      twitter: social.twitter || social.x || "",
    });

    setPreview(myProfile.profilePhotoUrl || "");
  }, [myProfile]);

  const existingIdentityProof = myProfile?.documents?.find(
    (doc) => doc.docType === "identity_proof"
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setMessage({
        type: "error",
        text: "Please select JPG, PNG or WEBP image.",
      });
      e.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setMessage({
        type: "error",
        text: "Image size must be under 10 MB.",
      });
      e.target.value = "";
      return;
    }

    setPhoto(file);
    setPreview(URL.createObjectURL(file));
    setMessage({ type: "", text: "" });
  };

  const handleIdentityProof = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf",
    ];

    if (!allowedTypes.includes(file.type)) {
      setMessage({
        type: "error",
        text: "Only JPG, PNG, WEBP and PDF files are allowed.",
      });
      e.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setMessage({
        type: "error",
        text: "Identity proof size must be under 10 MB.",
      });
      e.target.value = "";
      return;
    }

    setIdentityProof(file);
    setMessage({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (saving) return;

    setSaving(true);
    setMessage({ type: "", text: "" });

    try {
      const formData = new FormData();

      formData.append("fullName", form.fullName.trim());
      formData.append("dob", form.dob);
      formData.append("gender", form.gender);
      formData.append("mobile", form.mobile);
      formData.append("city", form.city);
      formData.append("state", form.state);
      formData.append("permanentAddress", form.permanentAddress);
      formData.append("occupation", form.occupation);
      formData.append("education", form.education);
      formData.append("bio", form.bio);

      const socialMedia = {
        instagram: form.instagram,
        facebook: form.facebook,
        youtube: form.youtube,
        twitter: form.twitter,
      };

      formData.append("socialMedia", JSON.stringify(socialMedia));

      const emergencyContact = {
        name: form.emergencyName,
        phone: form.emergencyMobile,
        relation: form.emergencyRelation,
      };

      formData.append(
        "emergencyContact",
        JSON.stringify(emergencyContact)
      );

      if (photo instanceof File) {
        formData.append("profilePhoto", photo, photo.name);
      }

      // Actual identity proof File, not JSON object.
      if (identityProof instanceof File) {
        formData.append(
          "identityProof",
          identityProof,
          identityProof.name
        );
      }

      console.log("EDIT PROFILE FORMDATA");

      for (const [key, value] of formData.entries()) {
        console.log(
          key,
          value instanceof File
            ? {
                name: value.name,
                type: value.type,
                size: value.size,
                isFile: true,
              }
            : value
        );
      }

      console.log(
        "Identity proof is File:",
        formData.get("identityProof") instanceof File
      );

      const uploadedFile = formData.get("identityProof");

console.log("IDENTITY PROOF:", uploadedFile);
console.log("IS FILE:", uploadedFile instanceof File);
console.log("FILE NAME:", uploadedFile?.name);
console.log("FILE TYPE:", uploadedFile?.type);
console.log("FILE SIZE:", uploadedFile?.size);

console.log("ALL FORMDATA:");

for (const [key, value] of formData.entries()) {
  console.log(
    key,
    value instanceof File
      ? `${value.name} | ${value.type} | ${value.size} bytes`
      : value
  );
}

      await api.put("/contestants/edit-profile", formData);

      await fetchMyProfile();

      setPhoto(null);
      setIdentityProof(null);

      const identityInput = document.getElementById("identityProof");
      if (identityInput) identityInput.value = "";

      const photoInput = document.getElementById("profilePhoto");
      if (photoInput) photoInput.value = "";

      setMessage({
        type: "success",
        text: "Your profile has been updated successfully!",
      });

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Profile update error:", error);

      setMessage({
        type: "error",
        text:
          error.response?.data?.message ||
          error.response?.data?.error ||
          error.message ||
          "Unable to update profile.",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-4">
          <FaSpinner className="animate-spin text-red-500" size={36} />
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
            Loading Profile
          </p>
        </div>
      </div>
    );
  }

  if (!myProfile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-5 text-center">
        <div>
          <FaExclamationCircle
            className="mx-auto mb-4 text-red-500"
            size={40}
          />

          <h2 className="text-xl font-black text-white">
            Profile Not Found
          </h2>

          <button
            onClick={() => router.push("/dashboard")}
            className="mt-5 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black pb-16 text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-red-600/[0.08] blur-[120px]" />
        <div className="absolute right-0 top-[45%] h-72 w-72 rounded-full bg-red-900/[0.06] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 pt-8 sm:px-6 sm:pt-12">
        <motion.button
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => router.push("/dashboard")}
          className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-gray-400 transition hover:text-white"
        >
          <FaArrowLeft size={15} />
          Back to Dashboard
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-9"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-red-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">
              Contestant Portal
            </span>
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
            EDIT YOUR <span className="text-red-500">PROFILE.</span>
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
            Keep your information accurate and let the BorderBound community
            know more about you.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-5 sm:p-7"
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-red-600/[0.08] blur-[70px]" />

            <div className="relative flex flex-col items-center gap-5 sm:flex-row">
              <div className="relative">
                <div className="h-28 w-28 overflow-hidden rounded-2xl border-2 border-red-500/40 bg-[#171717]">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-600">
                      <FaUser size={40} />
                    </div>
                  )}
                </div>

                <label
                  htmlFor="profilePhoto"
                  className="absolute -bottom-2 -right-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border-2 border-black bg-red-600 text-white transition hover:bg-red-500"
                >
                  <FaCamera size={16} />
                </label>

                <input
                  id="profilePhoto"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handlePhoto}
                  className="hidden"
                />
              </div>

              <div className="text-center sm:text-left">
                <h2 className="text-lg font-black">
                  Profile Photograph
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  Upload a clear photograph of yourself.
                </p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-red-400">
                  JPG, PNG, WEBP · Max 10 MB
                </p>
              </div>
            </div>
          </motion.div>

          {message.text && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${
                message.type === "success"
                  ? "border-green-500/20 bg-green-500/10 text-green-400"
                  : "border-red-500/20 bg-red-500/10 text-red-400"
              }`}
            >
              {message.type === "success" ? (
                <FaCheckCircle size={18} />
              ) : (
                <FaExclamationCircle size={18} />
              )}
              {message.text}
            </motion.div>
          )}

          <Section
            icon={FaUser}
            title="Personal Information"
            description="Your basic contestant details"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name">
                <input required name="fullName" value={form.fullName} onChange={handleChange} className={inputClass} placeholder="Your full name" />
              </Field>

              <Field label="Date of Birth">
                <input required type="date" name="dob" value={form.dob} onChange={handleChange} className={inputClass} />
              </Field>

              <Field label="Gender">
                <select name="gender" value={form.gender} onChange={handleChange} className={inputClass}>
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </Field>

              <Field label="Mobile Number">
                <input name="mobile" value={form.mobile} onChange={handleChange} className={inputClass} placeholder="Your mobile number" />
              </Field>
            </div>
          </Section>

          <Section
            icon={FaMapMarkerAlt}
            title="Location & Address"
            description="Where you are based"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="City">
                <input name="city" value={form.city} onChange={handleChange} className={inputClass} placeholder="Enter city" />
              </Field>

              <Field label="State">
                <input name="state" value={form.state} onChange={handleChange} className={inputClass} placeholder="Enter state" />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Permanent Address">
                  <textarea rows={3} name="permanentAddress" value={form.permanentAddress} onChange={handleChange} className={inputClass} placeholder="Enter your complete address" />
                </Field>
              </div>
            </div>
          </Section>

          <Section
            icon={FaIdCard}
            title="Identity Verification"
            description="Update your government-issued identity proof"
          >
            <div className="space-y-5">
              <div className="rounded-xl border border-white/10 bg-[#111] p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">
                      Current Identity Proof
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Your currently submitted identity document
                    </p>
                  </div>

                  {existingIdentityProof?.url ? (
                    <a
                      href={existingIdentityProof.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-red-400 transition hover:text-red-300"
                    >
                      <FaIdCard />
                      View Current Document
                    </a>
                  ) : (
                    <span className="text-xs text-yellow-500">
                      No identity proof found
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  Upload New Identity Proof
                </label>

                <label
                  htmlFor="identityProof"
                  className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-[#111] px-5 py-8 text-center transition hover:border-red-500/60 hover:bg-red-500/[0.03]"
                >
                  <FaIdCard size={30} className="mb-3 text-red-500" />

                  <span className="text-sm font-bold text-white">
                    {identityProof
                      ? identityProof.name
                      : "Choose Identity Document"}
                  </span>

                  <span className="mt-2 text-xs text-gray-500">
                    Upload Aadhaar Card, PAN Card, Passport or other valid ID
                  </span>

                  <span className="mt-2 text-[10px] font-bold uppercase tracking-wider text-red-400">
                    JPG, PNG, WEBP, PDF · Max 10 MB
                  </span>
                </label>

                <input
                  id="identityProof"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,application/pdf"
                  onChange={handleIdentityProof}
                  className="hidden"
                />

                {identityProof && (
                  <div className="mt-3 flex items-center justify-between rounded-xl border border-green-500/20 bg-green-500/5 p-3">
                    <div className="flex min-w-0 items-center gap-2">
                      <FaCheckCircle className="shrink-0 text-green-500" />
                      <span className="truncate text-xs text-green-400">
                        {identityProof.name}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setIdentityProof(null);
                        const input = document.getElementById("identityProof");
                        if (input) input.value = "";
                      }}
                      className="ml-3 text-xs font-bold text-red-400 hover:text-red-300"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              <p className="text-xs leading-5 text-gray-500">
                Your new document will be submitted for verification.
                The previous document will be replaced after successful upload.
              </p>
            </div>
          </Section>

          <Section
            icon={FaGraduationCap}
            title="Professional Details"
            description="Tell us about your background"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Occupation">
                <input name="occupation" value={form.occupation} onChange={handleChange} className={inputClass} placeholder="Your occupation" />
              </Field>

              <Field label="Education">
                <input name="education" value={form.education} onChange={handleChange} className={inputClass} placeholder="Your education" />
              </Field>

              <div className="sm:col-span-2">
                <Field label="About Yourself">
                  <textarea rows={5} maxLength={1000} name="bio" value={form.bio} onChange={handleChange} className={inputClass} placeholder="Write something about yourself..." />
                  <p className="mt-2 text-right text-[10px] text-gray-600">
                    {form.bio.length}/1000
                  </p>
                </Field>
              </div>
            </div>
          </Section>

          <Section
            icon={FaPhone}
            title="Emergency Contact"
            description="Someone we can contact if needed"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Contact Name">
                <input name="emergencyName" value={form.emergencyName} onChange={handleChange} className={inputClass} placeholder="Full name" />
              </Field>

              <Field label="Mobile Number">
                <input name="emergencyMobile" value={form.emergencyMobile} onChange={handleChange} className={inputClass} placeholder="Contact number" />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Relationship">
                  <input name="emergencyRelation" value={form.emergencyRelation} onChange={handleChange} className={inputClass} placeholder="e.g. Father, Mother, Friend" />
                </Field>
              </div>
            </div>
          </Section>

          <Section
            icon={FaShareAlt}
            title="Social Media"
            description="Connect your social profiles"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Instagram">
                <div className="relative">
                  <FaInstagram className="absolute left-4 top-3.5 text-pink-500" size={17} />
                  <input name="instagram" value={form.instagram} onChange={handleChange} className={`${inputClass} pl-11`} placeholder="Instagram URL" />
                </div>
              </Field>

              <Field label="Facebook">
                <div className="relative">
                  <FaFacebook className="absolute left-4 top-3.5 text-blue-500" size={17} />
                  <input name="facebook" value={form.facebook} onChange={handleChange} className={`${inputClass} pl-11`} placeholder="Facebook URL" />
                </div>
              </Field>

              <Field label="YouTube">
                <div className="relative">
                  <FaYoutube className="absolute left-4 top-3.5 text-red-500" size={17} />
                  <input name="youtube" value={form.youtube} onChange={handleChange} className={`${inputClass} pl-11`} placeholder="YouTube URL" />
                </div>
              </Field>

              <Field label="Twitter / X">
                <div className="relative">
                  <FaShareAlt className="absolute left-4 top-3.5 text-gray-400" size={17} />
                  <input name="twitter" value={form.twitter} onChange={handleChange} className={`${inputClass} pl-11`} placeholder="Twitter / X URL" />
                </div>
              </Field>
            </div>
          </Section>

          <div className="flex flex-col-reverse gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <FaShieldAlt size={16} className="text-green-500" />
              Your profile information is securely submitted.
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => router.push("/dashboard")}
                className="flex-1 rounded-xl border border-white/10 px-5 py-3 text-sm font-bold text-gray-400 transition hover:border-white/30 hover:text-white sm:flex-none"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={saving}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-red-950/30 transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60 sm:flex-none"
              >
                {saving ? (
                  <>
                    <FaSpinner className="animate-spin" size={16} />
                    Saving...
                  </>
                ) : (
                  <>
                    <FaSave size={16} />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
