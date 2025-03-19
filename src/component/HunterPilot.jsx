import React, { useState } from "react";

const HunterPilot = () => {
  const [step, setStep] = useState(1);
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [referralDetails, setReferralDetails] = useState("");
  const [matchedJobs, setMatchedJobs] = useState([]);

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
    setStep(2);
  };

  const handleJobDescriptionChange = (e) => {
    setJobDescription(e.target.value);
  };

  const generateCoverLetter = () => {
    // Simulate cover letter generation
    setCoverLetter(`Dear Hiring Manager,

I am excited to apply for the [Job Title] position at [Company Name]. With my experience in [Your Field], I am confident in my ability to contribute effectively to your team.

Sincerely,
[Your Name]`);
    setStep(3);
  };

  const getReferralDetails = () => {
    // Simulate referral details
    setReferralDetails("Contact John Doe at john.doe@company.com for a referral.");
    setStep(4);
  };

  const findMatchedJobs = () => {
    // Simulate job matching
    setMatchedJobs([
      { title: "Frontend Developer", company: "Tech Innovators Inc.", location: "Remote" },
      { title: "Data Scientist", company: "Data Wizards LLC", location: "New York, NY" },
    ]);
    setStep(5);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
          Hunter Pilot
        </h1>

        {/* Step 1: Upload Resume */}
        {step === 1 && (
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Step 1: Upload Your Resume
            </h2>
            <label className="cursor-pointer">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeUpload}
                className="hidden"
              />
              <div className="bg-blue-100 p-6 rounded-lg border-2 border-dashed border-blue-300 hover:bg-blue-200 transition duration-300">
                <p className="text-blue-900 font-semibold">
                  {resume ? resume.name : "Upload Your Resume (PDF or DOC)"}
                </p>
              </div>
            </label>
          </div>
        )}

        {/* Step 2: Enter Job Description */}
        {step === 2 && (
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Step 2: Enter Job Description
            </h2>
            <textarea
              value={jobDescription}
              onChange={handleJobDescriptionChange}
              placeholder="Paste the job description here..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              rows="6"
            />
            <button
              onClick={generateCoverLetter}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
            >
              Generate Cover Letter
            </button>
          </div>
        )}

        {/* Step 3: Cover Letter */}
        {step === 3 && (
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Step 3: Your Cover Letter
            </h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <pre className="text-gray-700 whitespace-pre-wrap">{coverLetter}</pre>
            </div>
            <button
              onClick={getReferralDetails}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
            >
              Get Referral Details
            </button>
          </div>
        )}

        {/* Step 4: Referral Details */}
        {step === 4 && (
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Step 4: Referral Details
            </h2>
            <p className="text-gray-700">{referralDetails}</p>
            <button
              onClick={findMatchedJobs}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
            >
              Find Matched Jobs
            </button>
          </div>
        )}

        {/* Step 5: Matched Jobs */}
        {step === 5 && (
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Step 5: Perfectly Matched Jobs
            </h2>
            <div className="space-y-4">
              {matchedJobs.map((job, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-900">{job.title}</h3>
                  <p className="text-gray-600">{job.company}</p>
                  <p className="text-gray-500">{job.location}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HunterPilot;