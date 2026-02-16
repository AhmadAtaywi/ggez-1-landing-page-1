"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ChevronDown, Check } from "lucide-react"

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia",
  "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
  "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
  "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
  "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
  "Denmark", "Djibouti", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
  "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia",
  "Germany", "Ghana", "Greece", "Guatemala", "Guinea", "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan",
  "Latvia", "Lebanon", "Libya", "Lithuania", "Luxembourg", "Madagascar", "Malaysia",
  "Maldives", "Mali", "Malta", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro",
  "Morocco", "Mozambique", "Myanmar", "Nepal", "Netherlands", "New Zealand", "Nigeria",
  "North Macedonia", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Paraguay",
  "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saudi Arabia", "Senegal", "Serbia", "Singapore", "Slovakia", "Slovenia", "Somalia",
  "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Trinidad and Tobago",
  "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe",
]

const countryCodes = [
  { code: "+1", country: "US" },
  { code: "+1", country: "CA" },
  { code: "+44", country: "UK" },
  { code: "+33", country: "FR" },
  { code: "+49", country: "DE" },
  { code: "+41", country: "CH" },
  { code: "+971", country: "AE" },
  { code: "+966", country: "SA" },
  { code: "+961", country: "LB" },
  { code: "+962", country: "JO" },
  { code: "+20", country: "EG" },
  { code: "+91", country: "IN" },
  { code: "+86", country: "CN" },
  { code: "+81", country: "JP" },
  { code: "+82", country: "KR" },
  { code: "+61", country: "AU" },
  { code: "+55", country: "BR" },
  { code: "+52", country: "MX" },
  { code: "+27", country: "ZA" },
  { code: "+234", country: "NG" },
  { code: "+254", country: "KE" },
  { code: "+7", country: "RU" },
  { code: "+90", country: "TR" },
  { code: "+31", country: "NL" },
  { code: "+34", country: "ES" },
  { code: "+39", country: "IT" },
  { code: "+48", country: "PL" },
  { code: "+46", country: "SE" },
  { code: "+47", country: "NO" },
  { code: "+45", country: "DK" },
  { code: "+351", country: "PT" },
  { code: "+30", country: "GR" },
  { code: "+36", country: "HU" },
  { code: "+43", country: "AT" },
  { code: "+32", country: "BE" },
  { code: "+60", country: "MY" },
  { code: "+65", country: "SG" },
  { code: "+63", country: "PH" },
  { code: "+62", country: "ID" },
  { code: "+66", country: "TH" },
  { code: "+84", country: "VN" },
  { code: "+92", country: "PK" },
  { code: "+880", country: "BD" },
  { code: "+974", country: "QA" },
  { code: "+968", country: "OM" },
  { code: "+973", country: "BH" },
  { code: "+965", country: "KW" },
]

export default function SignUpPage() {
  const [accountType, setAccountType] = useState("")
  const [country, setCountry] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneCode, setPhoneCode] = useState("+1")
  const [phone, setPhone] = useState("")
  const [confirmAge, setConfirmAge] = useState(false)
  const [agreePolicy, setAgreePolicy] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder submission logic
  }

  return (
    <div className="relative min-h-screen bg-background grid-bg">
      {/* Glow effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-6 py-24">
        {/* Back link */}
        <Link
          href="/"
          className="mb-8 flex items-center gap-2 self-start text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Logo */}
        <div className="mb-8 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="font-heading text-sm font-bold text-primary-foreground">
              G1
            </span>
          </div>
          <span className="font-heading text-xl font-bold text-foreground">
            GGEZ1
          </span>
        </div>

        <div className="glass-card w-full rounded-2xl p-8 sm:p-10">
          <div className="mb-8 text-center">
            <h1 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
              Create Your Account
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Join the GGEZ1 ecosystem and start investing in sustainability.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Account Type */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="accountType"
                className="text-sm font-medium text-foreground"
              >
                Account Type
              </label>
              <div className="relative">
                <select
                  id="accountType"
                  value={accountType}
                  onChange={(e) => setAccountType(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-border bg-secondary/50 px-4 py-3 pr-10 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                >
                  <option value="" disabled>
                    Select account type
                  </option>
                  <option value="individual">Individual</option>
                  <option value="organization">Organization</option>
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
              </div>
            </div>

            {/* Country */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="country"
                className="text-sm font-medium text-foreground"
              >
                Country
              </label>
              <div className="relative">
                <select
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-border bg-secondary/50 px-4 py-3 pr-10 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                >
                  <option value="" disabled>
                    Select your country
                  </option>
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
              </div>
            </div>

            {/* First Name / Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-foreground"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-foreground"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-foreground"
              >
                Phone Number
              </label>
              <div className="flex gap-2">
                <div className="relative">
                  <select
                    id="phoneCode"
                    value={phoneCode}
                    onChange={(e) => setPhoneCode(e.target.value)}
                    className="h-full w-[110px] appearance-none rounded-lg border border-border bg-secondary/50 px-3 py-3 pr-8 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    {countryCodes.map((cc) => (
                      <option key={`${cc.code}-${cc.country}`} value={cc.code}>
                        {cc.code} {cc.country}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={14}
                    className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                  />
                </div>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="123 456 7890"
                  className="flex-1 rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="mt-2 flex flex-col gap-4">
              <label className="flex cursor-pointer items-start gap-3">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={confirmAge}
                  onClick={() => setConfirmAge(!confirmAge)}
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                    confirmAge
                      ? "border-primary bg-primary"
                      : "border-border bg-secondary/50"
                  }`}
                >
                  {confirmAge && (
                    <Check size={12} className="text-primary-foreground" />
                  )}
                </button>
                <span className="text-sm text-muted-foreground">
                  I confirm that I am 18 years of age or older.
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={agreePolicy}
                  onClick={() => setAgreePolicy(!agreePolicy)}
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                    agreePolicy
                      ? "border-primary bg-primary"
                      : "border-border bg-secondary/50"
                  }`}
                >
                  {agreePolicy && (
                    <Check size={12} className="text-primary-foreground" />
                  )}
                </button>
                <span className="text-sm text-muted-foreground">
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-primary underline hover:opacity-80"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-primary underline hover:opacity-80"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!confirmAge || !agreePolicy}
              className="mt-4 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Create Account
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href="#" className="text-primary hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  )
}
