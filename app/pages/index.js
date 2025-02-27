"use client";

import Head from "../components/header";
import ButText from "../components/txt";

export default function HomePage() {
  const aboutContent = {
    title: "Search,Find, & Apply",
    description: "Connecting job seekers with top employers worldwide. Explore thousands of opportunities, apply with ease, and take the next step in your career with our advanced job-matching platform.",
  };

  return (
    <div className="w-full">
      <Head activeSection="home" />
      <ButText
        title={aboutContent.title}
        description={aboutContent.description}
      />
    </div>
  );
}
