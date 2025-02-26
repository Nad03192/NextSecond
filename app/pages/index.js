"use client";

import Head from "../components/header";
import ButText from "../components/txt";
import { useState } from "react";
import Side from "../components/side"
export default function HomePage() {
  const [aboutContent, setAboutContent] = useState({
    title: "Find Your Dream Job Effortlessly",
    description: "Connecting job seekers with top employers worldwide. Explore thousands of opportunities, apply with ease, and take the next step in your career with our advanced job-matching platform.",
  });
  
  return (
    <div className="mt-10 pt-20">
      
       <Head activeSection="home" />
       
       <ButText
           
            title={aboutContent.title}
            description={aboutContent.description}
         
          />
    
    </div>
  );
}
