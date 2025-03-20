import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import LandingPage from "./component/LandingPage";
import ResumeAI from "./component/ResumeAI";
import HunterPilot from "./component/HunterPilot";
import JobCard from "./component/JobCard";
import Footer from "./component/Footer";

const jobs = [
  {
    jobTitle: "Frontend Developer",
    companyName: "Tech Innovators Inc.",
    location: "Remote",
    jobType: "Full-Time",
    experienceLevel: "Mid-Level",
    salary: "$80,000 - $100,000",
    companyLogo: "https://via.placeholder.com/150",
    applyLink: "#",
  },
  {
    jobTitle: "Data Scientist",
    companyName: "Data Wizards LLC",
    location: "New York, NY",
    jobType: "Contract",
    experienceLevel: "Senior",
    salary: "$120,000 - $140,000",
    companyLogo: "https://via.placeholder.com/150",
    applyLink: "#",
  },
  {
    jobTitle: "UI/UX Designer",
    companyName: "Creative Minds Co.",
    location: "San Francisco, CA",
    jobType: "Part-Time",
    experienceLevel: "Entry-Level",
    salary: "$60,000 - $80,000",
    companyLogo: "https://via.placeholder.com/150",
    applyLink: "#",
  },
];

function App() {
  return (
    <>
      <div>
        <Navbar />
        <LandingPage />
        <Routes>
          <Route path="/hunter-pilot" element={<HunterPilot />} />
          <Route path="/resume-ai" element={<ResumeAI />} />
        </Routes>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
              Latest Job Openings
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
