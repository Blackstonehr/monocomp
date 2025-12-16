"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Home, Menu, Sparkles, X } from "lucide-react";
import { Button, Card, Container, Footer, MotionSection, SectionTitle, StarRating } from "@blackstone/core";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg dark:bg-black/80">
      <Container className="flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Globe className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            LanguBridge
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </Container>
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-black px-4 pb-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-zinc-600 hover:text-blue-600 dark:text-zinc-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export function LanguBridgeHomepage() {
  const [activeTab, setActiveTab] = useState("high-school");

  return (
    <div className="bg-zinc-50 font-sans text-zinc-800 dark:bg-black dark:text-zinc-200">
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <MotionSection className="relative overflow-hidden bg-white dark:bg-zinc-900">
          <Container className="grid min-h-[calc(100vh-5rem)] items-center py-20 text-center md:grid-cols-2 md:text-left">
            <div className="space-y-6">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
                Connect the world by language
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-300 md:text-xl">
                Immersive summer language programs in Korea, Japan, and China.
              </p>
              <Button>Explore Programs</Button>
            </div>
            <div className="mt-10 md:mt-0 flex justify-center">
              <div className="h-80 w-80 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
                <p className="text-zinc-500">Image/Video Placeholder</p>
              </div>
            </div>
          </Container>
        </MotionSection>

        {/* Why LanguBridge */}
        <MotionSection className="bg-white py-24 sm:py-32">
          <Container>
            <SectionTitle
              title="Why LanguBridge?"
              subtitle="Immersive cultural experiences, curated by people who care"
            />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: <Home className="h-8 w-8 text-blue-500" />,
                  title: "Trusted Homestays",
                  desc: "Live with carefully vetted local families for a true cultural immersion.",
                },
                {
                  icon: <Globe className="h-8 w-8 text-green-500" />,
                  title: "Cultural Immersion",
                  desc: "Go beyond the classroom with guided excursions and local activities.",
                },
                {
                  icon: <Sparkles className="h-8 w-8 text-purple-500" />,
                  title: "Transparent Pricing",
                  desc: "No hidden fees. Our program costs cover tuition, housing, and more.",
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="group rounded-2xl border border-transparent bg-white p-8 text-center shadow-lg dark:bg-zinc-900"
                  whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" }}
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
                    {item.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </Container>
        </MotionSection>

        {/* Programs */}
        <section id="programs" className="bg-white py-24 dark:bg-zinc-900 sm:py-32">
          <MotionSection>
            <SectionTitle
              title="Our Programs"
              subtitle="Immersive summer sessions for high school and college students."
            />
            <div className="mt-8 flex justify-center border-b border-zinc-200 dark:border-zinc-700">
              <button
                onClick={() => setActiveTab("high-school")}
                className={`px-6 py-3 text-lg font-medium ${
                  activeTab === "high-school"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-zinc-500"
                }`}
              >
                High School
              </button>
              <button
                onClick={() => setActiveTab("college")}
                className={`px-6 py-3 text-lg font-medium ${
                  activeTab === "college"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-zinc-500"
                }`}
              >
                College
              </button>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <h3 className="text-xl font-bold">Korea Summer A</h3>
                <p className="mt-1 text-sm text-zinc-500">June 15 - July 13</p>
                <p className="mt-4 text-2xl font-bold">$4,200</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400 flex-grow">
                  <li>✓ 4 Weeks</li>
                  <li>✓ Tuition & Dorm</li>
                  <li>✓ Airport Pickup</li>
                  <li>✓ Insurance</li>
                </ul>
                <Button className="mt-6 w-full !bg-zinc-800 hover:!bg-zinc-950 dark:!bg-zinc-200 dark:text-black dark:hover:!bg-white">
                  View Details
                </Button>
              </Card>
            </div>
          </MotionSection>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 sm:py-32">
          <MotionSection>
            <SectionTitle
              title="From Our Students"
              subtitle="Real stories from our global alumni."
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "My summer in Seoul was life-changing. The homestay family was so kind, and I made friends from all over the world.",
                  name: "Emily R.",
                  details: "2023, USA",
                  rating: 5,
                },
                {
                  quote:
                    "LanguBridge organized everything perfectly. The classes were challenging but fun, and the cultural trips were amazing.",
                  name: "Carlos G.",
                  details: "2023, Spain",
                  rating: 5,
                },
                {
                  quote:
                    "I was nervous about going alone, but the staff and other students were so welcoming. I learned so much Japanese in just a month!",
                  name: "Aisha K.",
                  details: "2022, Canada",
                  rating: 4,
                },
              ].map((t) => (
                <Card key={t.name}>
                  <StarRating rating={t.rating} />
                  <blockquote className="mt-4 text-zinc-700 dark:text-zinc-300">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 font-semibold">{t.name}</p>
                  <p className="text-sm text-zinc-500">{t.details}</p>
                </Card>
              ))}
            </div>
          </MotionSection>
        </section>

        {/* CTA */}
        <MotionSection className="bg-blue-600 text-white">
          <Container className="py-20 text-center">
            {/* The SectionTitle adds its own margin, so we adjust the Button's margin */}
            <SectionTitle title="Ready to build a global future?" />
            <Button className="!bg-white !text-blue-600 hover:!bg-zinc-100">
              Start Your Journey
            </Button>
          </Container>
        </MotionSection>
      </main>

      <Footer />
    </div>
  );
}
