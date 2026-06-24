"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Loader from "@/components/ui/Loader";
import FadeIn from "@/components/animations/FadeIn";

type Status = "idle" | "loading" | "sent" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      restaurant: form.get("restaurant"),
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <FadeIn className="max-w-xl">
          <Badge>Contact</Badge>
          <h1 className="mt-5 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Tell us about your kitchen.
          </h1>
          <p className="mt-5 text-lg text-cream-muted">
            Questions about a Group plan, a feature request, or just want a
            demo before you commit — we read every message.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Your name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Restaurant name" name="restaurant" />
                <div>
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-cream-muted">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border border-cream/10 bg-roast-900/60 px-4 py-3 text-sm text-cream placeholder:text-cream-muted/50 focus-visible:border-ember-500/50"
                    placeholder="What are you trying to fix or launch?"
                  />
                </div>

                <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
                  {status === "loading" && <Loader />}
                  {status === "loading" ? "Sending..." : "Send message"}
                </Button>

                {status === "sent" && (
                  <p className="text-sm text-ember-300">
                    Got it — we&apos;ll reply within one business day.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Try again, or email us directly.
                  </p>
                )}
              </form>
            </GlassCard>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <GlassCard className="h-full p-8">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ember-500/15 text-ember-300">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-cream">Email</p>
                    <p className="text-sm text-cream-muted">hello@embers.ai</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ember-500/15 text-ember-300">
                    <MessageCircle size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-cream">WhatsApp</p>
                    <p className="text-sm text-cream-muted">+1 (415) 555-0142</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ember-500/15 text-ember-300">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-cream">Studio</p>
                    <p className="text-sm text-cream-muted">
                      Remote-first, with team in San Francisco & Mumbai
                    </p>
                  </div>
                </li>
              </ul>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-cream-muted">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-cream/10 bg-roast-900/60 px-4 py-3 text-sm text-cream placeholder:text-cream-muted/50 focus-visible:border-ember-500/50"
      />
    </div>
  );
}
